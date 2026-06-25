"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import React, { useState, useRef, useEffect, useCallback } from "react";

interface SystemModule {
  id: string;
  name: string;
  x: number;
  y: number;
  connections: string[];
  performance: number;
  cost: number;
  complexity: number;
  memoryUsage: number;
  requestRate: number;
}

const INITIAL_MODULES: SystemModule[] = [
  { id: "frontend", name: "Frontend", x: 150, y: 200, connections: ["api"], performance: 85, cost: 30, complexity: 40, memoryUsage: 45, requestRate: 100 },
  { id: "api", name: "API Gateway", x: 400, y: 200, connections: ["database", "cache"], performance: 90, cost: 40, complexity: 60, memoryUsage: 60, requestRate: 150 },
  { id: "database", name: "Database", x: 650, y: 150, connections: [], performance: 70, cost: 50, complexity: 80, memoryUsage: 120, requestRate: 80 },
  { id: "cache", name: "Cache", x: 650, y: 250, connections: [], performance: 95, cost: 20, complexity: 30, memoryUsage: 30, requestRate: 200 },
];

export default function InteractivePlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [modules, setModules] = useState<SystemModule[]>(INITIAL_MODULES);
  const [draggedModule, setDraggedModule] = useState<string | null>(null);
  const [hoveredModule, setHoveredModule] = useState<string | null>(null);
  const [systemLoad, setSystemLoad] = useState(50);
  const [autoScale, setAutoScale] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);
  const [dataSize, setDataSize] = useState(1000);
  const [cacheEnabled, setCacheEnabled] = useState(true);
  const [compressionEnabled, setCompressionEnabled] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Calculate system metrics with real-time simulation
  const calculateMetrics = useCallback(() => {
    const avgPerformance = modules.reduce((sum, m) => sum + m.performance, 0) / modules.length;
    const totalCost = modules.reduce((sum, m) => sum + m.cost, 0);
    const avgComplexity = modules.reduce((sum, m) => sum + m.complexity, 0) / modules.length;
    const totalMemory = modules.reduce((sum, m) => sum + m.memoryUsage, 0);
    const totalRequests = modules.reduce((sum, m) => sum + m.requestRate, 0);
    
    const loadFactor = systemLoad / 100;
    const dataSizeFactor = Math.log10(dataSize) / 3; // Normalize data size impact
    
    // Performance degradation under load
    const loadImpact = 1 - (loadFactor * 0.4 * dataSizeFactor);
    const adjustedPerformance = Math.max(20, avgPerformance * loadImpact);
    
    // Cost scaling with auto-scaling and data size
    const scaledCost = autoScale 
      ? totalCost * (1 + loadFactor) * (1 + dataSizeFactor * 0.2)
      : totalCost * (1 + dataSizeFactor * 0.1);
    
    // Latency calculation based on performance and load
    const baseLatency = 100 / adjustedPerformance;
    const latency = Math.round(baseLatency * (1 + loadFactor * 2));
    
    // Throughput calculation
    const throughput = Math.round(totalRequests * (adjustedPerformance / 100) * (cacheEnabled ? 1.5 : 1));
    
    // FPS based on system complexity and load
    const fps = Math.round(60 * (adjustedPerformance / 100) * (1 - avgComplexity / 200));
    
    // Error rate increases with load and complexity
    const errorRate = Math.max(0.1, (loadFactor * avgComplexity / 100) * (compressionEnabled ? 0.8 : 1.2));
    
    return {
      performance: Math.round(adjustedPerformance),
      cost: Math.round(scaledCost),
      complexity: Math.round(avgComplexity),
      throughput,
      latency,
      fps: Math.max(15, fps),
      memoryUsage: Math.round(totalMemory * (1 + loadFactor * 0.5)),
      errorRate: Math.round(errorRate * 10) / 10
    };
  }, [modules, systemLoad, autoScale, dataSize, cacheEnabled, compressionEnabled]);

  // Canvas rendering
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      modules.forEach(module => {
        module.connections.forEach(targetId => {
          const target = modules.find(m => m.id === targetId);
          if (target) {
            ctx.beginPath();
            ctx.moveTo(module.x, module.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = hoveredModule === module.id || hoveredModule === targetId 
              ? '#ffffff40' : '#ffffff20';
            ctx.lineWidth = hoveredModule === module.id || hoveredModule === targetId ? 2 : 1;
            ctx.stroke();
          }
        });
      });
      
      // Draw modules
      modules.forEach(module => {
        const isHovered = hoveredModule === module.id;
        const isDragged = draggedModule === module.id;
        
        // Module circle
        ctx.beginPath();
        
        // Module performance based on current conditions
        const performanceModifier = hoveredModule === module.id ? 1.1 : 1;
        const currentPerformance = module.performance * performanceModifier;
        const perfColor = currentPerformance > 80 ? '#10B981' : 
                         currentPerformance > 60 ? '#F59E0B' : '#EF4444';
        
        // Animated pulse for active modules
        const pulseScale = isSimulating ? 1 + Math.sin(Date.now() / 200) * 0.1 : 1;
        ctx.arc(module.x, module.y, (isHovered ? 35 : 30) * pulseScale, 0, Math.PI * 2);
        ctx.fillStyle = perfColor + (isDragged ? 'FF' : 'CC');
        ctx.fill();
        
        if (isHovered || isDragged) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
        
        // Module name and stats
        ctx.fillStyle = '#ffffff';
        ctx.font = '12px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(module.name, module.x, module.y + 50);
        
        // Performance indicator with real-time updates
        ctx.fillStyle = '#ffffff60';
        ctx.font = '10px monospace';
        ctx.fillText(`${Math.round(currentPerformance)}%`, module.x, module.y + 65);
        
        // Request rate indicator
        if (isSimulating) {
          ctx.fillStyle = '#ffffff40';
          ctx.fillText(`${module.requestRate} req/s`, module.x, module.y + 78);
        }
      });
      
      requestAnimationFrame(render);
    };
    
    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      requestAnimationFrame(render);
    };
  }, [modules, hoveredModule, draggedModule, isSimulating]);

  // Mouse handlers
  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Find clicked module
    const clickedModule = modules.find(m => {
      const dist = Math.sqrt((m.x - x) ** 2 + (m.y - y) ** 2);
      return dist <= 30;
    });
    
    if (clickedModule) {
      setDraggedModule(clickedModule.id);
    }
  };

  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    if (draggedModule) {
      setModules(prev => prev.map(m => 
        m.id === draggedModule ? { ...m, x, y } : m
      ));
    } else {
      // Check hover
      const hoveredModuleFound = modules.find(m => {
        const dist = Math.sqrt((m.x - x) ** 2 + (m.y - y) ** 2);
        return dist <= 30;
      });
      setHoveredModule(hoveredModuleFound?.id || null);
    }
  };

  const handleCanvasMouseUp = () => {
    setDraggedModule(null);
  };

  const metrics = calculateMetrics();

  return (
    <section id="playground" ref={containerRef} className="min-h-screen relative bg-[#050505] overflow-hidden">
      <motion.div style={{ opacity }} className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white/90 mb-4">
              Interactive Systems
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Drag modules. Adjust load. Watch the system respond.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Canvas Playground */}
            <div className="lg:col-span-2">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-medium text-white/90 mb-4">System Architecture</h3>
                <canvas
                  ref={canvasRef}
                  className="w-full h-96 bg-black/30 rounded cursor-move"
                  onMouseDown={handleCanvasMouseDown}
                  onMouseMove={handleCanvasMouseMove}
                  onMouseUp={handleCanvasMouseUp}
                  onMouseLeave={handleCanvasMouseUp}
                />
                <div className="mt-4 text-center text-white/50 text-sm">
                  Drag modules to reposition • Hover to see connections
                </div>
              </div>
            </div>

            {/* Controls & Metrics */}
            <div className="space-y-6">
              {/* System Controls */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white/90 mb-4">System Controls</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      System Load: {systemLoad}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={systemLoad}
                      onChange={(e) => setSystemLoad(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Auto Scaling</span>
                    <button
                      onClick={() => setAutoScale(!autoScale)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        autoScale ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-black rounded-full transition-transform ${
                        autoScale ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  
                  <div>
                    <label className="text-white/60 text-sm block mb-2">
                      Data Size: {dataSize.toLocaleString()} records
                    </label>
                    <input
                      type="range"
                      min="100"
                      max="100000"
                      step="100"
                      value={dataSize}
                      onChange={(e) => setDataSize(Number(e.target.value))}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Cache Enabled</span>
                    <button
                      onClick={() => setCacheEnabled(!cacheEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        cacheEnabled ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-black rounded-full transition-transform ${
                        cacheEnabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white/60 text-sm">Compression</span>
                    <button
                      onClick={() => setCompressionEnabled(!compressionEnabled)}
                      className={`w-12 h-6 rounded-full transition-colors ${
                        compressionEnabled ? 'bg-white' : 'bg-white/20'
                      }`}
                    >
                      <div className={`w-5 h-5 bg-black rounded-full transition-transform ${
                        compressionEnabled ? 'translate-x-6' : 'translate-x-0.5'
                      }`} />
                    </button>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10">
                    <button
                      onClick={() => setIsSimulating(!isSimulating)}
                      className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                        isSimulating 
                          ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' 
                          : 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
                      }`}
                    >
                      {isSimulating ? 'Stop Simulation' : 'Start Simulation'}
                    </button>
                  </div>
                </div>
              </div>

              {/* System Metrics */}
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h3 className="text-lg font-medium text-white/90 mb-4">Live Metrics</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Performance</span>
                    <span className={`font-mono ${
                      metrics.performance > 80 ? 'text-green-400' : 
                      metrics.performance > 60 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.performance}%
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Cost/mon</span>
                    <span className="font-mono text-white/80">${metrics.cost}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Complexity</span>
                    <span className="font-mono text-white/80">{metrics.complexity}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Throughput</span>
                    <span className="font-mono text-white/80">{metrics.throughput} req/s</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Latency</span>
                    <span className="font-mono text-white/80">{metrics.latency}ms</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">FPS</span>
                    <span className={`font-mono ${
                      metrics.fps > 50 ? 'text-green-400' : 
                      metrics.fps > 30 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.fps}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Memory</span>
                    <span className="font-mono text-white/80">{metrics.memoryUsage}MB</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Error Rate</span>
                    <span className={`font-mono ${
                      metrics.errorRate < 1 ? 'text-green-400' : 
                      metrics.errorRate < 5 ? 'text-yellow-400' : 'text-red-400'
                    }`}>
                      {metrics.errorRate}%
                    </span>
                  </div>
                </div>
              </div>

              {/* Module Info */}
              {hoveredModule && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-white/10 rounded-lg p-6"
                >
                  <h3 className="text-lg font-medium text-white/90 mb-4">
                    {modules.find(m => m.id === hoveredModule)?.name}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/60">Performance</span>
                      <span className="text-white/80">
                        {modules.find(m => m.id === hoveredModule)?.performance}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Cost</span>
                      <span className="text-white/80">
                        ${modules.find(m => m.id === hoveredModule)?.cost}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Complexity</span>
                      <span className="text-white/80">
                        {modules.find(m => m.id === hoveredModule)?.complexity}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-white/50 text-sm">
              This is how I think about systems every component affects the whole.
              <br />
              Adjust the controls and watch how changes cascade through the architecture.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

"use client";

import React, { createContext, useContext, ReactNode } from 'react';

type DisplayMode = 'cinematic';

interface ModeContextType {
  mode: DisplayMode;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const mode: DisplayMode = 'cinematic';

  return (
    <ModeContext.Provider value={{ mode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error('useMode must be used within a ModeProvider');
  }
  return context;
}

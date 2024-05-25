"use client";

import { createContext, useState } from "react";

export const PresetContext = createContext({
  preset: "nopreset",
  setPresetValue: (value: string) => {},
});

export function PresetProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [preset, setPreset] = useState<string>("nopreset");

  const setPresetValue = (value: string) => {
    setPreset(value);
  };

  return (
    <PresetContext.Provider value={{ preset, setPresetValue }}>
      {children}
    </PresetContext.Provider>
  );
}

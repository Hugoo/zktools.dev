"use client";

import { useEffect, useState } from "react";

const presets = [
  {
    name: "multiply.circom",
    color: "teal",
  },
  {
    name: "add.circom",
    color: "blue",
  },
  {
    name: "divide.circom",
    color: "red",
  },
];

const PresetButtons: React.FC = () => {
  const [selectedPreset, setSelectedPreset] = useState(presets[0].name);

  return (
    <div className="mb-8 flex justify-center space-x-4 items-center">
      <span className="font-bold">Preset</span>
      {presets.map((preset) => {
        return (
          <button
            type="button"
            key={preset.name}
            onClick={() => {
              setSelectedPreset(preset.name);
            }}
            className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-${
              preset.color
            }-${
              selectedPreset == preset.name ? "400" : "100"
            } text-gray-800 hover:bg-${
              preset.color
            }-200 disabled:opacity-50 disabled:pointer-events-none`}
          >
            {preset.name}
          </button>
        );
      })}
    </div>
  );
};

export default PresetButtons;

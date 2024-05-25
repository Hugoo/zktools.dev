"use client";

import { useState } from "react";

const presets = [
  {
    id: "nopreset",
    name: "no preset",
    color: "gray",
  },
  {
    id: "multiply",
    name: "multiply.circom",
    color: "teal",
  },
  {
    id: "add",
    name: "add.circom",
    color: "blue",
  },
  {
    id: "divide",
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
            key={preset.id}
            onClick={() => {
              setSelectedPreset(preset.id);
            }}
            className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-${
              preset.color
            }-500 bg-${preset.color}-${
              selectedPreset == preset.id ? "400" : "100"
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

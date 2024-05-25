"use client";

import { PresetContext } from "@/contexts/PresetContext";
import { useContext } from "react";

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
  const { preset, setPresetValue } = useContext(PresetContext);

  return (
    <div className="mb-8 flex justify-center space-x-4 items-center">
      <span className="font-bold">Preset</span>
      {presets.map((p) => {
        return (
          <button
            type="button"
            key={p.id}
            onClick={() => {
              setPresetValue(p.id);
            }}
            className={`py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-${
              p.color
            }-500 bg-${p.color}-${
              preset == p.id ? "400" : "0"
            } text-gray-800 hover:bg-${
              p.color
            }-200 disabled:opacity-50 disabled:pointer-events-none`}
          >
            {p.name}
          </button>
        );
      })}
    </div>
  );
};

export default PresetButtons;

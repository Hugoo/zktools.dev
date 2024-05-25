"use client";

import { use, useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import JsonViewer from "../JsonViewer";
import { PresetContext } from "@/contexts/PresetContext";

const GenerateProof: React.FC = () => {
  const [proof, setProof] = useState({});
  const [inputValue, setInputValue] = useState<Record<string, any>>({
    x: 3,
    y: 11,
  });
  const [error, setError] = useState(null);
  const { preset } = useContext(PresetContext);

  const generateProof = async () => {
    if (preset === "nopreset") {
      return;
    }

    try {
      // @ts-ignore
      const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        inputValue,
        "/" + preset + ".wasm",
        "/" + preset + ".zkey"
      );

      setProof(proof);
      setError(null);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };

  useEffect(() => {
    generateProof();
  }, [inputValue, preset]);

  useEffect(() => {
    switch (preset) {
      case "multiply":
        setInputValue({ x: 3, y: 11 });
        break;
      case "add":
        setInputValue({ a: 6, b: 10 });
        break;
      case "withdraw":
        setInputValue({ a: 6, b: 10 });
        break;
      default:
        break;
    }
  }, [preset]);

  return (
    <div className="flex space-x-6">
      <div className="w-1/2">
        <h3 className="mb-5">Input</h3>

        <Editor
          height="50vh"
          defaultLanguage="json"
          onChange={(value) => {
            setInputValue(JSON.parse(value || ""));
          }}
          defaultValue={JSON.stringify(inputValue, null, 2)}
          options={{
            readOnly: false,
            minimap: { enabled: false },
            fontSize: 18,
          }}
        />
      </div>

      <div className="w-1/2">
        <h3 className="mb-5">Proof</h3>
        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <JsonViewer json={proof} />
        )}
      </div>
    </div>
  );
};

export default GenerateProof;

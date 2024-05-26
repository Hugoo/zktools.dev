"use client";

import { useContext, useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import JsonViewer from "../JsonViewer";
import { PresetContext } from "@/contexts/PresetContext";

const GenerateProof: React.FC = () => {
  const [proof, setProof] = useState({});
  const [publicSignal, setPublicSignal] = useState({});
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
        "/" + preset + "_final.zkey"
      );

      setProof(proof);
      setPublicSignal(publicSignals);
      setError(null);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
      setPublicSignal({});
      setProof({});
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
    <div>
      <div className="flex space-x-6">
        <div className="w-1/2">
          <h3 className="mb-5">📝 Input</h3>

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
          <h3 className="mb-5">🤝 Proof</h3>
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <JsonViewer json={proof} />
          )}
          <button
            className="mt-4 px-4 py-1 border border-gray-300 rounded-lg bg-gray-100 hover:bg-gray-200"
            onClick={() => {
              navigator.clipboard.writeText(JSON.stringify(proof, null, 2));
            }}
          >
            Copy
          </button>
        </div>
      </div>
      <div>
        <h3 className="mb-5">✅ Public Signal (output)</h3>
        <p className="mb-5">This is the output of the circuit.</p>
        <code>{JSON.stringify(publicSignal, null, 2)}</code>
      </div>
    </div>
  );
};

export default GenerateProof;

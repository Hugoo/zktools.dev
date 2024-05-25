"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import JsonViewer from "../JsonViewer";

const GenerateProof: React.FC = () => {
  const [proof, setProof] = useState({});
  const [inputValue, setInputValue] = useState({ x: 3, y: 11 });
  const [error, setError] = useState(null);

  const generateProof = async () => {
    try {
      // @ts-ignore
      const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        inputValue,
        "/multiply.wasm",
        "/circuit_0000.zkey"
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
  }, [inputValue]);

  return (
    <div className="flex space-x-6">
      <div className="w-1/2">
        <h3 className="md:text-lg font-semibold text-gray-800">Input</h3>

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
        <h3>Proof</h3>
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

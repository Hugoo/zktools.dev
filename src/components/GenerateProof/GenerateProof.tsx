"use client";

import { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";

const GenerateProof: React.FC = () => {
  const [proof, setProof] = useState({});
  const [inputValue, setInputValue] = useState({ x: 3, y: 11 });

  const generateProof = async () => {
    // @ts-ignore
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      inputValue,
      "/multiply.wasm",
      "/circuit_0000.zkey"
    );

    setProof(proof);
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
        <pre>{JSON.stringify(proof, null, 2)}</pre>
      </div>
    </div>
  );
};

export default GenerateProof;

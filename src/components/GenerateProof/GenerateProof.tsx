"use client";

import { useEffect, useState } from "react";

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
    <div>
      <h2>Generate proofs</h2>
      <h3>Input</h3>
      <textarea
        onChange={(e) => {
          setInputValue(JSON.parse(e.target.value));
        }}
      >
        {JSON.stringify(inputValue, null, 2)}
      </textarea>

      <h3>Proof</h3>
      <pre>{JSON.stringify(proof, null, 2)}</pre>
    </div>
  );
};

export default GenerateProof;

"use client";

import { useEffect, useState } from "react";

const GenerateProof: React.FC = () => {
  const [proof, setProof] = useState({});

  const generateProof = async () => {
    // @ts-ignore
    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
      { x: 3, y: 11 },
      "/multiply.wasm",
      "/circuit_0000.zkey"
    );

    setProof(proof);
  };

  useEffect(() => {
    generateProof();
  }, []);

  return (
    <div>
      <h2>Generate proofs</h2>

      <h3>Proof</h3>
      <pre>{JSON.stringify(proof, null, 2)}</pre>
    </div>
  );
};

export default GenerateProof;

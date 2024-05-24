"use client";

import { useEffect } from "react";

export default function Home() {
  const test = async () => {
    console.log("test");
    //@ts-ignore
    // const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    //   { a: 3, b: 11 },
    //   "circuit.wasm",
    //   "circuit_final.zkey"
    // );

    const t = await snarkjs.r1cs.info("multiply.r1cs");
    console.log(t);
  };

  useEffect(() => {
    test();
  }, []);

  return (
    <div>
      Zktools.dev is getting ready for ETHBerlin 24 hackathon.
      <p>Let the user chose the proving system: Groth16, FFLONK, etc.</p>
    </div>
  );
}

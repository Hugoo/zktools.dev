import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="text-2xl mb-5 text-gray-500">
        Welcome to ZKTools.dev - this website is a tool to help you understand
        and work zith ZK related files, proof, algorithms. It was built during
        ETHBerlin 2024.
      </p>
      <h1 className="font-bold text-4xl mb-5">Steps</h1>
      <ol className="list-inside list-decimal text-gray-500">
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Expresses the predicates/arbitrary computation as a Circom program.
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Compiles the above program to get the constraints (<code>.r1cs</code>{" "}
          file) and witness generator (<code>.wasm</code> file, takes input
          wires and calculates all the intermediate wires).{" "}
          <Link href="/r1cs" className="font-bold">
            Analyse the <code>.r1cs</code> file
          </Link>
          .
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Uses the constraints (<code>.r1cs</code> file) from step 2 to generate
          a zk-SNARK proving and verification key (<code>.zkey</code> file).
        </li>
        <li className="mb-3">
          <strong className="text-blue-500">
            <code>[🧑‍🔧 ‎ prover ‎]</code>
          </strong>{" "}
          Uses the <code>.r1cs</code> and <code>.wasm</code> files from step 2
          and the proving key from step 3 to{" "}
          <Link href="/proof/generate" className="font-bold">
            {" "}
            generate a proof 📜
          </Link>
          .
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Uses the verification key from step 3 to{" "}
          <Link href="/proof/verify" className="font-bold">
            verify the proof 📜
          </Link>
          .
        </li>
      </ol>
    </div>
  );
}

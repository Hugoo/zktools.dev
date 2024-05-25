export default function Home() {
  return (
    <div>
      <p className="text-2xl mb-5">
        Welcome to ZKTools.dev - this website is a tool to help you understand
        and work zith ZK related files, proof, algorithms. It was built
        initially during ETHBerlin 2024.
      </p>
      <h1 className="font-bold text-4xl mb-5">Steps</h1>
      <ol className="list-inside list-decimal">
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
          Compiles the above program to get the constraints (R1CS file) and
          witness generator (WASM file, takes input wires and calculates all the
          intermediate wires).
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Uses the constraints from step 2 to generate a zk-SNARK proving and
          verification key.
        </li>
        <li className="mb-3">
          <strong className="text-blue-500">
            <code>[🧑‍🔧 ‎ prover ‎]</code>
          </strong>{" "}
          Uses the R1CS and WASM files from step 2 and the proving key from step
          3 to create a proof.
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Uses the verification key from step 3 to verify the proof.
        </li>
      </ol>
    </div>
  );
}

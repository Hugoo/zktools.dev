export default function Home() {
  return (
    <div>
      <h1 className="mb-5">Steps</h1>
      <ol className="list-inside list-decimal">
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Express the predicates/arbitrary computation as a Circom program.
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Compile the above program to get the constraints (R1CS file) and
          witness generator (WASM file, takes input wires and calculates all the
          intermediate wires).
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Use the constraints from step 2 to generate a zk-SNARK proving and
          verification key.
        </li>
        <li className="mb-3">
          <strong className="text-blue-500">
            <code>[🧑‍🔧 prover ‎ ]</code>
          </strong>{" "}
          Use the R1CS and WASM files from step 2 and the proving key from step
          3 to create a proof.
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Use the verification key from step 3 to verify the proof.
        </li>
      </ol>
    </div>
  );
}

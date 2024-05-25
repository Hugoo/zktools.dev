import IconSection from "@/components/IconSection";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-5">
        Your zero-knowledge proofs (ZKPs) journey
      </h1>
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
          Compiles the above program to get the constraints (<code>.r1cs</code>)
          and witness (<code>.wasm</code>) files. Displays the circuit stats
          with{" "}
          <Link href="/r1cs" className="font-bold">
            R1CS Analysis Tool
          </Link>
          .
        </li>
        <li className="mb-3">
          <strong className="text-green-500">
            <code>[🕵️‍♀️ verifier]</code>
          </strong>{" "}
          Uses the constraints (<code>.r1cs</code>) file from step 2 to generate
          a zk-SNARK proving and verification keys (<code>.zkey</code>) file.
        </li>
        <li className="mb-3">
          <strong className="text-blue-500">
            <code>[🧑‍🔧 ‎ prover ‎]</code>
          </strong>{" "}
          Uses the <code>.r1cs</code>, <code>.wasm</code> and <code>.zkey</code>{" "}
          files from previous steps to{" "}
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
          Uses the verification key (<code>.zkey</code>) from step 3 to{" "}
          <Link href="/proof/verify" className="font-bold">
            verify the proof 📜
          </Link>
          .
        </li>
      </ol>
      <div>
        <IconSection />
      </div>
    </div>
  );
}

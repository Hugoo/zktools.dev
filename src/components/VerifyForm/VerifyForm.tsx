const VerifyForm: React.FC = () => {
  return (
    <div className="md:w-1/4 w-1">
      <label
        htmlFor="hs-select-label"
        className="block text-sm font-medium mb-2"
      >
        Protocol / Proving System
      </label>
      <select
        id="hs-select-label"
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      >
        <option selected>Groth16</option>
        <option>FFLONK (coming soon)</option>
        <option>Plonk (coming soon)</option>
      </select>

      {/**
         * 
         * 
         * const { proof, publicSignals } =
      await snarkjs.groth16.fullProve( { a: 3, b: 11}, "circuit.wasm", "circuit_final.zkey");

    proofComponent.innerHTML = JSON.stringify(proof, null, 1);


    const vkey = await fetch("verification_key.json").then( function(res) {
        return res.json();
    });

    const res = await snarkjs.groth16.verify(vkey, publicSignals, proof);

    resultComponent.innerHTML = res;
         */}
    </div>
  );
};

export default VerifyForm;

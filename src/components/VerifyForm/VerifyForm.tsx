import Drop from "../Drop";

const VerifyForm: React.FC = () => {
  return (
    <div>
      <label
        htmlFor="hs-select-label"
        className="block text-sm font-medium mb-2"
      >
        Protocol / Proving System
      </label>
      <select
        id="hs-select-label"
        defaultValue={"Groth16"}
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      >
        <option>Groth16</option>
        <option>FFLONK (coming soon)</option>
        <option>Plonk (coming soon)</option>
      </select>
      <div className="flex space-x-4 mt-4">
        <div className="w-1/2">
          <Drop
            accept={{
              "application/json": [".json"],
            }}
            title="verification_key.json"
            onDrop={() => {
              // skip
            }}
          />
        </div>
        <div className="w-1/2">
          <Drop
            accept={{
              "application/json": [".json"],
            }}
            title="proof.json"
            onDrop={() => {
              // skip
            }}
          />
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <div>
          Public signal:{" "}
          <input
            type="text"
            className="py-3 px-4 pe-9 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;

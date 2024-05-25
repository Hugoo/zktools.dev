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
        defaultValue={"Groth16"}
        className="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
      >
        <option>Groth16</option>
        <option>FFLONK (coming soon)</option>
        <option>Plonk (coming soon)</option>
      </select>
    </div>
  );
};

export default VerifyForm;

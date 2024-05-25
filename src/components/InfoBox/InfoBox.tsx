const InfoBox: React.FC = () => {
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <div className="flex gap-x-5">
        <svg
          className="flex-shrink-0 mt-1 size-6 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </svg>

        <div>
          <h3 className="md:text-lg font-semibold text-gray-800">Rank-1 Constraint Systems (R1CS)</h3>
          <p className="mt-1 text-gray-500"> Method to represent computations as a system of constraints that must be satisfied by the input values. It is a form of constraint system that converts a computation into a series of polynomial equations. These equations must hold true for the zk-SNARK proof to be valid. </p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;

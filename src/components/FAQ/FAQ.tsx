import React from "react";

const FAQ: React.FC = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight">FAQ</h2>
      </div>

      <div className="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
        <div className="py-8 first:pt-0 last:pb-0">
          <FAQItem
            question="Project topic"
            answer="Providing support for developers to build and work with Zero-Knowledge Proofs (ZKPs)."
          />
          <FAQItem
            question="Project history"
            answer="The project started during ETH Berlin 2024."
          />
          <FAQItem
            question="Sources"
            answer="https://docs.circom.io/getting-started/proving-circuits/, https://docs.circom.io/getting-started/proving-circuits/"
          />
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  return (
    <div className="flex gap-x-5 py-6">
      {" "}
      {/* Increased padding here */}
      <svg
        className="flex-shrink-0 mt-1 size-6 text-gray-500 dark:text-neutral-500"
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
        <h3 className="md:text-lg font-semibold text-gray-800">{question}</h3>
        <p className="mt-1 text-gray-500">{answer}</p>
      </div>
    </div>
  );
};

export default FAQ;

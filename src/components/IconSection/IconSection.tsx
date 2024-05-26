const IconSection: React.FC = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-5">What is Zero Knowledge?</h1>
      <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 items-center gap-12">
          <div className="text-center">
            <div className="relative flex justify-center text-8xl bg-white">
              🐼
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Panda Pazu
              </h3>
              <p className="mt-1 text-gray-600">
                Panda Pazu loves to shop online for bamboo goodies, but
                she&apos;s worried about sharing her credit card details with
                every store. With Zero-Knowledge Proofs, Pazu can prove to the
                online store that she has enough funds to make a purchase
                without revealing her actual credit card number or bank balance.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="relative flex justify-center  text-8xl bg-white">
              🐨
            </div>
            <div className="mt-5">
              <h3 className="text-lg font-semibold text-gray-800">
                Koala Koro
              </h3>
              <p className="mt-1 text-gray-600">
                Koala Koro is planning a treasure hunt with his friends. They
                want to ensure that each member has found a specific clue
                without disclosing where they found it. Using Zero-Knowledge
                Proofs, they can verify that everyone has their designated clue
                without revealing the exact location where they discovered it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconSection;

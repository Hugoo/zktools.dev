import InfoBox from "@/components/InfoBox";
import VerifyForm from "@/components/VerifyForm";

export default function Verify() {
  return (
    <div>
      <h1>Verify</h1>
      Add select input: fflonk, groth16, plonk
      <InfoBox />
      <VerifyForm />
      <div>
        Resources: https://docs.circom.io/getting-started/proving-circuits/
      </div>
    </div>
  );
}

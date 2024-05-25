import InfoBox from "@/components/InfoBox";
import VerifyForm from "@/components/VerifyForm";

export default function Verify() {
  return (
    <div>
      <h1>Verify</h1>
      <InfoBox title="Verify circuit with chosen proving system." description = "The function verifies a zkey file and prints the hashes." />
      <VerifyForm />
      <div>
        Resources: https://docs.circom.io/getting-started/proving-circuits/
      </div>
    </div>
  );
}

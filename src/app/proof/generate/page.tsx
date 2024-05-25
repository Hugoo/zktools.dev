import GenerateProof from "@/components/GenerateProof";
import InfoBox from "@/components/InfoBox";
import VerifyForm from "@/components/VerifyForm";

export default function Generate() {
  return (
    <div>
      <h1>Generate Proof</h1>
      <InfoBox
        title="Generate zero-knowledge proof with chosen proving system."
        description="The function takes the proving key, the private witness and a public value as inputs."
      />
      <VerifyForm />
      <GenerateProof />
    </div>
  );
}

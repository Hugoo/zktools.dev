"use client";

import InfoBox from "@/components/InfoBox";
import PresetButtons from "@/components/PresetButtons";
import VerifyForm from "@/components/VerifyForm";

export default function Verify() {
  return (
    <div>
      <h1>Verify Proof</h1>
      <InfoBox
        title="Verify circuit with chosen proving system."
        description="The function verifies a zkey file and prints the hashes."
      />
      <PresetButtons />
      <VerifyForm />
      <div>
        Resources: https://docs.circom.io/getting-started/proving-circuits/
      </div>
    </div>
  );
}

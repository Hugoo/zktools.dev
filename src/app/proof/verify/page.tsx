"use client";

import InfoBox from "@/components/InfoBox";
import PresetButtons from "@/components/PresetButtons";
import VerifyForm from "@/components/VerifyForm";

export default function Verify() {
  return (
    <div>
      <InfoBox
        title="Verify circuit with chosen proving system."
        description="The function verifies a zkey file and prints the hashes."
      />
      <PresetButtons />
      <VerifyForm />
    </div>
  );
}

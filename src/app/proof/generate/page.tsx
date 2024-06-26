"use client";

import GenerateProof from "@/components/GenerateProof";
import InfoBox from "@/components/InfoBox";
import PresetButtons from "@/components/PresetButtons";

export default function Generate() {
  return (
    <div>
      <InfoBox
        title="Generate Zero-Knowledge Proof with chosen proving system"
        description="The function takes the proving key, the private witness and a public value as inputs."
      />
      <PresetButtons />
      <GenerateProof />
    </div>
  );
}

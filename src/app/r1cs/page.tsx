"use client";

import InfoBox from "@/components/InfoBox";
import PresetButtons from "@/components/PresetButtons";
import R1csInfo from "@/components/R1csInfo";

export default function R1CS() {
  return (
    <div>
      <InfoBox
        title="Rank-1 Constraint Systems (R1CS)"
        description="This method converts computations into a system of constraints, expressed as polynomial equations. These equations must be satisfied by input values for a valid zk-SNARK proof."
      />
      <PresetButtons />
      <R1csInfo />
    </div>
  );
}

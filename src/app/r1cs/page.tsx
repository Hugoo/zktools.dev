import InfoBox from "@/components/InfoBox";
import PresetButtons from "@/components/PresetButtons";
import R1csInfo from "@/components/R1csInfo";

export default function R1CS() {
  return (
    <div>
      <h1>Analyse R1CS</h1>
      <InfoBox
        title="Rank-1 Constraint Systems (R1CS)"
        description="Method to represent computations as a system of constraints that must be satisfied by the input values. It is a form of constraint system that converts a computation into a series of polynomial equations. These equations must hold true for the zk-SNARK proof to be valid."
      />
      <PresetButtons />
      <R1csInfo />
    </div>
  );
}

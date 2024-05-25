import InfoBox from "@/components/InfoBox";
import R1csInfo from "@/components/R1csInfo";

export default function R1CS() {
  return (
    <div>
      <h1>Analyse R1CS</h1>
      <InfoBox
        title="Rank-1 Constraint Systems (R1CS)"
        description="This method converts computations into a system of constraints, expressed as polynomial equations. These equations must be satisfied by input values for a valid zk-SNARK proof."
      />
      <R1csInfo />
    </div>
  );
}

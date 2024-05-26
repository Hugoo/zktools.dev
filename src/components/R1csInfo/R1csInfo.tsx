"use client";

import { useContext, useEffect, useState } from "react";

import Card from "../Card";
import Drop from "../Drop";
import JsonViewer from "../JsonViewer";
import { PresetContext } from "@/contexts/PresetContext";

const R1csInfo: React.FC = () => {
  const [infosJson, setInfosJson] = useState<any>({});
  const { preset } = useContext(PresetContext);
  const [isLoading, setIsLoading] = useState(false);

  const getInfos = async () => {
    if (preset === "nopreset") {
      setInfosJson({});
      return;
    }

    setIsLoading(true);

    //@ts-ignore
    const jsonExport = await snarkjs.r1cs.exportJson(`${preset}.r1cs`);
    setInfosJson(jsonExport);

    //@ts-ignore
    const t = await snarkjs.r1cs.info(`${preset}.r1cs`);
    console.log(t);
    setIsLoading(false);
  };

  useEffect(() => {
    getInfos();
  }, [preset]);

  return (
    <div>
      <div className="mb-5">
        <Drop
          title=".r1cs"
          accept={{
            "application/octet-stream": [".r1cs"],
          }}
          onDrop={(f) => {
            // Sadly, the snarkjs lib only loads files that are available via "fetch". We can not input a File in the fonction...
            // We will upload a bunch of demo files for now so user can see how it works.
            console.log(f);
          }}
        />
      </div>
      {isLoading && "Loading..."}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card
            title="n8"
            value={infosJson ? infosJson.n8 : ""}
            info="Number of inputs in 8-bit encoding."
          />
          <Card
            title="Constraints"
            value={infosJson ? infosJson.nConstraints : ""}
            info="Number of mathematical equations and conditions to verify the proof."
          />
          <Card
            title="Variables"
            value={infosJson ? infosJson.nVars : ""}
            info="Number of variables involved in the computation."
          />
          <Card
            title="Public Inputs"
            value={infosJson ? infosJson.nPubInputs : ""}
            info="Number of values that are known and available to both the prover and the verifier."
          />
          <Card
            title="Private Inputs"
            value={infosJson ? infosJson.nPrvInputs : ""}
            info="Secret values that the prover wants to prove."
          />
          <Card
            title="Labels"
            value={infosJson ? infosJson.nLabels : ""}
            info="Number of identifiers assigned to different elements within an arithmetic circuit. These elements include inputs, outputs, gates (operations), and wires (intermediary values)."
          />
          <Card
            title="Outputs"
            value={infosJson ? infosJson.nOutputs : ""}
            info="The final values produced by the circuit after all operations are performed."
          />
        </div>
      </div>
      <JsonViewer json={infosJson} />
    </div>
  );
};

export default R1csInfo;

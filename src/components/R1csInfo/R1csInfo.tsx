"use client";

import { useEffect, useState } from "react";
import Card from "../Card";
import InputFile from "../InputFile";

const R1csInfo: React.FC = () => {
  const [infosJson, setInfosJson] = useState<any>({});

  const test = async () => {
    console.log("test");
    //@ts-ignore
    // const prt = await snarkjs.r1cs.print("multiply.r1cs", "multiply.sym");
    // console.log(prt);
    //@ts-ignore
    const jsonExport = await snarkjs.r1cs.exportJson("multiply.r1cs");
    setInfosJson(jsonExport);

    //@ts-ignore
    const t = await snarkjs.r1cs.info("multiply.r1cs");
    console.log(t);
  };

  useEffect(() => {
    console.log("useEffect");
    test();
  }, []);

  return (
    <div>
      <div className="mb-5">
        <p>
          Please drag and drop the file here to read the r1cs info of the file.
        </p>
        <InputFile />
      </div>
      <code>circuit.r1xs</code>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card
            title="n8"
            value={infosJson ? infosJson.n8 : ""}
            info="infotext"
          />
          <Card
            title="Constraints"
            value={infosJson ? infosJson.nConstraints : ""}
            info="infotext"
          />
          <Card
            title="Vars"
            value={infosJson ? infosJson.nVars : ""}
            info="infotext"
          />
          <Card
            title="Public Inputs"
            value={infosJson ? infosJson.nPubInputs : ""}
            info="infotext"
          />
          <Card
            title="Private Inputs"
            value={infosJson ? infosJson.nPrvInputs : ""}
            info="infotext"
          />
          <Card
            title="Labels"
            value={infosJson ? infosJson.nLabels : ""}
            info="infotext"
          />
          <Card
            title="Outputs"
            value={infosJson ? infosJson.nOutputs : ""}
            info="infotext"
          />
        </div>
      </div>
      {/* <pre>{infosJson && JSON.stringify(infosJson, null, 2)}</pre> */}
    </div>
  );
};

export default R1csInfo;

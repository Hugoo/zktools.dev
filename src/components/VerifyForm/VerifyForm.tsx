"use client";

import vKey from "./multiply_verification_key.json";

import { useContext, useEffect, useState } from "react";
import Drop from "../Drop";
import { PresetContext } from "@/contexts/PresetContext";
import { Editor } from "@monaco-editor/react";

const VerifyForm: React.FC = () => {
  const { preset } = useContext(PresetContext);
  const [publicSignal, setPublicSignal] = useState<string[]>([]);
  const [isVerificationOk, setIsVerificationOk] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const verifyProof = async () => {
    if (preset === "nopreset") {
      return;
    }

    try {
      // TODO: note this is hard coded for now, will need to connect to the UI later.

      // @ts-ignore
      const res = await snarkjs.groth16.verify(vKey, publicSignal, {
        pi_a: [
          "1393580441020128218519106715697873775569417213570686832742835052283362005305",
          "12388469249328689574997154758848339921107470536356844565860107797072698121767",
          "1",
        ],
        pi_b: [
          [
            "17419695377237733310055881936502383709451516231827198443751146709815189711105",
            "18228280762917020502210154859006640824691857586101411209974811598016881778898",
          ],
          [
            "18018286260139835755554116344914195853864674363006183287009121490638423864035",
            "13589811653694525215052029174735645283467496056651478297295874018552343602061",
          ],
          ["1", "0"],
        ],
        pi_c: [
          "13247858145517388040697155696953739266714913023528223590375236419106590883310",
          "17336916051602350087735664905642385465973780681339115635739823829361880537160",
          "1",
        ],
        protocol: "groth16",
        curve: "bn128",
      });

      if (res === true) {
        setIsVerificationOk(true);
      } else {
        setIsVerificationOk(false);
        console.log("Invalid proof");
      }
    } catch (error: any) {
      console.error(error);
      setIsVerificationOk(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    verifyProof();
  }, [preset, publicSignal]);

  return (
    <div>
      <div className="text-center text-6xl my-[30px]">
        {isVerificationOk ? (
          <span className="bg-green-200 m-4 p-4 rounded-lg">
            🥳 Proof is valid ✅
          </span>
        ) : (
          <span className="bg-red-200 m-4 p-4 rounded-lg">
            🥺 Proof is invalid ❌
          </span>
        )}
      </div>

      <div className="flex space-x-4 mt-4">
        <div className="w-1/2">
          <Drop
            accept={{
              "application/json": [".json"],
            }}
            title="verification_key.json"
            onDrop={() => {
              // skip
            }}
          />
        </div>
        <div className="w-1/2">
          <Drop
            accept={{
              "application/json": [".json"],
            }}
            title="proof.json"
            onDrop={() => {
              // skip
            }}
          />
        </div>
      </div>
      <div className="flex mt-4 space-x-4">
        <div className="w-1/2">
          <h3 className="mb-5">✅ Public Signal</h3>
          <Editor
            height="50vh"
            defaultLanguage="json"
            onChange={(value) => {
              setPublicSignal(JSON.parse(value || ""));
            }}
            defaultValue={JSON.stringify(publicSignal, null, 2)}
            options={{
              readOnly: false,
              minimap: { enabled: false },
              fontSize: 18,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;

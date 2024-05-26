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
  const [proof, setProof] = useState<Record<string, any>>({});
  const [error, setError] = useState(null);

  const verifyProof = async () => {
    if (preset === "nopreset") {
      return;
    }

    try {
      // TODO: note this is hard coded for now, will need to connect to the UI later.

      // @ts-ignore
      const res = await snarkjs.groth16.verify(vKey, publicSignal, proof);

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
  }, [preset, publicSignal, proof]);

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
        <div className="w-1/3">
          <h3 className="mb-5">🔑 Verification key file</h3>
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
        <div className="w-2/3">
          <h3 className="mb-5">🤝 Proof</h3>
          <Editor
            height="40vh"
            defaultLanguage="json"
            onChange={(value) => {
              setProof(JSON.parse(value || ""));
            }}
            defaultValue={JSON.stringify(proof, null, 2)}
            options={{
              readOnly: false,
              minimap: { enabled: false },
              fontSize: 16,
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

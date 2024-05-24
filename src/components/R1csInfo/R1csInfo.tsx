"use client";

import { useEffect, useState } from "react";

const R1csInfo: React.FC = () => {
  const [infos, setInfos] = useState<any>({});

  const test = async () => {
    console.log("test");
    //@ts-ignore
    // const prt = await snarkjs.r1cs.print("multiply.r1cs", "multiply.sym");
    // console.log(prt);
    //@ts-ignore
    const t = await snarkjs.r1cs.info("multiply.r1cs");
    console.log(t);
    setInfos(t);
  };

  useEffect(() => {
    console.log("useEffect");
    test();
  }, []);

  return (
    <div>
      <p>
        Please drag and drop the file here to read the r1cs info of the file.
      </p>
      Number of constraints: XX
      <br />
      <div>
        <h3>Wires</h3>
        This ciruit has XX wires - explain what it is
      </div>
      <code>
        [INFO] snarkJS: Curve: bn-128
        <br />
        [INFO] snarkJS: # of Wires: 1003
        <br />
        [INFO] snarkJS: # of Constraints: 1000
        <br />
        [INFO] snarkJS: # of Private Inputs: 2<br />
        [INFO] snarkJS: # of Public Inputs: 0<br />
        [INFO] snarkJS: # of Outputs: 1
      </code>
      {/* <code>{JSON.stringify(infos, null, 2)}</code> */}
    </div>
  );
};

export default R1csInfo;

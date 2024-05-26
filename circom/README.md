# Circom folder

Put here circom files, the files in output directory are generated with:

```sh
circom multiply.circom --r1cs --wasm --sym --c -o output
circom add.circom --r1cs --wasm --sym --c -o output
circom deposit.circom --r1cs --wasm --sym --c -o output
```

```sh
# from output/ folder
snarkjs groth16 setup multiply.r1cs powersOfTau28_hez_final_12.ptau multiply.zkey
snarkjs groth16 setup add.r1cs powersOfTau28_hez_final_12.ptau add.zkey
snarkjs groth16 setup deposit.r1cs powersOfTau28_hez_final_13.ptau deposit.zkey
```

Ceremonies:

```sh
# from output/ folder
snarkjs zkey contribute add.zkey add_0001.zkey --name="🐼 Panda Pazu" -v

##

snarkjs zkey contribute multiply.zkey multiply_0001.zkey --name="🐼 Panda Pazu" -v
snarkjs zkey contribute multiply_0001.zkey multiply_0002.zkey --name="🐨 Koala Koro" -v
# deadbeef is the beacon
snarkjs zkey beacon multiply_0002.zkey multiply_final.zkey deadbeef 10 -n="Final Beacon phase2"
snarkjs zkey export verificationkey multiply_final.zkey multiply_verification_key.json
```

## Sources

The `deposit.circom` and `merkleTree.circom` were copied from the [AmadiMichael/Zyclone](https://github.com/AmadiMichael/Zyclone) repo.

The `.ptau` files can be found [here](https://github.com/iden3/snarkjs?tab=readme-ov-file#7-prepare-phase-2).

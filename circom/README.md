# Circom folder

Put here circom files, the `output/`:

```sh
circom multiply.circom --r1cs --wasm --sym --c -o output
circom add.circom --r1cs --wasm --sym --c -o output
circom deposit.circom --r1cs --wasm --sym --c -o output
```

```sh
# from output/ folder
snarkjs groth16 setup add.r1cs powersOfTau28_hez_final_12.ptau add.zkey
```

## Sources

The `deposit.circom` and `merkleTree.circom` were copied from the [AmadiMichael/Zyclone](https://github.com/AmadiMichael/Zyclone) repo.

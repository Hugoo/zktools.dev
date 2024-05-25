pragma circom 2.0.0;

template Adder() {
    // Define signals
    signal input a;
    signal input b;
    signal output sum;

    // Logic for addition
    sum <== a + b;
}

// Define the main component
component main = Adder();
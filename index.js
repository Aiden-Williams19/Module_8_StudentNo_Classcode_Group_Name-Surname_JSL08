// This one will be a little tricky. So check out this overview first: https://www.youtube.com/watch?v=sJ-c3BA-Ypo

// 1. Create a variable to store the singleton instance of the bank branch. "bankBranchInstance"

// 2. Define a class called `BankBranch` for managing branch information.

// 3. In the `BankBranch` class:
//    - Create a constructor that takes `branchInfo` as a parameter.
//    - Inside the constructor, check if the `bankBranchInstance` variable is null (indicating no instance exists).
//    - If `bankBranchInstance` is null, create a new instance with the provided `branchInfo` and assign it to `bankBranchInstance`.
//    - Return the `bankBranchInstance` whether it's newly created or existing.

// 4. Add methods to the `BankBranch` class for managing branch-related information. For example, you can add a method like `getBranchInfo` to retrieve branch details.

// 5. In the usage section:
//    - Create instances of the `BankBranch` class, such as `branchA` and `branchB`, with different branch information.
//    - Use the `getBranchInfo` method to retrieve branch information from the instances.
//    - Verify that `branchA` and `branchB` are both referring to the same instance by comparing them using `===`.

// This pseudo-code provides a step-by-step explanation of how to implement the Singleton Pattern for managing a single instance of the `BankBranch` class throughout the application, ensuring that multiple instances refer to the same object.

// NOTES:
// This example demonstrates the Singleton pattern by creating a single instance of the `BankBranch` class.
// Even if we attempt to create another instance of the branch, we receive the original instance,
// ensuring that there is only one set of branch information throughout the application.

// - We define a `BankBranch` class that represents bank branch information.
// - We use the Singleton pattern to ensure that there is only one instance of the `BankBranch` class.
// - The `bankBranchInstance` variable is used to hold the single instance of the class.
// - When a new `BankBranch` instance is created, it checks if `bankBranchInstance` already exists.
//   If it does, it returns the existing instance; otherwise, it creates a new one.
// - The `getBranchInfo` method allows us to retrieve the branch information from the singleton instance.
// - We demonstrate the Singleton pattern by creating two instances (`branchA` and `branchB`) and show that they both point to the same instance,
//   ensuring that there is only one set of branch information throughout the application.

// Step 1: Create a variable to store the singleton instance of the bank branch.
let bankBranchInstance = null;

// Step 2: Define a class called `BankBranch` for managing branch information.
class BankBranch {
    // Step 3: Create a constructor that takes `branchInfo` as a parameter.
    constructor(branchInfo) {
        // Step 3.1: Check if the `bankBranchInstance` variable is null.
        if (!bankBranchInstance) {
            // Step 3.2: If `bankBranchInstance` is null, create a new instance.
            this.branchInfo = branchInfo;
            bankBranchInstance = this;
        }
        // Step 3.3: Return the `bankBranchInstance` whether it's newly created or existing.
        return bankBranchInstance;
    }

    // Step 4: Add methods to the `BankBranch` class for managing branch-related information.
    // Example method to retrieve branch details.
    getBranchInfo() {
        return this.branchInfo;
    }
}

// Step 5: Usage example

// Creating instances of the `BankBranch` class.
const branchA = new BankBranch("Branch A - Main Street");
const branchB = new BankBranch("Branch B - 2nd Avenue");

// Using the `getBranchInfo` method to retrieve branch information.
console.log(branchA.getBranchInfo()); // Outputs: Branch A - Main Street
console.log(branchB.getBranchInfo()); // Outputs: Branch A - Main Street

// Verifying that `branchA` and `branchB` refer to the same instance.
console.log(branchA === branchB); // Outputs: true


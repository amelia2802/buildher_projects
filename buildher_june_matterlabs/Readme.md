# Build smart contract

This is a solution to the [buildHer Matter Labs workshop task](https://docs.zksync.io/build/quick-start). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgement](#acknowledgement)


## Overview

### The challenge

1. Finish the quickstart session
2. Use GitHub to publish your progress, meaning all the code you learn
3. Write a technical overview of what you learned, share it on your Github as a Readme


### Screenshot
 <table>
    <tr>
      <td width="20%">
        <img src="https://github.com/amelia2802/buildher_projects/assets/49182604/4eca1366-e5fd-4fb1-a579-bf57618b7d0a"?
      </td>
      <td width="20%">
        <img src="https://github.com/amelia2802/buildher_projects/assets/49182604/b88d9fba-77b0-4204-ba3b-568c63e5ac6b">
      </td>
      <td width="20%">
        <img src="https://github.com/amelia2802/buildher_projects/assets/49182604/2e0c3d1c-c356-45af-a284-d86063fe98ca">
      </td>
      <td width="20%">
        <img src="https://github.com/amelia2802/buildher_projects/assets/49182604/8f663aa0-c962-4192-a918-d816293b915f">
      </td>
      <td width="20%">
        <img src="https://github.com/amelia2802/buildher_projects/assets/49182604/d2d5bf95-5cf2-4f82-a968-89b1526a48fd"
      </td>
  </tr>
</table>

## My process

### What I learned

#### Overview
This learning journey has provided a solid foundation in Ethereum smart contract development, deployment, and interaction. By working through practical tasks and publishing progress on GitHub, I've gained hands-on experience and built a portfolio of code that demonstrates my understanding of these concepts.

#### Smart Contracts Created

1. **TestToken.sol**

    - **What I Learned:**
        - How to create an ERC20 token using OpenZeppelin contracts.
        - Using inheritance to extend functionalities with `Ownable` and `ERC20Burnable`.
        - The importance of constructor parameters to initialize the token's name and symbol.
        - How to mint new tokens using a function restricted to the contract owner.

2. **ZeekSecretMessages.sol**


    - **What I Learned:**
        - Creating and managing a list of hashed messages stored on the blockchain.
        - Emitting events to signal the reception of messages.
        - Writing functions to interact with stored data, such as sending messages and counting the total messages.

3. **mint-token.ts**

    - **What I Learned:**
        - Interacting with Ethereum smart contracts using the ethers.js library.
        - Writing scripts to automate token minting and balance checking.
        - Understanding the process of initializing a contract instance and invoking contract functions.

4. **paymaster-transaction.ts**

    - **What I Learned:**
        - Using zkSync and paymasters to handle transaction fees.
        - Integrating with zkSync to send messages and manage token balances.
        - Estimating gas costs and setting up custom transaction parameters.


### Useful resources

- [zksync official docs](https://docs.zksync.io/build/quick-start) - This helped me for creating and deploying the smart contract.


## Author

- Website - [Amelia D.](https://ameliadutta.netlify.app/)

## Acknowledgement
Thank you [albicodes](https://twitter.com/albicodes) for the wonderful explanation and for providing resources that contributed to the completion of this task.


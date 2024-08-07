---
head:
    - - meta
      - property: og:title
        content: EIP712Domain
    - - meta
      - name: description
        content: A EIP712Domain data type provides EIP-712 compatability for encoding and decoding.
    - - meta
      - property: og:description
        content: A EIP712Domain data type provides EIP-712 compatability for encoding and decoding. 
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---

# EIP712Domain

A [EIP712Domain](/generated/base-types/EIP712Domain) data type provides EIP-712 compatability for encoding and decoding the data needed for an `Plug` to be securely distributed and executed. 

## The Data Type

To interact with the data type onchain will you need both the `Typescript` and `EIP-712` representations of the `EIP712Domain` data type: 

::: code-group

``` typescript [Typescript/Javascript]
type EIP712Domain = {
	name: string;
	version: string;
	chainId: bigint;
	verifyingContract: `0x${string}`; 
}
```

```typescript [EIP-712]
const EIP712Domain = [
	{ name: 'name', type: 'string' },
	{ name: 'version', type: 'string' },
	{ name: 'chainId', type: 'uint256' },
	{ name: 'verifyingContract', type: 'address' } 
]
```

:::

::: tip

The `Typescript` representation is used to build and work with the object in your dApp and API while the `EIP-712` representation is used to encode and decode the data type onchain.

:::

## Onchain Implementation

With `name`, `version`, `chainId` and `verifyingContract` as the fields of the `EIP712Domain` data type we can generate the type hash as follows:

::: code-group

```solidity [Inline.sol]
bytes32 constant EIP712_DOMAIN_TYPEHASH = keccak256(
    'EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'
);
```

```solidity [Hash.sol]
bytes32 constant EIP712_DOMAIN_TYPEHASH = 0x8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f
```

:::
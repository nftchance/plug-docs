---
head:
    - - meta
      - property: og:title
        content: LivePlugs
    - - meta
      - name: description
        content: A LivePlugs data type provides EIP-712 compatability for encoding and decoding.
    - - meta
      - property: og:description
        content: A LivePlugs data type provides EIP-712 compatability for encoding and decoding. 
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---

# LivePlugs

A [LivePlugs](/generated/base-types/LivePlugs) data type provides EIP-712 compatability for encoding and decoding the data needed for an `Plug` to be securely distributed and executed. 

::: info
                
Inside the declaration of a `LivePlugs` data type there are nested [Plugs](/generated/base-types/Plugs) data types that need to be built independently.
                    
:::

## The Data Type

To interact with the data type onchain will you need both the `Typescript` and `EIP-712` representations of the `LivePlugs` data type: 

::: code-group

``` typescript [Typescript/Javascript]
type LivePlugs = {
	plugs: Plugs;
	signature: `0x${string}`; 
}
```

```typescript [EIP-712]
const LivePlugs = [
	{ name: 'plugs', type: 'Plugs' },
	{ name: 'signature', type: 'bytes' } 
]
```

:::

::: tip

The `Typescript` representation is used to build and work with the object in your dApp and API while the `EIP-712` representation is used to encode and decode the data type onchain.

:::

## Onchain Implementation

With `plugs` and `signature` as the fields of the `LivePlugs` data type we can generate the type hash as follows:

::: code-group

```solidity [Inline.sol]
bytes32 constant LIVE_PLUGS_TYPEHASH = keccak256(
    'LivePlugs(Plugs plugs,bytes signature)Plug(address target,uint256 value,bytes data)Plugs(address socket,Plug[] plugs,bytes solver,bytes32 salt)'
);
```

```solidity [Hash.sol]
bytes32 constant LIVE_PLUGS_TYPEHASH = 0x6cd9425d5dd731a623cc0fee82dd49189fd54b9a5d85856406fe9744411d9157
```

:::
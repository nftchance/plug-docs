---
head:
    - - meta
      - property: og:title
        content: Plugs
    - - meta
      - name: description
        content: A Plugs data type provides EIP-712 compatability for encoding and decoding.
    - - meta
      - property: og:description
        content: A Plugs data type provides EIP-712 compatability for encoding and decoding. 
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---

# Plugs

A [Plugs](/generated/base-types/Plugs) data type provides EIP-712 compatability for encoding and decoding the data needed for an `Plug` to be securely distributed and executed. 

::: info
                
Inside the declaration of a `Plugs` data type there are nested [Plug](/generated/base-types/Plug) and [Breaker](/generated/base-types/Breaker) data types that need to be built independently.
                    
:::

## The Data Type

To interact with the data type onchain will you need both the `Typescript` and `EIP-712` representations of the `Plugs` data type: 

::: code-group

``` typescript [Typescript/Javascript]
{
    plugs: Array<Plug>,
	breaker: Breaker 
}
```

```typescript [EIP-712]
{
    { name: 'plugs', type: 'Plug[]' },
	{ name: 'breaker', type: 'Breaker' } 
}
```

:::

::: tip

The `Typescript` representation is used to build and work with the object in your dApp and API while the `EIP-712` representation is used to encode and decode the data type onchain.

:::

## Onchain Implementation

With `plugs` and `breaker` as the fields of the `Plugs` data type we can generate the type hash as follows:

::: code-group

```solidity [Verbose.sol]
bytes32 constant PLUGS_TYPEHASH = keccak256(
    abi.encodePacked(
        "Plugs(",
		"Plug[] plugs",
		"Breaker breaker",
        ")"
    )
);
```

```solidity [Inline.sol]
bytes32 constant PLUGS_TYPEHASH = keccak256(
    'Plugs(Plug[] plugs,Breaker breaker)Breaker(uint256 nonce,uint256 queue)Current(address ground,uint256 voltage,bytes data)Fuse(address neutral,bytes live)LivePin(Pin pin,bytes signature)Pin(address neutral,bytes32 live,Fuse[] fuses,bytes32 salt)Plug(Current current,LivePin[] pins)'
);
```

```solidity [Hash.sol]
bytes32 constant PLUGS_TYPEHASH = 0x0ca686c3f37fb1536e62d17eb27e8d838569464dfbf3b6dcedafa5adc9ddc9cb
```

:::
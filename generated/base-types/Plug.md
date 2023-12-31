---
head:
    - - meta
      - property: og:title
        content: Plug
    - - meta
      - name: description
        content: A Plug data type provides EIP-712 compatability for encoding and decoding.
    - - meta
      - property: og:description
        content: A Plug data type provides EIP-712 compatability for encoding and decoding. 
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---

# Plug

A [Plug](/generated/base-types/Plug) data type provides EIP-712 compatability for encoding and decoding the data needed for an `Plug` to be securely distributed and executed. 

::: info
                
Inside the declaration of a `Plug` data type there are nested [Current](/generated/base-types/Current) and [LivePin](/generated/base-types/LivePin) data types that need to be built independently.
                    
:::

## The Data Type

To interact with the data type onchain will you need both the `Typescript` and `EIP-712` representations of the `Plug` data type: 

::: code-group

``` typescript [Typescript/Javascript]
{
    current: Current,
	pins: Array<LivePin> 
}
```

```typescript [EIP-712]
{
    { name: 'current', type: 'Current' },
	{ name: 'pins', type: 'LivePin[]' } 
}
```

:::

::: tip

The `Typescript` representation is used to build and work with the object in your dApp and API while the `EIP-712` representation is used to encode and decode the data type onchain.

:::

## Onchain Implementation

With `current` and `pins` as the fields of the `Plug` data type we can generate the type hash as follows:

::: code-group

```solidity [Verbose.sol]
bytes32 constant PLUG_TYPEHASH = keccak256(
    abi.encodePacked(
        "Plug(",
		"Current current",
		"LivePin[] pins",
        ")"
    )
);
```

```solidity [Inline.sol]
bytes32 constant PLUG_TYPEHASH = keccak256(
    'Plug(Current current,LivePin[] pins)Current(address ground,uint256 voltage,bytes data)Fuse(address neutral,bytes live)LivePin(Pin pin,bytes signature)Pin(address neutral,bytes32 live,Fuse[] fuses,bytes32 salt)'
);
```

```solidity [Hash.sol]
bytes32 constant PLUG_TYPEHASH = 0x6faebc8a3a65dc257405b682e47b1876fedc7f804f47f7b6029c55053f6b3925
```

:::
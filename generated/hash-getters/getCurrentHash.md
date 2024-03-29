---
head:
    - - meta
      - property: og:title
        content: getCurrentHash
    - - meta
      - name: description
        content: Encode a Current into a hash and verify the decoded data to verify type compliance.
    - - meta
      - property: og:description
        content: Encode a Current into a hash and verify the decoded data to verify type compliance.
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---
        
# getCurrentHash

Encode a [Current](/generated/base-types/Current) into a hash and verify the decoded [Current](/generated/base-types/Current) data from a hash to verify type compliance.

## Parameters

- `$input` : [Current](/generated/base-types/Current) : The `Current` data to encode.

## Returns

- `$hash` : `bytes32` : The packet hash of the encoded [Current](/generated/base-types/Current) data.

## Onchain Implementation

With `getCurrentHash` you can call the function as a `read` and get the encoded data back as a hash. 
        
This is helpful in times when you need to build a message hash without tracking down all the types as well as when you need to verify a signed message hash containing a `Current` data type.

::: code-group

``` solidity [Types.sol:getCurrentHash]
function getCurrentHash(
	TypesLib.Current memory $input
) public pure virtual returns (bytes32 $hash) {
	$hash = keccak256(abi.encode(
		CURRENT_TYPEHASH,
		$input.target,
	$input.value,
	keccak256($input.data)
	));
}
``` 

:::
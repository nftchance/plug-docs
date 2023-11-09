---
head:
    - - meta
      - property: og:title
        content: getDelegationHash
    - - meta
      - name: description
        content: Encode a Delegation into a hash and verify the decoded data to verify type compliance.
    - - meta
      - property: og:description
        content: Encode a Delegation into a hash and verify the decoded data to verify type compliance.
notes:
    - - author: Auto generated by @nftchance/emporium-types/cli
---
        
# getDelegationHash

Encode a [Delegation](/generated/base-types/Delegation) into a hash and verify the decoded [Delegation](/generated/base-types/Delegation) data from a hash to verify type compliance.

## Parameters

- `$input` : [Delegation](/generated/base-types/Delegation) : The `Delegation` data to encode.

## Returns

- `$hash` : `bytes32` : The packet hash of the encoded [Delegation](/generated/base-types/Delegation) data.

## Onchain Implementation

With `getDelegationHash` you can call the function as a `read` and get the encoded data back as a hash. 
        
This is helpful in times when you need to build a message hash without tracking down all the types as well as when you need to verify a signed message hash containing a `Delegation` data type.

::: code-group

``` solidity [Types.sol:getDelegationHash]
function getDelegationHash(
	Delegation memory $input
) public pure virtual returns (bytes32 $hash) {
	$hash = keccak256(abi.encode(
		DELEGATION_TYPEHASH,
		$input.delegate,
		$input.authority,
		getCaveatArrayHash($input.caveats),
		$input.salt
	));
}
``` 

:::
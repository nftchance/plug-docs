---
head:
    - - meta
      - property: og:title
        content: getSignedPermissionHash
    - - meta
      - name: description
        content: Encode a SignedPermission into a hash and verify the decoded data to verify type compliance.
    - - meta
      - property: og:description
        content: Encode a SignedPermission into a hash and verify the decoded data to verify type compliance.
notes:
    - - author: Auto generated by @nftchance/plug-types/cli
---
        
# getSignedPermissionHash

Encode a [SignedPermission](/generated/base-types/SignedPermission) into a hash and verify the decoded [SignedPermission](/generated/base-types/SignedPermission) data from a hash to verify type compliance.

## Parameters

- `$input` : [SignedPermission](/generated/base-types/SignedPermission) : The `SignedPermission` data to encode.

## Returns

- `$hash` : `bytes32` : The packet hash of the encoded [SignedPermission](/generated/base-types/SignedPermission) data.

## Onchain Implementation

With `getSignedPermissionHash` you can call the function as a `read` and get the encoded data back as a hash. 
        
This is helpful in times when you need to build a message hash without tracking down all the types as well as when you need to verify a signed message hash containing a `SignedPermission` data type.

::: code-group

``` solidity [Types.sol:getSignedPermissionHash]
function getSignedPermissionHash(
	SignedPermission memory $input
) public pure virtual returns (bytes32 $hash) {
	$hash = keccak256(abi.encode(
		SIGNED_PERMISSION_TYPEHASH,
		getPermissionHash($input.permission),
		keccak256($input.signature)
	));
}
``` 

:::
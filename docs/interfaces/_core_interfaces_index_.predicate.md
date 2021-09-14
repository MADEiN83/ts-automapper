> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/interfaces/index"](../modules/_core_interfaces_index_.md) / [Predicate](_core_interfaces_index_.predicate.md) /

# Interface: Predicate <**TSource, TDestination**>

## Type parameters

▪ **TSource**

▪ **TDestination**

## Hierarchy

* **Predicate**

## Index

### Properties

* [destinationPredicate](_core_interfaces_index_.predicate.md#destinationpredicate)
* [options](_core_interfaces_index_.predicate.md#options)
* [sourcePredicate](_core_interfaces_index_.predicate.md#sourcepredicate)

## Properties

###  destinationPredicate

• **destinationPredicate**: *function*

*Defined in [core/interfaces/index.ts:3](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/interfaces/index.ts#L3)*

#### Type declaration:

▸ (`obj`: `TDestination`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TDestination` |

___

###  options

• **options**: *[AutoMapperOptions](_core_interfaces_index_.automapperoptions.md)‹*`TSource`*›*

*Defined in [core/interfaces/index.ts:4](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/interfaces/index.ts#L4)*

___

###  sourcePredicate

• **sourcePredicate**: *function*

*Defined in [core/interfaces/index.ts:2](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/interfaces/index.ts#L2)*

#### Type declaration:

▸ (`obj`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TSource` |
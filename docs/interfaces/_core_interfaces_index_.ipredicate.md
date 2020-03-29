> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/interfaces/index"](../modules/_core_interfaces_index_.md) / [IPredicate](_core_interfaces_index_.ipredicate.md) /

# Interface: IPredicate <**TSource, TDestination**>

## Type parameters

▪ **TSource**

▪ **TDestination**

## Hierarchy

* **IPredicate**

## Index

### Properties

* [destinationPredicate](_core_interfaces_index_.ipredicate.md#destinationpredicate)
* [options](_core_interfaces_index_.ipredicate.md#options)
* [sourcePredicate](_core_interfaces_index_.ipredicate.md#sourcepredicate)

## Properties

###  destinationPredicate

• **destinationPredicate**: *function*

*Defined in [core/interfaces/index.ts:3](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/interfaces/index.ts#L3)*

#### Type declaration:

▸ (`obj`: `TDestination`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TDestination` |

___

###  options

• **options**: *[AutoMapperOptions](_core_interfaces_index_.automapperoptions.md)*

*Defined in [core/interfaces/index.ts:4](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/interfaces/index.ts#L4)*

___

###  sourcePredicate

• **sourcePredicate**: *function*

*Defined in [core/interfaces/index.ts:2](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/interfaces/index.ts#L2)*

#### Type declaration:

▸ (`obj`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TSource` |
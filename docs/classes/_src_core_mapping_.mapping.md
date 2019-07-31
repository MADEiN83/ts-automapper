> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["src/core/Mapping"](../modules/_src_core_mapping_.md) / [Mapping](_src_core_mapping_.mapping.md) /

# Class: Mapping <**TSource, TDestination**>

## Type parameters

▪ **TSource**

▪ **TDestination**

## Hierarchy

* **Mapping**

## Index

### Properties

* [mapsList](_src_core_mapping_.mapping.md#mapslist)

### Methods

* [map](_src_core_mapping_.mapping.md#map)

## Properties

###  mapsList

• **mapsList**: *object[]* =  []

*Defined in [src/core/Mapping.ts:5](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/Mapping.ts#L5)*

The list of mapping

## Methods

###  map

▸ **map**(`sourcePredicate`: function, `destinationPredicate?`: undefined | function, `options?`: [IMappingOptions](../interfaces/_src_core_interface_.imappingoptions.md)‹*`TSource`*›): *[Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [src/core/Mapping.ts:21](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/Mapping.ts#L21)*

Map a field of TSource to a field of TDestination

**Parameters:**

▪ **sourcePredicate**: *function*

A field of TSource object.

▸ (`object`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`object` | `TSource` |

▪`Optional`  **destinationPredicate**: *undefined | function*

(optional) A field of TDestination object.

▪`Optional`  **options**: *[IMappingOptions](../interfaces/_src_core_interface_.imappingoptions.md)‹*`TSource`*›*

(optional) An object that represents your wanted configurations for the current mapping.

**Returns:** *[Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*›*

Returns the current class to be able to chain mapping.
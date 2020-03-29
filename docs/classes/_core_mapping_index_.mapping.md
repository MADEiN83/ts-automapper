> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/mapping/index"](../modules/_core_mapping_index_.md) / [Mapping](_core_mapping_index_.mapping.md) /

# Class: Mapping <**TSource, TDestination**>

## Type parameters

▪ **TSource**

▪ **TDestination**

## Hierarchy

* **Mapping**

## Index

### Constructors

* [constructor](_core_mapping_index_.mapping.md#constructor)

### Properties

* [executor](_core_mapping_index_.mapping.md#private-executor)
* [key](_core_mapping_index_.mapping.md#key)
* [predicates](_core_mapping_index_.mapping.md#predicates)

### Methods

* [assign](_core_mapping_index_.mapping.md#assign)
* [exec](_core_mapping_index_.mapping.md#exec)
* [map](_core_mapping_index_.mapping.md#map)

## Constructors

###  constructor

\+ **new Mapping**(`key`: string): *[Mapping](_core_mapping_index_.mapping.md)*

*Defined in [core/mapping/index.ts:7](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Mapping](_core_mapping_index_.mapping.md)*

## Properties

### `Private` executor

• **executor**: *[MappingExecutor](_core_mappingexecutor_index_.mappingexecutor.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [core/mapping/index.ts:6](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L6)*

___

###  key

• **key**: *string*

*Defined in [core/mapping/index.ts:7](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L7)*

___

###  predicates

• **predicates**: *[IPredicate](../interfaces/_core_interfaces_index_.ipredicate.md)‹*`TSource`*, *`TDestination`*›[]* =  []

*Defined in [core/mapping/index.ts:5](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L5)*

## Methods

###  assign

▸ **assign**(`source`: `TSource`, `destination`: `TDestination`): *object*

*Defined in [core/mapping/index.ts:31](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L31)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | `TSource` |
`destination` | `TDestination` |

**Returns:** *object*

* **oui**: *string* = "non"

___

###  exec

▸ **exec**(`source`: `TSource`): *`TDestination`*

*Defined in [core/mapping/index.ts:23](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L23)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | `TSource` |

**Returns:** *`TDestination`*

___

###  map

▸ **map**(`sourcePredicate`: function, `destinationPredicate`: function, `options`: [AutoMapperOptions](../interfaces/_core_interfaces_index_.automapperoptions.md)): *[Mapping](_core_mapping_index_.mapping.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [core/mapping/index.ts:14](https://github.com/MADEiN83/ts-automapper/blob/d5cc5b5/src/core/mapping/index.ts#L14)*

**Parameters:**

▪ **sourcePredicate**: *function*

▸ (`obj`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TSource` |

▪ **destinationPredicate**: *function*

▸ (`obj`: `TDestination`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TDestination` |

▪`Default value`  **options**: *[AutoMapperOptions](../interfaces/_core_interfaces_index_.automapperoptions.md)*=  {}

**Returns:** *[Mapping](_core_mapping_index_.mapping.md)‹*`TSource`*, *`TDestination`*›*
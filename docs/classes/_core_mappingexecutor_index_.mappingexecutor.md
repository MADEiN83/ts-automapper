> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/mappingExecutor/index"](../modules/_core_mappingexecutor_index_.md) / [MappingExecutor](_core_mappingexecutor_index_.mappingexecutor.md) /

# Class: MappingExecutor <**TSource, TDestination**>

## Type parameters

▪ **TSource**

▪ **TDestination**

## Hierarchy

* **MappingExecutor**

## Index

### Methods

* [buildDestinationObject](_core_mappingexecutor_index_.mappingexecutor.md#builddestinationobject)
* [castValue](_core_mappingexecutor_index_.mappingexecutor.md#private-castvalue)
* [execOperation](_core_mappingexecutor_index_.mappingexecutor.md#private-execoperation)
* [getValueByPredicate](_core_mappingexecutor_index_.mappingexecutor.md#private-getvaluebypredicate)
* [setDeepValueByPredicate](_core_mappingexecutor_index_.mappingexecutor.md#private-setdeepvaluebypredicate)

## Methods

###  buildDestinationObject

▸ **buildDestinationObject**(`source`: `TSource`, `predicates`: [IPredicate](../interfaces/_core_interfaces_index_.ipredicate.md)‹*`TSource`*, *`TDestination`*›[]): *`TDestination`*

*Defined in [core/mappingExecutor/index.ts:5](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/mappingExecutor/index.ts#L5)*

**Parameters:**

Name | Type |
------ | ------ |
`source` | `TSource` |
`predicates` | [IPredicate](../interfaces/_core_interfaces_index_.ipredicate.md)‹*`TSource`*, *`TDestination`*›[] |

**Returns:** *`TDestination`*

___

### `Private` castValue

▸ **castValue**(`value`: any, `type?`: [AutoMapperTypes](../modules/_core_interfaces_index_.md#automappertypes)): *any*

*Defined in [core/mappingExecutor/index.ts:47](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/mappingExecutor/index.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`type?` | [AutoMapperTypes](../modules/_core_interfaces_index_.md#automappertypes) |

**Returns:** *any*

___

### `Private` execOperation

▸ **execOperation**(`value`: any, `operation`: function): *any*

*Defined in [core/mappingExecutor/index.ts:62](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/mappingExecutor/index.ts#L62)*

**Parameters:**

▪ **value**: *any*

▪ **operation**: *function*

▸ (`value`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |

**Returns:** *any*

___

### `Private` getValueByPredicate

▸ **getValueByPredicate**(`source`: `TSource`, `sourcePredicate`: function, `type`: [AutoMapperTypes](../modules/_core_interfaces_index_.md#automappertypes)): *any*

*Defined in [core/mappingExecutor/index.ts:38](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/mappingExecutor/index.ts#L38)*

**Parameters:**

▪ **source**: *`TSource`*

▪ **sourcePredicate**: *function*

▸ (`obj`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TSource` |

▪ **type**: *[AutoMapperTypes](../modules/_core_interfaces_index_.md#automappertypes)*

**Returns:** *any*

___

### `Private` setDeepValueByPredicate

▸ **setDeepValueByPredicate**(`output`: any, `predicate`: any, `value`: any): *void*

*Defined in [core/mappingExecutor/index.ts:29](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/mappingExecutor/index.ts#L29)*

**Parameters:**

Name | Type |
------ | ------ |
`output` | any |
`predicate` | any |
`value` | any |

**Returns:** *void*
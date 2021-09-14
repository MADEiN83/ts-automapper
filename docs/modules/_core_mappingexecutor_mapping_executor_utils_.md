> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/mappingExecutor/mapping-executor.utils"](_core_mappingexecutor_mapping_executor_utils_.md) /

# External module: "core/mappingExecutor/mapping-executor.utils"

## Index

### Functions

* [castValue](_core_mappingexecutor_mapping_executor_utils_.md#const-castvalue)
* [execConditions](_core_mappingexecutor_mapping_executor_utils_.md#const-execconditions)
* [execOperation](_core_mappingexecutor_mapping_executor_utils_.md#const-execoperation)
* [getValueByPredicate](_core_mappingexecutor_mapping_executor_utils_.md#const-getvaluebypredicate)
* [setDeepValueByPredicate](_core_mappingexecutor_mapping_executor_utils_.md#const-setdeepvaluebypredicate)

## Functions

### `Const` castValue

▸ **castValue**(`value`: any, `type?`: [AutoMapperTypes](_core_interfaces_index_.md#automappertypes)): *any*

*Defined in [core/mappingExecutor/mapping-executor.utils.ts:4](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/mappingExecutor/mapping-executor.utils.ts#L4)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | any |
`type?` | [AutoMapperTypes](_core_interfaces_index_.md#automappertypes) |

**Returns:** *any*

___

### `Const` execConditions

▸ **execConditions**<**TSource**>(`source`: `TSource`, `conditions`: [MappingConditions](../interfaces/_core_interfaces_index_.mappingconditions.md)‹*`TSource`*›): *boolean*

*Defined in [core/mappingExecutor/mapping-executor.utils.ts:44](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/mappingExecutor/mapping-executor.utils.ts#L44)*

**Type parameters:**

▪ **TSource**

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`source` | `TSource` | - |
`conditions` | [MappingConditions](../interfaces/_core_interfaces_index_.mappingconditions.md)‹*`TSource`*› |  {} |

**Returns:** *boolean*

___

### `Const` execOperation

▸ **execOperation**(`value`: any, `operation`: function): *any*

*Defined in [core/mappingExecutor/mapping-executor.utils.ts:37](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/mappingExecutor/mapping-executor.utils.ts#L37)*

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

### `Const` getValueByPredicate

▸ **getValueByPredicate**<**TSource**>(`source`: `TSource`, `sourcePredicate`: function, `type`: [AutoMapperTypes](_core_interfaces_index_.md#automappertypes)): *any*

*Defined in [core/mappingExecutor/mapping-executor.utils.ts:19](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/mappingExecutor/mapping-executor.utils.ts#L19)*

**Type parameters:**

▪ **TSource**

**Parameters:**

▪ **source**: *`TSource`*

▪ **sourcePredicate**: *function*

▸ (`obj`: `TSource`): *any*

**Parameters:**

Name | Type |
------ | ------ |
`obj` | `TSource` |

▪ **type**: *[AutoMapperTypes](_core_interfaces_index_.md#automappertypes)*

**Returns:** *any*

___

### `Const` setDeepValueByPredicate

▸ **setDeepValueByPredicate**(`output`: any, `predicate`: any, `value`: any): *void*

*Defined in [core/mappingExecutor/mapping-executor.utils.ts:28](https://github.com/MADEiN83/ts-automapper/blob/2939a91/src/core/mappingExecutor/mapping-executor.utils.ts#L28)*

**Parameters:**

Name | Type |
------ | ------ |
`output` | any |
`predicate` | any |
`value` | any |

**Returns:** *void*
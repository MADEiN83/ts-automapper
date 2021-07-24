> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/automapper/index"](../modules/_core_automapper_index_.md) / [AutoMapper](_core_automapper_index_.automapper.md) /

# Class: AutoMapper

## Hierarchy

* **AutoMapper**

## Index

### Properties

* [mappings](_core_automapper_index_.automapper.md#static-mappings)

### Methods

* [create](_core_automapper_index_.automapper.md#static-create)
* [createMappingInstance](_core_automapper_index_.automapper.md#static-private-createmappinginstance)
* [exec](_core_automapper_index_.automapper.md#static-exec)
* [reset](_core_automapper_index_.automapper.md#static-reset)

## Properties

### `Static` mappings

▪ **mappings**: *[Mapping](_core_mapping_index_.mapping.md)‹*any*, *any*›[]* =  []

*Defined in [core/automapper/index.ts:8](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/automapper/index.ts#L8)*

## Methods

### `Static` create

▸ **create**<**TSource**, **TDestination**>(`key`: string): *[Mapping](_core_mapping_index_.mapping.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [core/automapper/index.ts:24](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/automapper/index.ts#L24)*

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The unique key to be able to retrieve the mapping. |

**Returns:** *[Mapping](_core_mapping_index_.mapping.md)‹*`TSource`*, *`TDestination`*›*

Returns the mapping class.

___

### `Static` `Private` createMappingInstance

▸ **createMappingInstance**(`key`: string): *[Mapping](_core_mapping_index_.mapping.md)‹*any*, *any*›*

*Defined in [core/automapper/index.ts:50](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/automapper/index.ts#L50)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *[Mapping](_core_mapping_index_.mapping.md)‹*any*, *any*›*

___

### `Static` exec

▸ **exec**<**TSource**, **TDestination**>(`key`: string, `source`: `TSource`): *`TDestination`*

*Defined in [core/automapper/index.ts:30](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/automapper/index.ts#L30)*

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`source` | `TSource` |

**Returns:** *`TDestination`*

___

### `Static` reset

▸ **reset**(): *void*

*Defined in [core/automapper/index.ts:43](https://github.com/MADEiN83/ts-automapper/blob/eda5030/src/core/automapper/index.ts#L43)*

**Returns:** *void*
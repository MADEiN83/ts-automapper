> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["core/automapper/index"](../modules/_core_automapper_index_.md) / [AutoMapper](_core_automapper_index_.automapper.md) /

# Class: AutoMapper

## Hierarchy

* **AutoMapper**

## Index

### Properties

* [mappings](_core_automapper_index_.automapper.md#static-mappings)

### Methods

* [clear](_core_automapper_index_.automapper.md#static-clear)
* [create](_core_automapper_index_.automapper.md#static-create)
* [exec](_core_automapper_index_.automapper.md#static-exec)

## Properties

### `Static` mappings

▪ **mappings**: *[Mapping](_core_mapping_index_.mapping.md)‹*any*, *any*›[]* =  []

*Defined in [core/automapper/index.ts:9](https://github.com/MADEiN83/ts-automapper/blob/a1de38d/src/core/automapper/index.ts#L9)*

## Methods

### `Static` clear

▸ **clear**(): *void*

*Defined in [core/automapper/index.ts:71](https://github.com/MADEiN83/ts-automapper/blob/a1de38d/src/core/automapper/index.ts#L71)*

**Returns:** *void*

___

### `Static` create

▸ **create**<**TSource**, **TDestination**>(`key`: string): *[Mapping](_core_mapping_index_.mapping.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [core/automapper/index.ts:24](https://github.com/MADEiN83/ts-automapper/blob/a1de38d/src/core/automapper/index.ts#L24)*

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

### `Static` exec

▸ **exec**<**TSource**, **TDestination**>(`key`: string, `source`: `TSource`): *`TDestination`*

*Defined in [core/automapper/index.ts:47](https://github.com/MADEiN83/ts-automapper/blob/a1de38d/src/core/automapper/index.ts#L47)*

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The unique key to be able to retrieve the mapping. |
`source` | `TSource` | The TSource object |

**Returns:** *`TDestination`*

The final object
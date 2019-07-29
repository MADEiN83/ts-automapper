> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["src/core/AutoMapper"](../modules/_src_core_automapper_.md) / [AutoMapper](_src_core_automapper_.automapper.md) /

# Class: AutoMapper

Static class for AutoMapper.

**`class`** AutoMapper

**`classdesc`** AutoMapper static class

## Hierarchy

* **AutoMapper**

## Index

### Properties

* [mappingsList](_src_core_automapper_.automapper.md#static-private-mappingslist)

### Methods

* [assign](_src_core_automapper_.automapper.md#static-assign)
* [createDefinition](_src_core_automapper_.automapper.md#static-createdefinition)
* [exec](_src_core_automapper_.automapper.md#static-exec)
* [execAll](_src_core_automapper_.automapper.md#static-execall)
* [parseMapping](_src_core_automapper_.automapper.md#static-private-parsemapping)

### Object literals

* [TYPES](_src_core_automapper_.automapper.md#static-types)

## Properties

### `Static` `Private` mappingsList

▪ **mappingsList**: *[IMappings](../interfaces/_src_core_interface_.imappings.md)[]* =  []

*Defined in [src/core/AutoMapper.ts:24](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L24)*

The mappings list created by the method `createDefinition`

**`name`** AutoMapper#mappingsList

**`type`** IMappings[]

## Methods

### `Static` assign

▸ **assign**<**TSource**, **TDestination**>(`source`: `TSource`, `destination`: `TDestination`, `key`: string): *`TDestination`*

*Defined in [src/core/AutoMapper.ts:88](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L88)*

Executes a mapping definition with an unique key and assign previously created TDestination object.

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | `TSource` | The source objects. |
`destination` | `TDestination` | The object that will be injected by TSource value(s). |
`key` | string | The unique key to be able to retrieve the mapping. |

**Returns:** *`TDestination`*

Returns the destination object after update.

___

### `Static` createDefinition

▸ **createDefinition**<**TSource**, **TDestination**>(`key`: string): *[Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*›*

*Defined in [src/core/AutoMapper.ts:31](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L31)*

Creates a mapping definition with an unique key.

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | The unique key to be able to retrieve the mapping. |

**Returns:** *[Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*›*

Returns the mapping class.

___

### `Static` exec

▸ **exec**<**TSource**, **TDestination**>(`source`: `TSource`, `key`: string): *`TDestination`*

*Defined in [src/core/AutoMapper.ts:45](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L45)*

Executes a mapping definition with an unique key.

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | `TSource` | - |
`key` | string | The unique key to be able to retrieve the mapping. |

**Returns:** *`TDestination`*

Returns a new instance of TDestination.

___

### `Static` execAll

▸ **execAll**<**TSource**, **TDestination**>(`list`: `TSource`[], `key`: string): *`TDestination`[]*

*Defined in [src/core/AutoMapper.ts:64](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L64)*

Executes a mapping definition with an unique key.

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`list` | `TSource`[] | The list of source objects. |
`key` | string | The unique key to be able to retrieve the mapping. |

**Returns:** *`TDestination`[]*

Returns a list of TDestination.

___

### `Static` `Private` parseMapping

▸ **parseMapping**<**TSource**, **TDestination**>(`source`: `TSource`, `mapping`: [Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*›): *`TDestination`*

*Defined in [src/core/AutoMapper.ts:98](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L98)*

**Type parameters:**

▪ **TSource**

▪ **TDestination**

**Parameters:**

Name | Type |
------ | ------ |
`source` | `TSource` |
`mapping` | [Mapping](_src_core_mapping_.mapping.md)‹*`TSource`*, *`TDestination`*› |

**Returns:** *`TDestination`*

## Object literals

### `Static` TYPES

### ▪ **TYPES**: *object*

*Defined in [src/core/AutoMapper.ts:17](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L17)*

AutoMapper types.

**`name`** AutoMapper#TYPES

**`type`** object

###  FLOAT

• **FLOAT**: *string* = "float"

*Defined in [src/core/AutoMapper.ts:17](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L17)*

###  INTEGER

• **INTEGER**: *string* = "int"

*Defined in [src/core/AutoMapper.ts:17](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L17)*

###  STRING

• **STRING**: *string* = "string"

*Defined in [src/core/AutoMapper.ts:17](https://github.com/MADEiN83/ts-automapper/blob/bac2dd4/src/core/AutoMapper.ts#L17)*
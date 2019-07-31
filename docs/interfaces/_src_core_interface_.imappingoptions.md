> **[ts-automapper](../README.md)**

[Globals](../globals.md) / ["src/core/interface"](../modules/_src_core_interface_.md) / [IMappingOptions](_src_core_interface_.imappingoptions.md) /

# Interface: IMappingOptions <**TSource**>

## Type parameters

▪ **TSource**

## Hierarchy

* **IMappingOptions**

## Index

### Properties

* [condition](_src_core_interface_.imappingoptions.md#optional-condition)
* [default](_src_core_interface_.imappingoptions.md#optional-default)
* [operation](_src_core_interface_.imappingoptions.md#optional-operation)
* [type](_src_core_interface_.imappingoptions.md#optional-type)

## Properties

### `Optional` condition

• **condition**? : *undefined | function*

*Defined in [src/core/interface.ts:16](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/interface.ts#L16)*

Perform a conditional operation and stop process if returns false.

___

### `Optional` default

• **default**? : *any*

*Defined in [src/core/interface.ts:18](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/interface.ts#L18)*

Default value if no value was provided

___

### `Optional` operation

• **operation**? : *undefined | function*

*Defined in [src/core/interface.ts:14](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/interface.ts#L14)*

Perform an operation on property.

___

### `Optional` type

• **type**? : *undefined | string*

*Defined in [src/core/interface.ts:12](https://github.com/MADEiN83/ts-automapper/blob/08fcd5c/src/core/interface.ts#L12)*

Property type
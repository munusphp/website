---
id: start
title: Getting started
sidebar_label: Getting started
---
## Install

You can install Munus with Composer:

```bash
composer require munusphp/munus
```

Munus is currently in experimental phase, so use `dev-master`.

## Value

Functional programming is all about values and transformation of values using functions.
Munus provides the necessary controls and collections to accomplish this goal in every-day PHP programming.

`Value` is the basic and most important type of this library. 
What you need to know about `Value`:
 - it is immutable by default
 - it is generic wrapper
 - it can be empty
 - it can be safely compared with other value

Control values:
 - [Option](option.md)
 - [Either](either.md)
 - [TryTo](tryto.md)

Collection values
 - [Map](map.md)
 - [Set](set.md)
 - [GenericList](list.md)
 - [Stream](stream.md)
 
Other componets:
 - [Lazy](lazy.md)
 - [Tuple](tuple.md)

## Architecture

Below you will find a bird's eye view. More detailed information about specific types can be found in this documentation.

![munus components](/img/components.png)

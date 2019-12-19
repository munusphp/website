---
id: data-structures
title: Data structures
sidebar_label: Data structures
---

Functional programming is all about values.

## Value

Basic operations:
 - get
 - getOrElse($other)
 - getOrElseThrow(Throwable $throwable)
 - getOrElseTry(callable $supplier)
 - getOrNull
 - map(callable $mapper)
 
Equality checks:
 - equals($object)

Iterable extensions:
 - contains($element)
 - exists(callable $predicate)
 - forEach(callable $consumer)
 - `forAll(callable $predicate)` - checks, if the given predicate is true for all elements.
 - iterator()

## Traversable


---
id: data-structures
title: Data structures
sidebar_label: Data structures
---

Functional programming is all about values. `Value` is the basic and most important type of this library. 
What you need to know about `Value`:
 - it is immutable by default
 - it is generic wrapper
 - it can be empty
 - it can be safely compared with other value

Each value class extends base `Value` which contains generic `template` annotation.
This allow us to use values as wrapper for our custom domain types.
Read [Generic types](generic-types.md) tab to learn more about how Munus uses generic types.

## Value

Basic operations:
 - `get()` - returns the underlying value
 - `getOrElse($other)` - returns the underlying value if present, otherwise return $other
 - `getOrElseThrow(Throwable $throwable)` -  returns the underlying value if present, otherwise throws $throwable
 - `getOrElseTry(callable $supplier)` - returns the underlying value if present, otherwise returns the result of $supplier
 - `getOrNull()` - returns the underlying value if present, otherwise returns null
 - `map(callable $mapper)` - maps the underlying value to a different type
 
Equality checks:
 - `equals($object): bool` - checks, if types are equals, for collections it checks if all values are equal and on the same order 

Iterable extensions:
 - `contains($element): bool` - checks, if the given element is contained
 - `exists(callable $predicate): bool` - checks, if an element exists such that the predicate holds 
 - `forEach(callable $consumer)` - performs an action on each element
 - `forAll(callable $predicate)` - checks, if the given predicate is true for all elements
 - `iterator()` - returns appropriate `Iterator` which allows to iterate through all elements 

Side-effects:
 - `peek(callable $action)` - performs given action on first element

Tests:
 - `isEmpty(): bool` - checks, if the underlying value is absent
 - `isSingleValued(): bool`- states whether this is a single-valued type

Type conversion:
 - `collect(Collector $collector)` - collects the underlying value(s) (if present) using the provided $collector, available collectors are described below
 - `toOption()` - converts value to an `Option`
 - `toStream()` - converts value to a `Stream`
 - `toArray()` - converts value to native PHP array `[]`

## Traversable

An interface for inherently recursive, multi-valued data structures. The order of elements is determined by
Iterator, which may vary each time it is called.

`Traversable` extends `Value`, so each above methods are also available for each `Traversable`.  

Basic operations:
 - `length()` - computes the number of elements of this traversable
 - `head()` - returns the first element
 - `tail()` - drops the first element and return new Traversable containing all elements except the first
 
Numeric operations:
 - `average()`
 - `min()`
 - `max()`
 - `product()`
 - `sum()`
 
Reduction:
 - `count(callable $predicate):int` - counts the elements which satisfy the given predicate
 - `fold($zero, callable $combine)` - folds this elements starting with $zero and successively calling $combine
 - `reduce(callable $operation)` - accumulates the elements by successively calling the given $operation

Selection:
 - `dropWhile(callable $predicate)` - drops elements while the predicate holds for the current element
 - `dropUntil(callable $predicate)` - drops elements until the predicate holds for the current element
 - `filter(callable $predicate)` - returns a new traversable consisting of all elements which satisfy the given predicate
 - `filterNot(callable $predicate)` - returns a new traversable consisting of all elements which do not satisfy the given predicate


## Collectors

 - `Collectors::toList()`
 - `Collectors::toSet()`
 - `Collectors::toMap(callable $keyProvider)`
 - `Collectors::summing()`
 - `Collectors::joining(string $glue)`
 - `Collectors::counting()`
 - `Collectors::averaging()`

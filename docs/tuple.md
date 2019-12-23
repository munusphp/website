---
id: tuple
title: Tuple
sidebar_label: Tuple
---

Tuples are simply a finite, ordered sequence of elements.

## Construction

To create new `Tuple` use named constructor `of`
which accepts a variable number of arguments:

```php
$tuple = Tuple::of('Munus', 'is', 'awesome');
$tuple = Tuple::of('currentTime', new \DateTimeImmutable());
```

`Tuple` implements built-in `ArrayAccess` interface. This will allow to use it like normal array:

```php
$tuple = Tuple::of(4, 2);
$tuple[0]; // holds 4
$tuple[1]; // holds 2
``` 

Tuples in Munus are immutable. This means that the assignment instruction will end with an exception:

```php
$tuple = Tuple::of('Munus', 'is', 'awesome');
$tuple[1] = 'is not'; // UnsupportedOperationException will be thrown
```

## Methods  

 - `arity(): int` - returns the number of elements in this tuple
 - `toArray(): array` - converts tuple to php classic array
 - `append($value): self` - appends new $value to the end and returns new Tuple
 - `concat(self $tuple): self` - merge one tuple with other tuple and returns new one
 - `apply(callable $transformer)` - transforms tuple with given $transformer, transformer will receive array in the argument
 - `map(callable $mapper): self` - maps tuple to other tuple
 - `equals(self $tuple): bool` - return true if given tuple contains identical values in identical order 

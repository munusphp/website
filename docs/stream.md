---
id: stream
title: Stream
sidebar_label: Stream
---

`Stream` is lazy sequence of elements which may be infinitely long.

`Stream` is composed of a head and a tail. Head contains first value, tail is lazy evaluated - subsequent values are calculated as needed.
The stream has two implementations available:
 - `EmptyStream` which stand for empty stream (`Empty` is reserved keyword in PHP)
 - `Cons` which stand for a stream with one or more elements (consisting of a head and tail)
 

## Construction

```php
Stream::empty();
Stream::of(1, 2, 3);
Stream::ofAll(['a', 'b', 'c']);
Stream::range(1, 10); // stream with 10 subsequent numbers from 1
```

Because a stream can be infinite there are several other interesting ways to create it:

```php
Stream::from(1); // infinite stream which emits subsequent numbers from 1
Stream::continually(function () {return mt_rand(1, 10); }); // creates stream which emits random numbers from 1 to 10

Stream::iterate(1, function (int $i) {return $i * 2; }); // creates stream, use 1 as start value
// and call given supplier with prev value each time to calculate next value
```

## Collectors

Common use case for stream is to iterate over some kind of source (potentially infinite) filter it and collect values to list:

```php
Stream::continually($dataProvider)
    ->filter(function($value) {return $value%2===0;})
    ->take(5)
    ->collect(Collectors::toList());
```

## Examples

Find the sum of the first ten squares of even numbers (from php 7.4):

```php
Stream::from(1)
    ->filter(fn($n) => $n%2===0)
    ->map(fn($n) => $n**2)
    ->take(10)
    ->sum();
```

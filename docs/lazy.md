---
id: lazy
title: Lazy
sidebar_label: Lazy
---

`Lazy` represents a lazy evaluated value. Lazy is memoizing, i.e. it evaluates only once and therefore is referential transparent.

```php
/** @var $lazy Lazy<int> */
$lazy = Lazy::of(function (): int {return random_int(1, 1000); });
$lazy->isEvaluated(); // return false
$lazy->get(); //returns random int
$lazy->isEvaluated(); // return true
$lazy->get(); // returns same random int
```

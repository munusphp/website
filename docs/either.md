---
id: either
title: Either
sidebar_label: Either
---

Either represents a value of two possible types: `Left` or `Right`. Example: `compute()` function, which results 
either in an integer value (in the case of success) or an error message of type string (in the case of failure). 

```php
/** @var $value Either<string,int> */
$value = compute().map(fn($i) => $i*2);
```

If the result of compute() is 1, the value is `Right(2)`.
If the result of compute() is `error`, the value is `Left('error')`.

By convention the success case is Right and the failure is Left.

Projecting `Left` Either to a `Right` have no effect on the left value. Similarly, projecting `Right` Either
to a 'Left` have no effect one the right value.

## Construction

There are two named constructors available: `left` and `right`

```php
$either = Either::left('error');
$either = Either::right('success');
```



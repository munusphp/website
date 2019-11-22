---
id: values
title: Values
sidebar_label: Values
---

## Value

Each `Value` in **Munus** is immutable object.

### Option

```php
/** @var Option<Success> $option */
$option = Option::of(domainOperation());
```

### Lazy

```php
/** @var Lazy<int> $lazy */
$lazy = Lazy::of(function (): int {return random_int(1, 1000); });
```

### Either

```php
/** @return Either<Failure,Success> */
function domainOperation(): Either {}
```

### TryEx

```php
/** @var TryEx<Result> $result */
$result = TryEx::of(function(){throw new \DomainException('use ddd');});
$result->getOrElse(new Result())
```

---
id: value
title: Value
sidebar_label: Value
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

### TryTo

```php
/** @var TryTo<Result> $result */
$result = TryTo::run(function(){throw new \DomainException('use ddd');});
$result->getOrElse(new Result())
```

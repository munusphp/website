---
id: tryto
title: TryTo
sidebar_label: TryTo
---

# TryTo

```php
/** @var TryTo<Result> $result */
$result = TryTo::run(function(){throw new \DomainException('use ddd');});
$result->getOrElse(new Result())
```

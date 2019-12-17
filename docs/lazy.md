---
id: lazy
title: Lazy
sidebar_label: Lazy
---

# Lazy

```php
/** @var Lazy<int> $lazy */
$lazy = Lazy::of(function (): int {return random_int(1, 1000); });
```

---
id: tuple
title: Tuple
sidebar_label: Tuple
---

Tuples are simply a finite, ordered sequence of elements. Tuples in Munus are immutable.

```php
$tuple = Tuple::of('Munus', 'is', 'awesome');
```

`Tuple` implements built-in `ArrayAccess` interface. This will allow to use it like normal array:

```php
$tuple = Tuple::of(4, 2);
$tuple[0]; // holds 4
$tuple[1]; // holds 2
``` 

 


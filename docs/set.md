---
id: set
title: Set
sidebar_label: Set
---

Data structure which only holds unique values. Set is implemented as immutable array.

## Construction

Use one of three available named constructors: `empty`, `of` or `ofAll`

```php
Set::empty();
Set::of('first', 'second');
Set::ofAll(['alpha', 'beta']);
```

## Methods

You can `add` new element, `remove` existing one and check if given `$element` exist with `contains`.

```php
$set = Set::of('alpha');

$set2 = $set->add('beta');
$set3 = $set2->remove('beta');

$set->contains('alhpa'); // true
```

If given `$element` already exists in set, same instance will be returned.

You can also join two sets with `union`. The merged set will contain only unique values.

```php
$set = Set::of('alpha');
$set2 = Set::of('alpha', 'beta');

$set->union($set2); // 'alpha', 'beta'
```

`diff` returns a set containing all the entries from set that are not present in given set:

```php
$set = Set::of('alpha', 'beta', 'gamma');
$set = $set->diff(Set::of('beta', 'gamma', 'delta'));
// set is now Set::of('alpha');
```

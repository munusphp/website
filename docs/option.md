---
id: option
title: Option
sidebar_label: Option
---

Option is a monadic container type which represents an optional value. 
Instances of Option are either an instance of `Some` or an instance of `None`.

A typical use case of the option is to return a value that may or may not exist. In this way we can get rid of the need for a null to exist.

## Construction

The option can be created in 4 different ways. The simple one is named constructor `of`:

```php
/** @var Option<Success> $option */
$option = Option::of(domainOperation());
$option->getOrElse('default');
```

If the method `of` receive a `null` then the option becomes `None` (is empty).
The next two constructors create an option of the selected type:

```php
$some = Option::some('value');
$none = Option::none();
```

There is one more contructor available `::when(bool $condition, $value)`, when $condition will be true, then `Some` is returned, in 
other case `None` will occurs:

```php
$option = Option::when(someOperation(), 5);
```

---
id: list
title: GenericList
sidebar_label: GenericList
---

Unfortunately the `List` is a reserved keyword in PHP so the list in Munus is simply called `GenericList`.

An immutable `GenericList` is an eager sequence of elements. 
Its immutability makes it suitable for concurrent programming (which not directly supported in PHP ;)).

`GenericList` is composed of a head and a tail. Head contains first value, tail is another list instance.
The list has two implementations available:
 - `Nil` which stand for empty list
 - `Cons` which stand for a list with one or more elements (consisting of a head and tail)
 
## Construction

```php
$list = GenericList::empty();
$list = GenericList::of(1, 2, 3);
$list = GenericList::ofAll([1, 2, 3]);
```

You can also create `GenericList` for a range of numbers:

```php
$list = GenericList::range(2, 15);
```

## Methods

List contains couple specific methods (in addition to those normally available for any `Traverasable`):

 - `prepend($element): self` - add $element to the begging of list and returns new instance
 - `append($element): self` - add $element to the end of list and returns new instance
 - `reverse(): self` - change the order of elements to reverse and returns new instance 

---
id: map
title: Map
sidebar_label: Map
---

Map is a specific collection. It differs slightly from the other collections because 
it consists not only of the value (V) but also of the key (K). 
The current implementation allows only string keys.

## Construction

```php
$map = Map::fromArray(['key1' => 'value1', 'key2' => 'value2']);
```

You can also create empty map and put values to it using `put` method:

```php
$map = Map::empty();
$map = $map->put('php', 'is awesome');
```

Remember that `put` will not modify `Map`, instead of it will return new `Map` instance with one more key.

## Value extraction

To get value for given key use `get` method. It will return `Option` object which will be empty for non-existing key.

```php
$map = Map::fromArray(['php' => 'is awesome']);

$map->get('php'); // returns Some('is awesome')
$map->get('hph'); // returns None()
```

## Methods

Map contains couple specific methods (in addition to those normally available for any `Traverasable`):

 - `put(string $key, $value): self` - add value for given key and returns new map instance (if key exist value will be replaces with newer one)
 - `remove(string $key): self` - removes existing key and returns new map instance (or same if key not exists)
 - `mapKeys(callable $keyMapper): self` - maps all keys with given $keyMapper
 - `mapValues(callable $valueMapper): self` - maps all values with given $valueMapper
 - `merge(self $map): self` - merge with other map, if collisions occur, the value of this map is taken
 - `containsKey(string $key): bool`
 - `containsValue($value): bool`

## Differences

Unlike other traversables, the `Map` behaves differently for several methods.

`contains($element): bool` method will search for Tuple of key and value:

```php
$map = Map::fromArray(['a' => 'b', 'c' => 'd']);
$map->contains(Tuple::of('a', 'b')); //return true
$map->contains(Tuple::of('a', 'c')); //return false
```

`head()` and `tail()` will return first and last tuple of key and value:

```php
$map = Map::fromArray(['a' => 'b', 'c' => 'd', 'e' => 'f']);
$map->head(); //return Tuple::of('a', 'b')
$map->tail(); //return Tuple::of('e', 'f')
``` 

`map()` and other iterable extension with `callable` as argument will receive `Tuple` as argument.

---
id: match
title: Match
sidebar_label: Match
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::caution

[Match expression is natively supported since PHP 8 version.](https://www.php.net/manual/en/control-structures.match.php) We recommend using that instead of the munus match. Munus match is a great option for PHP 7 support.

:::

Match is an expression similar to the switch statement. It has a subject expression that is compared against multiple alternatives. All of the alternatives return value, which is the result of expression if the alternative is matched.

## Construction

To use match, you need to specify some alternatives. Each match expression can include multiple normal cases and one default case.

<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue('value')->of(
    caseOf('value', 'first case matched'),
    defaultOf('default case matched')
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match ('value') {
    'value' => 'first case matched',
    default => 'default case matched'
};
```

</TabItem>
</Tabs>

There are four types of cases in munus:
- `caseOf($value, $other)` - it's the case that compare value, and returns other value if is matched
- `caseCall($value, callable $callable)` - it's the case that compare value, and returns the result of executed callable
- `defaultOf($other)` - it's the default case that is matched if any of others are not, and returns other value
- `defaultCall(callable $callable)` - it's the default case that is matched if any of others are not, and returns the result of executed callable

### Callable

Both munus and native match allow using callables as results.

<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseCall(5, function ($x) { return $x * 2; }),
    defaultCall(function ($x) { return $x / 2; })
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match ($x) {
    5 => (fn () => $x * 2)(),
    default => (fn () => $x / 2)()
};
```

</TabItem>
</Tabs>

There is a small difference between them. In the native match, you can put the expression that in the normal way, should be run, but in the match, it will be executed only if the alternative is matched. You can get the same behavior in munus match. It's not the most beautiful solution, but it works the same.

<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseCall(5, function ($x) { return foo(); }),
    defaultCall(function ($x) { return bar(); })
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match ($x) {
    5 => foo(),
    default => bar()
};
```

</TabItem>
</Tabs>

### Exception

A match statement requires to match at least one of the alternatives, if there is no match, it throws an exception.

<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
  ]
}>
<TabItem value="php7">

```php
try {
    matchValue(5)->of(
        caseOf(4, 'foo'),
        caseOf(6, 'bar')
    );
} catch (\Munus\Exception\MatchNotFoundException $e) {
    var_dump($e);
}
```

</TabItem>
<TabItem value="php8">

```php
try {
    match (5) {
        4 => 'foo',
        6 => 'bar',
    };
} catch (\UnhandledMatchError $e) {
    var_dump($e);
}
```

</TabItem>
</Tabs>

## Predicates

Munus provides some predicates, that helps with building alternatives.

 - `isIn(iterable $values)` - accepts `iterable` of any type, and check if value is matched to any of them
 - `isInstanceOf(string $className)` - accepts the class name, and check if the value is the instance of it
 - `isNull()` - check if the value is null
 - `isNotNull()` - check if the value is not null
 - `isValue($value)` - accepts value of any type and check if the values are same
 - `isAllOf(Predicate ...$predicates)` - accepts `iterable` of predicates, and check if all of them are matched
 - `isAnyOf(Predicate ...$predicates)` - accepts `iterable` of predicates, and check if any of them is matched
 - `isNoneOf(Predicate ...$predicates)` - accepts `iterable` of predicates, and check if none of them are matched

### Usage

In PHP 8 where the match is natively supported, you can also use predicates in expressions. Every predicate is the implementation of the `Munus\Match\Predicate` interface. This interface has `meet($value): bool` method, which executes the predicate, and returns `bool` value.  
It's not always more readable solution, but you can choose which you want.

#### IsIn
  
<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
    { label: 'PHP 8 (predicates)', value: 'php8-predicates', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseOf(isIn($a, $b, $c), 5)
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match ($x) {
    $a, $b, $c => 5
};
```

</TabItem>

<TabItem value="php8-predicates">

```php
$result = match (true) {
    isIn($a, $b, $c)->meet($x) => 5
};
```
</TabItem>
</Tabs>

#### IsInstanceOf
  
<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
    { label: 'PHP 8 (predicates)', value: 'php8-predicates', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseOf(isInstanceOf(DateTime::class), 5)
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match (true) {
    $x instanceof DateTime => 5
};
```

</TabItem>

<TabItem value="php8-predicates">

```php
$result = match (true) {
    isInstanceOf(DateTime::class)->meet($x) => 5
};
```
</TabItem>
</Tabs>

#### IsAllOf

<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
    { label: 'PHP 8 (predicates)', value: 'php8-predicates', },
  ]
}>
<TabItem value="php7">

```php
$foo = 'bar';
$result = matchValue($foo)->of(
    caseOf(isAllOf(isNotNull(), isValue('bar'))), 5)
);
```

</TabItem>
<TabItem value="php8">

```php
$foo = 'bar';
$result = match (true) {
    !is_null($foo) && 'bar' === $foo => 5
};
```

</TabItem>

<TabItem value="php8-predicates">

```php
$foo = 'bar';
$result = match (true) {
    isAllOf(isNotNull(), isValue('bar'))->meet($foo) => 5
};
```
</TabItem>
</Tabs>

#### IsAnyOf
  
<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
    { label: 'PHP 8 (predicates)', value: 'php8-predicates', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseOf(isAnyOf(isNotNull(), isInstanceOf(DateTime::class)), 5)
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match (true) {
    !is_null($x) || $x instanceof DateTime => 5
};
```

</TabItem>

<TabItem value="php8-predicates">

```php
$result = match (true) {
    isAnyOf(isNotNull(), isInstanceOf(DateTime::class))->meet($x) => 5
};
```
</TabItem>
</Tabs>

#### IsNoneOf
  
<Tabs
  defaultValue="php7"
  values={[
    { label: 'PHP 7', value: 'php7', },
    { label: 'PHP 8', value: 'php8', },
    { label: 'PHP 8 (predicates)', value: 'php8-predicates', },
  ]
}>
<TabItem value="php7">

```php
$result = matchValue($x)->of(
    caseOf(isNoneOf(isNotNull(), isInstanceOf(DateTime::class)), 5)
);
```

</TabItem>
<TabItem value="php8">

```php
$result = match (true) {
    !is_null($x) || $x instanceof DateTime => 5
};
```

</TabItem>

<TabItem value="php8-predicates">

```php
$result = match (true) {
    isNoneOf(isNotNull(), isInstanceOf(DateTime::class))->meet($x) => 5
};
```
</TabItem>
</Tabs>
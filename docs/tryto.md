---
id: tryto
title: TryTo
sidebar_label: TryTo
---

The `TryTo` control gives us the ability to write safe code without focusing on try-catch blocks in the presence of exceptions.
`TryTo` wraps given `callable` and catch any `Throwable` that will occur while executing it.

Remember that `TryTo` will may re-throw exception when calling `get()` method. You can prevent from this using `isSuccess()` or `isFailure()` methods. 

## Construction

Use `run` static method:

```php
/** @var TryTo<Result> $result */
$result = TryTo::run(function(){throw new \DomainException('use ddd');});

$result->getOrElse(new Result());
```

## Failure

In case of an exception, `TryTo` returns an instance of `Failure`. 
You can use `getCause(): Throwable` method to gets the underlying exception.

```php
$result = TryTo::run(function(){throw new \DomainException('use ddd');});

$result->getCause(); // returns instance of DomainException
```

## Recovery

Common use case is recovery from failure. `TryTo` gives you interesting option for that `recover(string $throwable, callable $recovery): self`

```php
$value = TryTo::run(function () {throw new \DomainException('use ddd'); })
        ->recover(\RuntimeException::class, function () {return 'runtime handled'; })
        ->recover(\DomainException::class, function () {return 'domain handled'; })
        ->get();
// $value === 'domain handled'
```

## Methods

 - `andThen(callable $callable): self` - allow to chain next operation
 - `andFinally(callable $callable): self` - run given $callable whatever the result is
 - `onSuccess(callable $consumer): self` - run given $consumer with success value as an argument
 - `onFailure(callable $consumer): self`
 - `onSpecificFailure(string $throwable, callable $consumer): self`

## Examples

Try to run operation, log error, and get default value - all in one simple object-oriented approach:

```php
$result = TryTo::run(function () {
    return 'success';
})->onFailure(function (\Throwable $throwable) {
    log($throwable);
})->getOrElse('default');
```

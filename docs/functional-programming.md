---
id: functional-programming
title: Functional programming
sidebar_label: Functional programming
---

## Functional paradigm

Functional programming is one of three available programming paradigms (the other two are structural and object-oriented programming).
It was created before the first computer program was written. 
It is a direct consequence of the work of Alonzo Church, who invented the lambda calculus.

The fundamental characteristic of the lambda account is immutability. No value or symbol can change.

This one feature makes the functional approach lacking assignment instructions. 
In fact, it is available, but it is nevertheless subject to very strict discipline. 

## Functional programming in PHP

PHP supports classic concepts from the functional world, such as:
 - first-class function (function can be assigned to a variable, can be referenced by a variable and invoked dynamically)
 - recursion (allows a function to call itself)
 - anonymous functions (with support for closures and ability to bind closures to an object’s scope)
 - higher-order functions (such as `array_filter` or `array_map`)
 
Below we can see a simple example of using several of them:

```php
function criteria_lower_than($max)
{
    return function($item) use ($max) {
        return $item < $max;
    };
}

$input = [1, 2, 3, 4, 5, 6];
$output = array_filter($input, criteria_lower_than(4));
// 1, 2, 3
```

Unfortunately, despite this, there is no common interface to seamlessly connect all aspects of the functional world.
There are also other problems:
 - not every function guarantees immutability (`array_map` vs `sort`)
 - difference in order of parameters (`array_filter` vs `array_map`)
 - lack of fluent interface (`array_*` hell)

**Munus** tries to solve these and other problems so that you can enjoy the joy of 
functional programming in a fully object oriented style.

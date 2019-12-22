---
id: generic-types
title: Generic types
sidebar_label: Generic types
---

Generic types allow us to reuse the same code for different types.
The implementation of generic types is usually based on a template. 
For a given type or class, we generate a `T` template, which can be used safely further.

Generic types do not exist in PHP. 
In 2016 this [RFC](https://wiki.php.net/rfc/generics) was created, but at this moment it is not known if and when it will be implemented.

**Munus** uses *docblock* from PHPStan or Psalm. We can use this tools to analyse our code for type safe.
In the following example, we will declare a template type T for `Value` class, and use it in `get` method as return param:

```php
/**
 * @template T
 */
class Value
{
    /** @var T */
    private $value;
    
    /**
     * @param T $value
     */
    public function __construct($value) {
        $this->value = $value;
    }

    /**
     * @return T
     */
    public function get()
    {
        return $this->value;
    }
}
```

Now `Value` is our generic wrapper for any kind of type. For example we can create `Value` of `int`, `string` or even `DateTime` type.

```php
$int = new Value(42);
$int->get(); // static analysis tool will now that get returns int

$string = new Value('munus');
$string->get(); // static analysis tool will now that get returns string

$date = new Value(new \DateTime());
$date->get(); // static analysis tool will now that get returns DateTime
```

Each `Value` in Munus is generic.

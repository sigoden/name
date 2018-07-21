# name

A utility class to convert a string into CamelCase/dash-case/snake_case, capitalized/uncapitalized, plural/singular name.

## install

```sh
npm i @sigodenh/name-util -s
```

## Usage

```js
var Name = require('@sigodenh/name');
var name = new Name('helloWorld');

name.toDashCase().toValue(); // returns hello-world
name.toDashCase().toCamelCase().toValue() === name.toValue(); // true
name.toCapital().toUncapital().toValue() === name.toValue();  // true
name.toPlural().toSingular().toValue() === name.toValue(); // true
```

## API

### static methods

#### capitalize()
```js
Name.capitalize('apple'); // returns Apple
```

#### uncapitalize()
```js
Name.uncapitalize('Apple');  // returns apple
```

#### toDashCase()
```js
Name.toDashCase('helloWorld'); // returns hello-world
```

#### toSnakeCase()
```js
Name.toSnakeCase('helloWorld'); // returns hello_world
```

#### toCamelCase()
```js
Name.toCamelCase('hello-world'); // returns helloWorld
```

#### pluralize()
```js
Name.pluralize('apple'); // returns apples
```

#### singularize()
```js
Name.singularize('apples'); // returns apple
```

### public methods

#### toValue()
```js
new Name('hello-world').toValue(); // returns hello-world
```

#### toPlural()
```js
new Name('apple').toPlural().toValue(); // returns apples;
```

#### toSingular()
```js
new Name('apples').toSingular().toValue(); // returns apple;
```

#### toCapital()
```js
new Name('apple').toCapital().toValue(); // returns Apple;
```

#### toCapitalWords()
```js
new Name('hello-world').toCapitalWords().toValue(); // returns Hello-World;
```

#### toUncapital()
```js
new Name('Apple').toUncapital().toValue(); // returns apple;
```

#### toDashCase()
```js
new Name('helloWorld').toDashCase().toValue(); //returns hello-world
```

#### toSnakeCase()
```js
new Name('helloWorld').toDashCase().toValue(); //returns hello_world
```

#### toCamelCase()
```js
new Name('hello-world').toCamelCase().toValue(); //returns helloWorld
```

## License

[MIT](LICENSE)
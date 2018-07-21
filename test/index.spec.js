const Name = require('..');

describe('name', () => {
  test('static methods', () => {
    expect(Name.capitalize('apple')).toBe('Apple');
    expect(Name.uncapitalize('Apple')).toBe('apple');
    expect(Name.toDashCase('helloWorld')).toBe('hello-world');
    expect(Name.toSnakeCase('helloWorld')).toBe('hello_world');
    expect(Name.toCamelCase('hello-world')).toBe('helloWorld');
    expect(Name.pluralize('apple')).toBe('apples');
    expect(Name.singularize('apples')).toBe('apple');
  });
  test('public methods', () => {
    expect(new Name('hello-world').toValue()).toBe('hello-world');
    expect(new Name('apple').toPlural().toValue()).toBe('apples');
    expect(new Name('apples').toSingular().toValue()).toBe('apple');
    expect(new Name('apple').toCapital().toValue()).toBe('Apple');
    expect(new Name('hello-world').toCapitalWords().toValue()).toBe('Hello-World');
    expect(new Name('Apple').toUncapital().toValue()).toBe('apple');
    expect(new Name('helloWorld').toDashCase().toValue()).toBe('hello-world');
    expect(new Name('helloWorld').toSnakeCase().toValue()).toBe('hello_world');
    expect(new Name('hello-world').toCamelCase().toValue()).toBe('helloWorld');
  });
  test('chainable', () => {
    let value = 'helloWorld';
    let name = new Name(value);
    expect(
      name
        .toDashCase()
        .toCamelCase()
        .toValue()
    ).toBe(value);
    expect(
      name
        .toCapital()
        .toUncapital()
        .toValue()
    ).toBe(value);
    expect(
      name
        .toPlural()
        .toSingular()
        .toValue()
    ).toBe(value);
  });
});

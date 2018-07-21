const pluralUtil = require('pluralize');

function Name(name) {
  this.name = name;
}

Name.prototype.toValue = function() {
  return this.name;
};

Name.prototype.toPlural = function() {
  let name = pluralize(this.name);
  return new Name(name);
};

Name.prototype.toSingular = function() {
  let name = singularize(this.name);
  return new Name(name);
};

Name.prototype.toCapital = function() {
  let name = capitalize(this.name);
  return new Name(name);
};

Name.prototype.toCapitalWords = function() {
  let name = toDashCase(this.name)
    .split('-')
    .map(capitalize)
    .join('-');
  return new Name(name);
};

Name.prototype.toUncapital = function() {
  let name = uncapitalize(this.name);
  return new Name(name);
};

Name.prototype.toDashCase = function() {
  let name = toDashCase(this.name);
  return new Name(name);
};

Name.prototype.toSnakeCase = function() {
  let name = toSnakeCase(this.name);
  return new Name(name);
};

Name.prototype.toCamelCase = function() {
  let name = toCamelCase(this.name);
  return new Name(name);
};

function capitalize(name) {
  if (name === undefined) return name;
  name = name.trim();
  return name.substr(0, 1).toUpperCase() + name.substr(1);
}

function uncapitalize(name) {
  if (name === undefined) return name;
  name = name.trim();
  return name.substr(0, 1).toLowerCase() + name.substr(1);
}

function toDashCase(name) {
  return (name.match(/[A-Z]/g) || [])
    .reduce((accumulator, letter) => accumulator.replace(new RegExp(letter, 'g'), `-${letter.toLowerCase()}`), name)
    .replace(/(-|_|\s)+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '')
    .trim();
}

function toSnakeCase(name) {
  return toDashCase(name).replace(/-/g, '_');
}

function toCamelCase(name) {
  return (name.match(/(-|_|\s+)[a-zA-Z]/g) || [])
    .reduce(
      (accumulator, letter) =>
        accumulator.replace(new RegExp(letter, 'g'), letter.replace(/-|_|\s+/g, '').toUpperCase()),
      name
    )
    .replace(/(-|_|\s)+/g, '-')
    .replace(/^(-|_)+|(-|_)+$/g, '')
    .trim();
}

function pluralize(name) {
  return pluralUtil.plural(name);
}

function singularize(name) {
  return pluralUtil.singular(name);
}

Name.capitalize = capitalize;
Name.uncapitalize = uncapitalize;
Name.toDashCase = toDashCase;
Name.toSnakeCase = toSnakeCase;
Name.toCamelCase = toCamelCase;
Name.pluralize = pluralize;
Name.singularize = singularize;

module.exports = Name;

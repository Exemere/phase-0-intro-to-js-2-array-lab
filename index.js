let cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function appendCat(name) {
  return cats.push(name);
}

function prependCat(name) {
  return [name].shift(cats);
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function removeFirstCat() {
  return cats.slice(1);
}

beforeEach(() => {
  cats.length = 0;
  cats.push("Milo", "Otis", "Garfield");
});

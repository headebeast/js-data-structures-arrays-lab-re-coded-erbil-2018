// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]
const newDrivers;

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

destructivelyAppendDriver(Ralph);

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

destructivelyPrependDriver(Hedi);

function destructivelyRemoveLastDriver() {
  return drivers.pop()
}

destructivelyRemoveLastDriver();

function destructivelyRemoveFirstDriver() {
  return drivers.shift()
}

destructivelyRemoveFirstDriver();

function appendDriver(name) {
  let newDrivers = drivers.push(name)
}

appendDriver(Heade);

function prependDriver(name) {
  return newDrivers = drivers.unshift(name)
}

prependDriver(Beast);











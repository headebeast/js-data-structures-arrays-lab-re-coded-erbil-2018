// Write your solution here!

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name) {
  return drivers.push(name);
}

destructivelyAppendDriver(Ralph);

function destructivelyPrependDriver(name) {
  return drivers.unshift(name)
}

destructivelyPrependDriver(Hedi);

function destructivelyRemoveLastDriver(name) {
  return drivers.pop(name)
}

destructivelyRemoveLastDriver();
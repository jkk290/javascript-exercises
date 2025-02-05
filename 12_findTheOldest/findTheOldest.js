const findTheOldest = function (peopleArray) {
  const oldest = peopleArray.sort(function (a, b) {
    const currentYear = 2025;

    if (a.yearOfDeath == undefined) {
      const lastPerson = currentYear - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    } else if (b.yearOfDeath == undefined) {
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = currentYear - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    } else {
      const lastPerson = a.yearOfDeath - a.yearOfBirth;
      const nextPerson = b.yearOfDeath - b.yearOfBirth;
      return lastPerson > nextPerson ? -1 : 1;
    }
  });
  return oldest.at(0);
};

// Do not edit below this line
module.exports = findTheOldest;


    const people = [
      {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    // const currentYear = new Date().getFullYear();
const findTheOldest = function(people) {
//


for (let i = 0; i < people.length; i++) {
if (people[i].yearOfDeath === undefined && people[i].age === undefined) {
    people[i].yearOfDeath = new Date().getFullYear();
    people[i].age = (people[i].yearOfDeath - people[i].yearOfBirth)
 }
people[i].age = (people[i].yearOfDeath - people[i].yearOfBirth)
//people.sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))
//return people[0]
}

return people 
};

console.table(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;

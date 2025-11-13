const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        // If yearOfDeath is undefined (person still living), use the current year
        const deathYear = person.yearOfDeath === undefined ? new Date().getFullYear() : person.yearOfDeath;
        const age = deathYear - person.yearOfBirth;
        return age > oldest.age ? { name: person.name, age } : oldest;
    }, { name: '', age: 0 });
};

// Do not edit below this line
module.exports = findTheOldest;

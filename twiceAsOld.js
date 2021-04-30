// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const past = (sonYearsOld * 2) - dadYearsOld;
    if (past >= 0) {
    return past
  } else {
    return -(past)
  }
    }
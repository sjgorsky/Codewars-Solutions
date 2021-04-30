// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


function bmi(weight, height) {
    let bmiFunc = weight / (height**2)
    return bmiFunc <= 18.5 ? "Underweight"
            : bmiFunc <= 25 ? 'Normal'
            : bmiFunc <= 30 ? 'Overweight'
            : "Obese"
  }
//Write function bmi that calculates body mass index (bmi = weight / height2).

let bmiScore = weight/ height **2;
    if(bmiScore <= 18.5) {
        return "Underweight"
    }
    else if(bmiScore <= 25) {
        return "Normal"
    }
    else if(bmiScore <= 30) {
        return "Overweight"
    }
    
    else if(bmiScore > 30) {
        return "Obese"
    }
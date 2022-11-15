let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

//window.prompt(weeklyExpenseQuestions[0])

//let answer = window.prompt(weeklyExpenseQuestions[0])
//console.log(answer)

//let stringAnswer = window.prompt(weeklyExpenseQuestions[0])
//let numberAnswer = parseFloat(stringAnswer)
//console.log(numberAnswer)

//let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
//console.log(answer)

//let answer = parseFloat(window.prompt(weeklyExpenseQuestions[0]))
//weeklyExpenses = weeklyExpenses + answer

//for(let i = 0; i < weeklyExpenseQuestions.length; i++){
//    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
//    weeklyExpenses = weeklyExpenses + answer
//}

//for(let i = 0; i < monthlyExpenseQuestions.length; i++){
//    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
//    monthlyExpenses = monthlyExpenses + answer
//}

//for(let i = 0; i < annualExpenseQuestions.length; i++){
//    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
//    annualExpenses = annualExpenses + answer
//}


//parseFloat is to count numbers which are not integers, for example 1.5 and etc. but not to remove the tsrig portion of teh word



for(let i = weeklyExpenseQuestions.length; i > 0; i--){
    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[i]))
    weeklyExpenses = weeklyExpenses + answer
}

for(let i = weeklyExpenseQuestions.length; i > 0; i--){
    let answer = parseFloat(window.prompt(monthlyExpenseQuestions[i]))
    monthlyExpenses = monthlyExpenses + answer
}

for(let i = weeklyExpenseQuestions.length; i > 0; i--){
    let answer = parseFloat(window.prompt(annualExpenseQuestions[i]))
    annualExpenses = annualExpenses + answer
}

//window.prompt(weeklyExpenseQuestions[0])

//let n = 0;
//
//while (n < 1){
//    let answer = parseFloat(window.prompt(weeklyExpenseQuestions[n]))
//    weeklyExpenses = weeklyExpenses + answer
//    n++
//}
const questions = [
    {
        'que':'Which of the following language is MarkUp language',
        'a':'HTML language',
        'b':'CSS language',
        'c':'JS language',
        'd':'All',
        'correct':'a'
    },
    {
        'que':'What does CSS stands for?',
        'a':'styling language',
        'b':'Cascading Style Sheet',
        'c':'functional language',
        'd':'none of above',
        'correct':'b'
    },
    {
        'que':'What year was Javascript launched?',
        'a':'1996',
        'b':'1995',
        'c':'1994',
        'd':'1998',
        'correct':'b'
    },
    {
        'que':'Inside which HTML element do we put the JavaScript?',
        'a':'script',
        'b':'js',
        'c':'javascript',
        'd':'none of above',
        'correct':'a'
    },
    {
        'que':'Where is the correct place to insert a JavaScript?',
        'a':'head',
        'b':'body',
        'c':'both',
        'd':'title',
        'correct':'b'
    }
];

let index = 0;
let total = questions.length;
let right =0
let wrong =0
let questionBox = document.getElementById('quesBox');
let optionsInput = document.querySelectorAll('.options')

// yeah function next questions ko load\add karnay main help karay ga
let loadQuestion =() => {
    if(index === total){
        return endQuiz();
    }
    reset();
const data = questions[index]
// console.log(data);
questionBox.innerHTML = `${index+1}) ${data.que}`
// yahan saray options ko get kia hai
optionsInput[0].nextElementSibling.innerHTML = data.a
optionsInput[1].nextElementSibling.innerHTML = data.b
optionsInput[2].nextElementSibling.innerHTML = data.c
optionsInput[3].nextElementSibling.innerHTML = data.d
}

const submitQuiz = ()=>{
    let answer = getanswer()
    const data = questions[index]
    console.log(answer, data.correct);
    if(answer == data.correct){
        right++
    }else{
        wrong++
    }
    index++;
    loadQuestion()
    return;
}

// yahan say hamain answer milay ga ,b,c,d
let getanswer = ()=>{
    let answer;
    optionsInput.forEach((input)=>{
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

// yeah reset karay ga options ko warna next question main bhi check hokar ayay ga option
let reset = ()=>{
    optionsInput.forEach((input)=>{
        input.checked = false;
    })
}

// yeah quuiz ko end karnay kay liay help karay ga
let endQuiz = ()=>{
    document.querySelector('.box').innerHTML =`
    <h3 style="margin: 20px;font-size: 30px;color:blue">ThankYou for submitting the Quiz</h3>
    <h3 style="margin: 20px;font-size: 25px;">Total Questions are ${total}</h3>
    <h3 style="margin: 20px;font-size: 25px; color: rgb(84, 166, 84);">Right Answers are ${right}</h3>
    <h3 style="margin: 20px;font-size: 25px;color: red;">Wrong Answers are ${wrong}</h3>
    
    
    `
}

loadQuestion();























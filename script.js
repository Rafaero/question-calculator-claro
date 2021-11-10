function calc(){
    let questionOne = document.getElementById("one").value
    let questionTwo = document.getElementById("two").value
    let questionThree = document.getElementById("three").value
    let questionFour = document.getElementById("four").value
    let questionFive = document.getElementById("five").value
    let questionSix = document.getElementById("six").value
    let questionSeven = document.getElementById("seven").value
    let questionEight = document.getElementById("eight").value
    let questionNine = document.getElementById("nine").value
    let questionTen = document.getElementById("ten").value
    let questionEleven = document.getElementById("eleven").value

    let oneNumber = parseFloat(questionOne)
    let twoNumber = parseFloat(questionTwo)
    let threeNumber = parseFloat(questionThree)
    let fourNumber = parseFloat(questionFour)
    let fiveNumber = parseFloat(questionFive)
    let sixNumber = parseFloat(questionSix)
    let sevenNumber = parseFloat(questionSeven)
    let eightNumber = parseFloat(questionEight)
    let nineNumber = parseFloat(questionNine)
    let tenNumber = parseFloat(questionTen)
    let elevenNumber = parseFloat(questionEleven)

    let porcetagem = ((oneNumber + twoNumber + threeNumber + fourNumber + fiveNumber + sixNumber + sevenNumber + eightNumber + nineNumber + tenNumber + elevenNumber) / 34.5) * 100;
    let sum = (oneNumber + twoNumber + threeNumber + fourNumber + fiveNumber + sixNumber + sevenNumber + eightNumber + nineNumber + tenNumber + elevenNumber)

    let resultPorcent = (porcetagem.toFixed(2) + " %")

    if(porcetagem >= 0){
        document.getElementById("show-porcent").innerHTML = resultPorcent
    }else{
        document.getElementById("show-porcent").innerHTML = ""
    }

    if(sum >= 0 || sum <= 0){
        document.getElementById("show-sum").innerHTML = sum.toFixed(2)
    }else{
        alert("Preencha todos os campos")
    }
}


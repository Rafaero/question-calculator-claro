function calc(){
    let id = document.getElementById("id").value;
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

            const options = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDEzMjIzNzEsImVtYWlsIjoibHV6LmlyaWFydGVAa2V5cnVzLmNvbSIsImFwcGxpY2F0aW9uIjozMDAxMjYwMDl9fQ.vdpen9-ki7OI5k8uTwgnged5Quq8R1woBLjii6Bd0cVVV7lwFg4ZBw2_3kH_7u2zR7bXZ95a_omGsQA9AYR8BQ',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ query: `mutation{
                    updateCardField(input: {
                        card_id: "${id}"
                        field_id: "porcetagem"
                        new_value: "${resultPorcent}"
                    }){clientMutationId}}`})
            };
        
            fetch('https://api.pipefy.com/graphql', options)
                .then(response => response.json())
                .then(response => console.log(response))
                .catch(err => console.error(err));
        
    }else{
        document.getElementById("show-porcent").innerHTML = ""
    }

    if(sum >= 0 || sum <= 0){
        document.getElementById("show-sum").innerHTML = sum.toFixed(2);

        const options = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyIjp7ImlkIjozMDEzMjIzNzEsImVtYWlsIjoibHV6LmlyaWFydGVAa2V5cnVzLmNvbSIsImFwcGxpY2F0aW9uIjozMDAxMjYwMDl9fQ.vdpen9-ki7OI5k8uTwgnged5Quq8R1woBLjii6Bd0cVVV7lwFg4ZBw2_3kH_7u2zR7bXZ95a_omGsQA9AYR8BQ',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: `mutation{
                updateCardField(input: {
                    card_id: "${id}"
                    field_id: "2_1_nota_final"
                    new_value: "${sum}"
                }){clientMutationId}}`})
        };
    
        fetch('https://api.pipefy.com/graphql', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    
    }else{
        alert("Preencha todos os campos")
    }
}


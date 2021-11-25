function calc(){
    let id = document.getElementById("id").value;

    let questionOneNumber = parseFloat(document.getElementById("one").value);
    let questionTwoNumber = parseFloat(document.getElementById("two").value);
    let questionThreeNumber = parseFloat(document.getElementById("three").value);
    let questionFourNumber = parseFloat(document.getElementById("four").value);
    let questionFiveNumer = parseFloat(document.getElementById("five").value);
    let questionSixNumber = parseFloat(document.getElementById("six").value);
    let questionSevenNumber = parseFloat(document.getElementById("seven").value);
    let questionEightNumber = parseFloat(document.getElementById("eight").value);
    let questionNineNumber = parseFloat(document.getElementById("nine").value);
    let questionTenNumber = parseFloat(document.getElementById("ten").value);
    let questionElevenNumber = parseFloat(document.getElementById("eleven").value);

    let questionOneText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionTwoText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionThreeText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionFourText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionFiveText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionSixText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionSevenText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionEightText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionNineText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionTenText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;
    let questionElevenText = document.getElementById('one').options[document.getElementById('one').selectedIndex].text;


    let percent = ((questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumer + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber) / 34.5) * 100;
    let resultPercent = (percent.toFixed(2) + " %")

    let sum = (questionOneNumber + questionTwoNumber + questionThreeNumber + questionFourNumber + questionFiveNumer + questionSixNumber + questionSevenNumber + questionEightNumber + questionNineNumber + questionTenNumber + questionElevenNumber);


    if(percent >= 0){
        document.getElementById("show-porcent").innerHTML = resultPercent

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
                        new_value: "${resultPercent}"
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


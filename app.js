function generateNumber(){

    let amountNumbers = parseInt(document.getElementById("amount").value);
    let fromNumber = parseInt(document.getElementById("from").value);
    let toNumber = parseInt(document.getElementById("to").value);
    let drawNumbers = [];

    if(checkNumbers(amountNumbers,fromNumber,toNumber)){
        for(let a = 0; a < amountNumbers; a++){
            let sortedNumber = getNumbers(fromNumber, toNumber);
    
            while(drawNumbers.includes(sortedNumber)){
                sortedNumber = getNumbers(fromNumber, toNumber);
            }
    
            drawNumbers.push(sortedNumber);
        }
        
        addValue(drawNumbers);
    }else{
        alert("Você digitou dados inválidos!");
    }
}

function getNumbers(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addValue(drawNumbers){
    let sortNumber = document.getElementById("sort-number");
    sortNumber.innerHTML = drawNumbers;
}

function restart(){
    drawNumbers = [];
    document.getElementById("amount").value = " ";
    document.getElementById("from").value = " ";
    document.getElementById("to").value = " ";
    document.getElementById("sort-number").innerHTML = " ";
    alterStatus();
}

function checkNumbers(amount, min, max){
    if(min >= max){
        return false;
    }
    else if(amount > (max - min + 1)){
        return false;
    }
    else{
        return true;
    }
}

function checkError(){

}

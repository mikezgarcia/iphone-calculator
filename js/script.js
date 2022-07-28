let firstsetNum;
let secondsetNum;
let resultNum;
let operatorAction;
let calResult = document.querySelector('#calResult');
   

console.log(calResult);

console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);

function clickedNum(numValue){
   if(operatorAction === undefined && firstsetNum === undefined){
        firstsetNum = String(numValue);
        console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);
        calResult.innerHTML = firstsetNum;
        


   }else if(operatorAction === undefined && firstsetNum != undefined){

        firstsetNum = String(firstsetNum) + String(numValue);
        console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);
        calResult.innerHTML = firstsetNum;

   }else if(operatorAction != undefined && secondsetNum === undefined){

        secondsetNum = String(numValue);
        console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);
        calResult.innerHTML = secondsetNum;

   }else if(operatorAction != undefined && secondsetNum != undefined){

        secondsetNum = String(secondsetNum) + String(numValue);
        console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);
        calResult.innerHTML = secondsetNum;

   }  
   else{
        console.log("error");
   }
}

function operationClicked(operatorValue){
    if(operatorValue === 'clear'){
        firstsetNum = undefined;
        secondsetNum = undefined;
        operatorAction = undefined;
        console.log(firstsetNum + " " + secondsetNum + " " +operatorAction);
        calResult.innerHTML = String('');
    }
    else if(operatorValue === 'add'){
        operatorAction = 'add';
            if(firstsetNum != undefined && secondsetNum === undefined){
                console.log(firstsetNum + " + ");
                calResult.innerHTML = String('+');
               
            }else{
                operatorAction === undefined;
            }
    }
    else if(operatorValue === 'minus'){
        operatorAction = 'minus';
            if(firstsetNum != undefined && secondsetNum === undefined){
                console.log(firstsetNum + " - ");
                calResult.innerHTML = String('-');
            }else{
                operatorAction === undefined;
            }
    }
    else if(operatorValue === 'multiply'){
        operatorAction = 'multiply';
            if(firstsetNum != undefined && secondsetNum === undefined){
                console.log(firstsetNum + " x ");
                calResult.innerHTML = String('x');
            }else{
                operatorAction === undefined;
            }
    }
    else if(operatorValue === 'divide'){
        operatorAction = 'divide';
            if(firstsetNum != undefined && secondsetNum === undefined){
                console.log(firstsetNum + " ÷ ");
                calResult.innerHTML = String('÷');
            }else{
                operatorAction === undefined;
            }
    }
    
    
    
    else if(operatorValue === 'equal'){
        if(operatorAction === 'add'){
            console.log(operatorAction);
            if(firstsetNum != undefined && secondsetNum != undefined){
                resultNum = Number(firstsetNum) + Number(secondsetNum);
                console.log(resultNum);
                calResult.innerHTML = String(resultNum);
                firstsetNum = undefined;
                secondsetNum = undefined;
                operatorAction = undefined;
            }else{
                operatorAction === undefined;
            }
        }
        else if(operatorAction === 'minus'){
            console.log(operatorAction);
            if(firstsetNum != undefined && secondsetNum != undefined){
                resultNum = Number(firstsetNum) - Number(secondsetNum);
                console.log(resultNum);
                calResult.innerHTML = String(resultNum);
                firstsetNum = undefined;
                secondsetNum = undefined;
                operatorAction = undefined;
            }else{
                operatorAction === undefined;
            }
        }
        else if(operatorAction === 'multiply'){
            console.log(operatorAction);
            if(firstsetNum != undefined && secondsetNum != undefined){
                resultNum = Number(firstsetNum) * Number(secondsetNum);
                console.log(resultNum);
                calResult.innerHTML = String(resultNum);
                firstsetNum = undefined;
                secondsetNum = undefined;
                operatorAction = undefined;
            }else{
                operatorAction === undefined;
            }
        }
        else if(operatorAction === 'divide'){
            console.log(operatorAction);
            if(firstsetNum != undefined && secondsetNum != undefined){
                resultNum = Number(firstsetNum) / Number(secondsetNum);
                console.log(resultNum);
                calResult.innerHTML = String(resultNum);
                firstsetNum = undefined;
                secondsetNum = undefined;
                operatorAction = undefined;
            }else{
                operatorAction === undefined;
            }
        } 
    }
   
}
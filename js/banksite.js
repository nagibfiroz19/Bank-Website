function getInputValue(inputId) {
        // handle deposit/withdraw Button 
        const inputField = document.getElementById(inputId);
        const inputAmountText = inputField.value;
        const amountValue = parseFloat(inputAmountText);
        inputField.value = '';
        return amountValue;
}
        // Update deposit & withdraw part
function addWithPrevious(totalFieldId, amount) {
        const totalElement = document.getElementById(totalFieldId);
        const totalText = totalElement.innerText;
        const previousTotal = parseFloat(totalText);
        totalElement.innerText = previousTotal + amount;

}
         // Update balance part

function updateBalance(amount,isAdd){
        const balanceTotal = document.getElementById('balanceMoney');
        const balanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(balanceText);
        if(isAdd == true){
                balanceTotal.innerText = previousBalanceAmount + amount;
        }
        else{
                balanceTotal.innerText = previousBalanceAmount - amount;
        }
               
}

        // Event handling for deposit Button 

document.getElementById('deposit-button').addEventListener('click', function () {

        const newDepositAmount = getInputValue('deposit-input');
        if( newDepositAmount>0){
                addWithPrevious('depositMoney', newDepositAmount);      
                updateBalance(newDepositAmount,true);  
        }
});
        // Event handling for withdraw Button 

document.getElementById('withdraw-button').addEventListener('click', function () {

        const newWithdrawAmount = getInputValue('withdraw-input');
        if(newWithdrawAmount>0){
                addWithPrevious('withdrawMoney',newWithdrawAmount);
                updateBalance(newWithdrawAmount,false);
        }
       

}) 

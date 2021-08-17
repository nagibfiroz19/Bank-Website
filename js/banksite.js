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

function updateBalance(newDepositAmount,isAdd){
        const balanceTotal = document.getElementById('balanceMoney');
        const balanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(balanceText);
        if(isAdd == true){
                balanceTotal.innerText = previousBalanceAmount + newDepositAmount;
        }
        else{
                balanceTotal.innerText = previousBalanceAmount - newWithdrawAmount;
        }
               
}

        // Event handling for deposit Button 

document.getElementById('deposit-button').addEventListener('click', function () {

        const newDepositAmount = getInputValue('deposit-input');
        addWithPrevious('depositMoney', newDepositAmount);      
        updateBalance(newDepositAmount,true);


});
        // Event handling for withdraw Button 

document.getElementById('withdraw-button').addEventListener('click', function () {

        const newWithdrawAmount = getInputValue('withdraw-input');
        addWithPrevious('withdrawMoney', newWithdrawAmount);
        updateBalance(newWithdrawAmount,false);

}) 

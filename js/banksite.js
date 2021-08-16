function getInputValue(inputId) {
        // handle deposit Button 
        const inputField = document.getElementById(inputId);
        const inputAmountText = inputField.value;
        const amountValue = parseFloat(inputAmountText);
        inputField.value = '';
        return amountValue;
}

function addWithPrevious(totalFieldId, amount) {
        const depositMoney = document.getElementById(totalFieldId);
        const previousDepositText = depositMoney.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        depositMoney.innerText = previousDepositAmount + amount;

}

document.getElementById('deposit-button').addEventListener('click', function () {

        const newDepositAmount = getInputValue('deposit-input');
        addWithPrevious('depositMoney', newDepositAmount);
        const balanceTotal = document.getElementById('balanceMoney');
        const balanceText = balanceTotal.innerText;
        const previousBalanceAmount = parseFloat(balanceText);

        const newBalanceTotal = previousBalanceAmount + newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;


});
 
//  Update Withdraw Total 

document.getElementById('withdraw-button').addEventListener('click', function () {

 const newWithdrawAmount = getInputValue('withdraw-input');
        addWithPrevious('withdrawMoney', newWithdrawAmount);
        // update Balance total

        const balanceMoney = document.getElementById('balanceMoney');
        const balanceMoneyText = balanceMoney.innerText;
        const balanceMoneyTotal = parseFloat(balanceMoneyText);

        const newBalanceTotalAmount = balanceMoneyTotal - newWithdrawAmount;

        balanceMoney.innerText = newBalanceTotalAmount;



 

}) 

document.getElementById('deposit-button').addEventListener('click',function(){
        const depositField=document.getElementById('deposit-input');
        // Update Deposit total 
        const newDepositText=depositField.value;
        const newDepositAmount=parseFloat(newDepositText);
        const depositMoney=document.getElementById('depositMoney');
        const previousDepositText=depositMoney.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepositTotal =previousDepositAmount+newDepositAmount;

        console.log(newDepositTotal);
        depositMoney.innerText=newDepositTotal;

        // update balace total 

        const balanceTotal=document.getElementById('balanceMoney');
        const balanceText=balanceTotal.innerText;
        const previousBalanceAmount=parseFloat(balanceText);

        const newBalanceTotal= previousBalanceAmount + newDepositAmount;
        balanceTotal.innerText=newBalanceTotal;

        depositField.value='';
});
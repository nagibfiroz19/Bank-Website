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
        //const newBalanceTotal = newBalanceTotal.toFixed(2)
        balanceTotal.innerText=newBalanceTotal;

        depositField.value='';
});

        //  Update Withdraw Total 

        document.getElementById('withdraw-button').addEventListener('click',function(){
                const withdrawField= document.getElementById('withdraw-input');
                const withdrawFieldText=withdrawField.value;
                const newWithdrawAmount=parseFloat(withdrawFieldText);

                const withdrawMoney=document.getElementById('withdrawMoney');
                const previousWithdrawText=withdrawMoney.innerText;
                const previousWithdrawAmount=parseFloat(previousWithdrawText);

                newWithdrawTotal= previousWithdrawAmount+newWithdrawAmount;

                withdrawMoney.innerText=newWithdrawTotal;

                // update Balance total

                const balanceMoney=document.getElementById('balanceMoney');
                const balanceMoneyText=balanceMoney.innerText;
                const balanceMoneyTotal=parseFloat(balanceMoneyText);

                const newBalanceTotalAmount=balanceMoneyTotal - newWithdrawAmount;

                balanceMoney.innerText=newBalanceTotalAmount;


                withdrawField.value='';


        })
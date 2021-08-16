        function getInputValue(inputId){
                // handle deposit Button 
        const inputField=document.getElementById(inputId);
        const inputAmountText=inputField.value;
        const amountValue=parseFloat(inputAmountText);
        inputField.value='';
        return amountValue;
        }
        function addWithPrevious(transAmount){
                const depositMoney=document.getElementById(transAmount);
                const previousDepositText=depositMoney.innerText;
                const taka = parseFloat(previousDepositText);  
                return  taka;
        }

        document.getElementById('deposit-button').addEventListener('click',function(){

        const newDepositAmount=getInputValue('deposit-input');
        previousDepositAmount= addWithPrevious('depositMoney' );
        const newDepositTotal =previousDepositAmount+newDepositAmount;
        depositMoney.innerText=newDepositTotal;

        // update balance total 

        const balanceTotal=document.getElementById('balanceMoney');
        const balanceText=balanceTotal.innerText;
        const previousBalanceAmount=parseFloat(balanceText);

        const newBalanceTotal= previousBalanceAmount + newDepositAmount;
        balanceTotal.innerText=newBalanceTotal;


        });

        //  Update Withdraw Total 

        document.getElementById('withdraw-button').addEventListener('click',function(){
        
                const newWithdrawAmount=getInputValue('withdraw-input');
                const previousWithdrawAmount =addWithPrevious('withdrawMoney');
                newWithdrawTotal= previousWithdrawAmount+newWithdrawAmount;

                withdrawMoney.innerText=newWithdrawTotal;

                // update Balance total

                const balanceMoney=document.getElementById('balanceMoney');
                const balanceMoneyText=balanceMoney.innerText;
                const balanceMoneyTotal=parseFloat(balanceMoneyText);

                const newBalanceTotalAmount=balanceMoneyTotal - newWithdrawAmount;

                balanceMoney.innerText=newBalanceTotalAmount;


        


        })
document.getElementById('deposit-button').addEventListener('click',function(){
        const depositField=document.getElementById('deposit-input');
        const newDepositText=depositField.value;
        const newDepositAmount=parseFloat(newDepositText);
        const depositMoney=document.getElementById('depositMoney');
        const previousDepositText=depositMoney.innerText;
        const previousDepositAmount = parseFloat(previousDepositText);
        const newDepositTotal =previousDepositAmount+newDepositAmount;

        console.log(newDepositTotal);
        depositMoney.innerText=newDepositTotal;



        depositField.value='';
});
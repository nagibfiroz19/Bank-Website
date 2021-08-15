document.getElementById('deposit-button').addEventListener('click',function(){
        const depositField=document.getElementById('deposit-input');
        const depositAmount=depositField.value;

        const depositMoney=document.getElementById('depositMoney');
        depositMoney.innerText=depositAmount;
        depositField.value='';
});
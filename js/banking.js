// convert deposit and withdraw amount
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    // clear deposit input field
    inputField.value = '';
    return inputAmount;
};
    // get and update current deposit and withdraw
function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalFieldText = totalField.innerText;
    const previousTotal = parseFloat(totalFieldText);
    const currentTotalAmount = amount + previousTotal;
    totalField.innerText = currentTotalAmount;
};
function getCurrentBalance(){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previoustotalAmount = parseFloat(totalBalanceText);
    return previoustotalAmount;
};
// update function
function updateBalance(amount, isAdd){
    const totalBalance = document.getElementById('balance-total');
    const previoustotalAmount = getCurrentBalance();
    if(isAdd == true){
        const totalNewBalance = previoustotalAmount + amount;
        totalBalance.innerText = totalNewBalance;
    }
    else{
        const totalNewBalance = previoustotalAmount - amount;
        totalBalance.innerText = totalNewBalance;
    }
};
// deposit function caller
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
});
// withdraw function caller
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = getInputValue('withdraw-input');
    const curretBalance = getCurrentBalance();
    if( withdrawAmount > 0 && withdrawAmount <= curretBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    };
    if( withdrawAmount > curretBalance){
        console.log('You can not withdraw more than you have in your account.')
    }
}); 
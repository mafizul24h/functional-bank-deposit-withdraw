document.getElementById('withdraw-btn').addEventListener('click', function() {
    const newWithdraw = getInputFiledValueById('user-withdraw');
    if(newWithdraw < 1 ) {
        alert('Please provide positive value');
        return;
    }else if(isNaN(newWithdraw)) {
        alert('Please provide valid number');
        return;
    }
    console.log(newWithdraw);

    const previousWithdraw = getElementValueByID('total-withdraw');
    // console.log(previousWithdraw);

    const previousBalance = getElementValueByID('total-balance');
    // console.log(previousBalance);

    if(previousBalance < newWithdraw) {
        alert('Insufficient Balance');
        return;
    }

    const totalWithdrawAmount = previousWithdraw + newWithdraw;
    const totalWithdraw = totalWithdrawAmount.toFixed(2);

    const totalBlanceAmount = previousBalance - newWithdraw;
    const totalBalance = totalBlanceAmount.toFixed(2);

    // const totalWidhdrawElement = document.getElementById('total-withdraw');
    // totalWidhdrawElement.innerText = totalWithdraw;

    setElementValue('total-withdraw', totalWithdraw);

    // const totalBalanceElement = document.getElementById('total-balance');
    // totalBalanceElement.innerText = totalBalance;

    setElementValue('total-balance', totalBalance);
})
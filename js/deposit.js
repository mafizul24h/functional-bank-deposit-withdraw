document.getElementById('deposit-btn').addEventListener('click', function () {
    const newDeposit = getInputFiledValueById('user-deposit');
    if (newDeposit < 1) {
        alert('Please provide positive number');
        return;
    } else if (isNaN(newDeposit)) {
        alert('Please provide valid number');
        return;
    }
    // console.log(newDeposit);

    const previousDeposit = getElementValueByID('total-deposit');
    // console.log(previousDeposit);
    const previousBalance = getElementValueByID('total-balance');

    const depositAmout = previousDeposit + newDeposit;
    const totalDeposit = depositAmout.toFixed(2);
    // console.log(totalDeposit);

    const balanceAmount = previousBalance + newDeposit;
    const totalBalance = balanceAmount.toFixed(2);

    // const depositElement = document.getElementById('total-deposit');
    // depositElement.innerText = totalDeposit;

    setElementValue('total-deposit', totalBalance);

    const blanceElement = document.getElementById('total-balance');
    blanceElement.innerText = totalDeposit;

    setElementValue('total-balance', totalBalance);
})
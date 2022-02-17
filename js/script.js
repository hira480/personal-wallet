document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const income = parseInt(incomeField.value);
    const foodField = document.getElementById('food-expense');
    const food = parseInt(foodField.value);
    const rentField = document.getElementById('rent-expense');
    const rent = parseInt(rentField.value);
    const clothsField = document.getElementById('cloth-expense');
    const cloths = parseInt(clothsField.value);

    // error message
    // const inputField = document.getElementsByClassName('input');
    // const errorMessae = document.getElementById('wrong-input');
    // const notice = errorMessae.innerText;
    // const input = inputField.value;
    // if (input < 0 || input != 'number') {
    //     errorMessae.style.display = 'block';
    //     input = '';
    // }
    // else {
    //     errorMessae.style.display = 'none';
    // }

    // total expenses
    const expenses = food + rent + cloths;
    const totalExpenseText = document.getElementById('total-expenses');
    const totalExpenses = totalExpenseText.innerText;
    totalExpenseText.innerText = expenses;

    // balence
    const balanceTotal = income - expenses;
    const balanceText = document.getElementById('balence');
    const balanceSum = balanceText.innerText;
    balanceText.innerText = balanceTotal;

    document.getElementById('saving-btn').addEventListener('click', function () {
        // percentage calculate
        const percentageField = document.getElementById('saving-percentage');
        const percentageAmount = parseInt(percentageField.value);
        const percentage = (balanceTotal * percentageAmount) / 100;
        const savingAmountText = document.getElementById('saving-amount');
        const savingAmount = savingAmountText.innerText;
        savingAmountText.innerText = percentage;

        // remaining balance
        const remainingBalance = balanceTotal - percentage;
        const remainingBalanceText = document.getElementById('remaining-balance');
        const finalAmount = remainingBalanceText.innerText;
        remainingBalanceText.innerText = remainingBalance;
    });
});

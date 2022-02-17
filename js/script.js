document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const income = parseInt(incomeField.value);
    const foodField = document.getElementById('food-expense');
    const food = parseInt(foodField.value);
    const rentField = document.getElementById('rent-expense');
    const rent = parseInt(rentField.value);
    const clothsField = document.getElementById('cloth-expense');
    const cloths = parseInt(clothsField.value);
    const expenses = food + rent + cloths;

    const totalExpenseText = document.getElementById('total-expenses');
    const totalExpenses = totalExpenseText.innerText;
    totalExpenseText.innerText = expenses;

    const balanceTotal = income - expenses;

    const balanceText = document.getElementById('balence');
    const balanceSum = balanceText.innerText;
    balanceText.innerText = balanceTotal;

    // console.log(percentageAmount);
    document.getElementById('saving-btn').addEventListener('click', function () {
        const percentageField = document.getElementById('saving-percentage');
        const percentageAmount = parseInt(percentageField.value);

        const percentage = (balanceTotal * percentageAmount) / 100;

        const savingAmountText = document.getElementById('saving-amount');
        const savingAmount = savingAmountText.innerText;
        savingAmountText.innerText = percentage;

        const remainingBalance = balanceTotal - percentage;

        const remainingBalanceText = document.getElementById('remaining-balance');
        const finalAmount = remainingBalanceText.innerText;
        remainingBalanceText.innerText = remainingBalance;
        // console.log(remainingBalance);
    });
});

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


    // console.log(balanceTotal);

})
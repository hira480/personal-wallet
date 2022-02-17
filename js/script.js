document.getElementById('calculate-btn').addEventListener('click', function () {
    const income = document.getElementById('income-field');
    const income1 = income.value
    const food = document.getElementById('food-expense');
    const food1 = food.value;
    const rent = document.getElementById('rent-expense');
    const rent1 = rent.value;
    const clothes = document.getElementById('cloth-expense');
    const clothes1 = clothes.value;
    const totalExpenses = food1 + rent1 + clothes1;
    const newExpense = document.getElementById('total-expenses').innerText;
    newExpense.innerText = totalExpenses;

    const balance = income - totalExpenses;
    const newBalance = document.getElementById('balence').innerText;
    newBalance.innerText = balance;
    return totalExpenses;
})

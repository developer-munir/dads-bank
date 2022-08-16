// step 1
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // step 2
  const withdrawField = document.getElementById("withdrow-field");
  const withdrawAmount = parseFloat(withdrawField.value);

  // step 3
  const previousAmountOfWithdraw = document.getElementById("previous-withdraw");
  const totalAmountOfWithdraw = parseFloat(previousAmountOfWithdraw.innerText);

  // step 5
  const totalBalance = document.getElementById("total-balance");
  const getWithdraw = parseFloat(totalBalance.innerText);

  //step 7
  withdrawField.value = "";

  if (withdrawAmount > getWithdraw) {
    alert("baper bank paiso atow tk koitte ashe");
    return;
  }

  // step 4
  const totalAmountWithdraw = totalAmountOfWithdraw + withdrawAmount;
  previousAmountOfWithdraw.innerText = totalAmountWithdraw;

  //step 6
  const newBalance = getWithdraw - withdrawAmount;
  totalBalance.innerText = newBalance;
});

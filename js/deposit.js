// step 1
document.getElementById("deposit-btn").addEventListener("click", function () {
  // step 2
  const depositField = document.getElementById("deposit-field");
  const depositAmount = parseFloat(depositField.value);

  // step 3
  const previousAmountOfDeposit = document.getElementById("previous-amount");
  const totalAmountOfDeposit = parseFloat(previousAmountOfDeposit.innerText);

  // step 4
  const totalAmountDeposit = totalAmountOfDeposit + depositAmount;
  previousAmountOfDeposit.innerText = totalAmountDeposit;

  // step 5
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceSum = parseFloat(totalBalance.innerText);

  // step 6
  totalBalance.innerHTML = totalBalanceSum + depositAmount;

  // step 7
  depositField.value = "";
});

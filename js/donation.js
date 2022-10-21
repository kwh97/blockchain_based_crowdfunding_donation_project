
/** 암호화폐 송금을 통한 기부 기능 구현 */
$(document).ready(function () {
  console.log("ready!");

  if (typeof web3 !== "undefined") {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(
      new Web3.providers.HttpProvider("http://localhost:7545")
    );
  }
  web3 = new Web3(
    new Web3.providers.HttpProvider("http://localhost:7545")
  );
  /* Get Node Info */
  web3.eth.getNodeInfo(function (error, result) {
    if (error) {
      console.log("error", error);
    } else {
      console.log("result", result);
      $("#NodeInfo").val(result);
    }
  });

  /*Get Balance */
  web3.eth.getAccounts(function (error, accounts) {
    if (error) {
      console.log(error);
    }
    $("#Account").val(accounts[0]);
    web3.eth.getBalance(accounts[0]).then(function (result) {
      console.log("Balance : ", web3.utils.fromWei(result, "ether"));
      $("#Balance").val(web3.utils.fromWei(result, "ether"));
    });
  });

  $("#checkBalance").click(function () {
    var _account = $("#Account").val();
    web3.eth.getBalance(_account).then(function (result) {
      console.log("Balance : ", web3.utils.fromWei(result, "ether"));
      $("#Balance").val(web3.utils.fromWei(result, "ether"));
    });
  });

  /* Transfer */
  $("#Transfer").click(function () {
    $("#Tx").text("");
    var _from = $("#From").val();
    var _to = $("#To").val();
    var _Amount = $("#Amount").val();
    var txnObject = {
      from: _from,
      to: _to,
      value: web3.utils.toWei(_Amount, "ether"),
    };
    web3.eth.sendTransaction(txnObject, function (error, result) {
      if (error) {
        console.log("Transaction error", error);
      } else {
        var txn_hash = result;
        $("#Tx").text(txn_hash);
        handleHashChange();
      }
    });
  });
});


/* 기타 기능 구현 */

/* modal contents */
const button = document.querySelector("#receipt");
const modal = document.querySelector(".modal");
const body = document.querySelector("body");

/* transfer contents */
const from = document.querySelector("#From");
const to = document.querySelector("#To");
const amount = document.querySelector("#Amount");

/* receipt contents */
const hash = document.querySelector("#Tx");
const checkHash = document.querySelector("#checkHash");
const myAccount = document.querySelector("#myAccount");
const receiverAccount = document.querySelector("#receiverAccount");
const senderAmount = document.querySelector("#senderAmount");


/** about printing receipt */
function handleButtonClick() {
  modal.classList.toggle("show");
  if (modal.classList.contains("show")) {
    body.style.overflow = "hidden";
  }
  if (hash.innerText !== "") {
    checkHash.innerText = '✔ 정상적으로 송금이 완료되었습니다.';
    myAccount.innerText = `✔ 계좌 번호: ${from.value}`;
    receiverAccount.innerText = `✔ 입금 계좌: ${to.value}`;
    senderAmount.innerText = `✔ 송금 금액: ${amount.value} ETH`;
  }
}

/** modal setting */
function handleModalClick(e) {
  if(e.target === modal) {
    modal.classList.toggle("show");
    if(!modal.classList.contains("show")) {
      body.style.overflow = "auto";
    }
  }
}

button.addEventListener("click", handleButtonClick);
modal.addEventListener("click", handleModalClick);

// transfer section
const transferButton = document.querySelector("#Transfer");

// donation page progress
const progress = document.querySelector("#progress");
const object = document.querySelector("#object");

//change progress(14 - 51 line)
let value = progress.value;


/** localStorage를 이용하여 펀딩 진행률을 컨트롤 */ 

/** detect Hash create */
function handleHashChange() {
  value = Number(progress.value + Number(amount.value));
  localStorage.setItem("value", value);
  handleProgress();
}

/** update progress bar and progress object */
function handleProgress() {
  const value = localStorage.getItem("value");
  progress.value = value;

  let newValue = (Number(value) / 10) * 100;
  object.innerText = `${newValue}%`;

  if(newValue >= 100) {
    transferButton.innerText = "📌펀딩이 종료되었습니다.";
    transferButton.disabled = true;
    object.innerText += '   ➜ 펀딩이 종료되었습니다.';
    receipt.style.marginLeft = '100px';
  }
}


const savedValue = localStorage.getItem("value");

/* 새로고침해도 초기화되지 않도록 함*/
if(savedValue !== null) {
  handleProgress();
} 




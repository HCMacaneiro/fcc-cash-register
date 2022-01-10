function checkCashRegister(price, cash, cid) {
  let change = (cash - price) * 100;
  let totalCashInDrawer = 0;
  let changeArr = [];
  for (let i = 0; i < cid.length; i++) {
    totalCashInDrawer += cid[i][1] * 100;
  }
  if (change > (totalCashInDrawer)) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else if (change === totalCashInDrawer) {
    return {status: "CLOSED", change: cid};
  } else if (change < totalCashInDrawer) {
    for (let i = cid.length - 1; i >= 0; i--) {
      let counter = 0;
      if (cid[i][0] === "ONE HUNDRED" && (cid[i][1] * 100) >= 10000 && change >= 10000) {
        counter = cid[i][1] / 100;
        while (counter > 0 && change >= 10000) {
          change -= 10000;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["ONE HUNDRED", cid[i][1] - counter]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["ONE HUNDRED", cid[i][1]]);
        }
      } else if (cid[i][0] === "TWENTY" && cid[i][1] >= 20 && change >= 2000) {
        counter = cid[i][1] / 20;
        while (counter > 0 && change >= 2000) {
          change -= 2000;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["TWENTY", cid[i][1] - counter * 20]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["TWENTY", cid[i][1]]);
      } 
    } else if (cid[i][0] === "TEN" && cid[i][1] >= 10 && change >= 1000) {
        counter = cid[i][1] / 10;
        while (counter > 0 && change >= 1000) {
          change -= 1000;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["TEN", cid[i][1] - counter * 10]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["TEN", cid[i][1]]);
        }   
      } else if (cid[i][0] === "FIVE" && cid[i][1] >= 5 && change >= 500) {
        counter = cid[i][1] / 5;
        while (counter > 0 && change >= 500) {
          change -= 500;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["FIVE", cid[i][1] - counter * 5]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["FIVE", cid[i][1]]);
        }
      } else if (cid[i][0] === "ONE" && cid[i][1] >= 1 && change >= 100) {
        counter = cid[i][1];
        while (counter > 0 && change >= 100) {
          change -= 100;
          counter--;
        }
        if (change == 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["ONE", cid[i][1] - counter * 1]);
        } else if (change > 0 && counter === 0 || change == 0 && counter === 0) {
          changeArr.push(["ONE", cid[i][1]]);
        }
      } else if (cid[i][0] === "QUARTER" && cid[i][1] >= 0.25 && change >= 25) {
        counter = cid[i][1] / 0.25
        while (counter > 0 && change >= 25) {
          change -= 25;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["QUARTER", cid[i][1] - counter * 0.25]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["QUARTER", cid[i][1]]);
        }
      } else if (cid[i][0] === "DIME" && cid[i][1] >= 0.1 && change >= 10) {
        counter = cid[i][1] / 0.1;
        while (counter > 0 && change >= 10) {
          change -= 10;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["DIME", +(cid[i][1] - counter * 0.1).toFixed(2)]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["DIME", cid[i][1]]);
        }
      } else if (cid[i][0] === "NICKEL" && cid[i][1] >= 0.05 && change >= 5) {
        counter = cid[i][1] / 0.05;
        while (counter > 0 && change >= 5) {
          change -= 5;
          counter--;
        }
        if (change === 0 && counter > 0 || change > 0 && counter > 0) {
          changeArr.push(["NICKEL", +(cid[i][1] - counter * 0.05).toFixed(2)]);
        } else if (change > 0 && counter === 0 || change === 0 && counter === 0) {
          changeArr.push(["NICKEL", cid[i][1]]);
        }
      } else if (cid[i][0] === "PENNY" && cid[i][1] >= 0.01 && change >= 1) {
        counter = cid[i][1] / 0.01;
        while (counter > 0 && change >= 1) {
          change -= 1;
          counter--;
        }
        if (change === 0 && counter > 0) {
          changeArr.push(["PENNY", +(cid[i][1] - counter * 0.01).toFixed(2)]);
        }
      }
      if (change === 0) {
        return {status: "OPEN", change: changeArr};
      }
      }
      if (change != 0) {
        return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  }
  return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
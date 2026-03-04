const stockprice = [
  { name: "wipro", lastprice: 200, currprice: 210 },
  { name: "Deloitte", lastprice: 250, currprice: 270 },
  { name: "HDFC", lastprice: 200, currprice: 290 }
];

function beststock(companies) {

  let maxProfit = -Infinity;
  let bestCompany = "";

  for (let i = 0; i < companies.length; i++) {

    let profit = companies[i].currprice - companies[i].lastprice;

    if (profit > maxProfit) {
      maxProfit = profit;
      bestCompany = companies[i].name;
    } 
  }

  return bestCompany;
}

console.log("Best Company:", beststock(stockprice));
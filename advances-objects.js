var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSum(sales){
  return sales.reduce(function(a,b) {
    return a + b;
  }, 0);
}

function countTax(sum, rate){
  return sum * rate;
}

function addRate(obj, rates){
  if (rates[obj["province"]]){
    obj["rate"] =  rates[obj["province"]];
  }
}


function calculateSalesTax(salesData, taxRates) {
  salesData.forEach(function(x) {
    x.sum = calculateSum(x.sales)
  })
  salesData.forEach(x => addRate(x,taxRates));
  salesData.forEach(function(x){
    x.tax = countTax(x.sum, x.rate);
  })
  result = {};
  salesData.forEach(function(x){
    if(!result[x.name]){
      result[x.name] = {
        totalSales: x.sum,
        totalTaxes: x.tax
      };
    } else {
      result[x.name]["totalSales"] += x.sum;
      result[x.name]["totalTaxes"] += x.tax;
    }
  })
  console.log(result);
}


var results = calculateSalesTax(companySalesData, salesTaxRates);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
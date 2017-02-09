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

function getRate(province){
  return salesTaxRates[province];
}

function calculateSalesTax(salesData, taxRates) {
  var companies = {};
  salesData.forEach(x => companies[x.name] = {
    totalSales: 0,
    totalTaxes: 0
  });
  salesData.forEach(function(x){
      companies[x.name].totalSales += calculateSum(x.sales),
      companies[x.name].totalTaxes += (getRate(x.province) * calculateSum(x.sales))

    });

  return companies;
}


var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
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
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





function calculateSalesTax(salesData, taxRates) {
  const reducer = (acc,curr) => acc+curr;
  let output = {}
  salesData.forEach((company) => {
      let totalSales = company.sales.reduce(reducer);
      let totalTax = totalSales * taxRates[company.province];

      if ( output[company.name] && output[company.name].totalSales ) {
        output[company.name].totalSales += totalSales;
        output[company.name].totalTaxes += totalTax;
      } else {
        output[company.name] = { };
        output[company.name].totalSales = totalSales;
        output[company.name].totalTaxes = totalTax ;
      }

      })
      console.log(output);
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
// Function to calculate the Payee Tax based on the provided annual taxable pay
function calculatePayeeTaxAnnual(annualTaxablePay) {
    if (annualTaxablePay <= 288000) {
      return annualTaxablePay * 0.1;
    } else if (annualTaxablePay <= 388000) {
      return 28800 + (annualTaxablePay - 288000) * 0.25;
    } else {
      return 38800 + (annualTaxablePay - 388000) * 0.3;
    }
  }
  // Function to calculate the NHIF deduction based on the gross pay.
  function calculateNHIFDeduction(grossPay) {
    const nhifRates = {
      5999: 150,
      7999: 300,
      11999: 400,
      14999: 500,
      19999: 600,
      24999: 750,
      29999: 850,
      34999: 900,
      39999: 950,
      44999: 1000,
      49999: 1100,
      59999: 1200,
      69999: 1300,
      79999: 1400,
      89999: 1500,
      99999: 1600,
      1000000: 1700,
    };
  // Loop through the nhifRates object to find the applicable deduction based on the gross pay
    let nhifDeduction = 0;
    for (const limit in nhifRates) {
      if (grossPay <= limit) {
        nhifDeduction = nhifRates[limit];
        break;
      }
    }
    return nhifDeduction;
  }
  // Function to calculate the NSSF contribution 
  function calculateNSSFContribution(pensionablePay) {
    const tier1Limit = 6000;
    const tier2Limit = 18000;
    const tier1Contribution = Math.min(pensionablePay, tier1Limit) * 0.06;
    const tier2Contribution = Math.min(Math.max(0, pensionablePay - tier1Limit), tier2Limit - tier1Limit) * 0.06;
    const totalContribution = tier1Contribution + tier2Contribution;
    return totalContribution;
  }
  // Function to calculate NetSalary 
  function calculateNetSalary(basicSalary) {
    const annualBasicSalary = basicSalary * 12;
    const payeeTax = calculatePayeeTaxAnnual(annualBasicSalary);
  
    const nhifDeduction = calculateNHIFDeduction(basicSalary);
    const nssfContribution = calculateNSSFContribution(basicSalary);
  
    const totalDeductions = payeeTax + nhifDeduction + nssfContribution;
    const netSalary = basicSalary - totalDeductions;
  
    return netSalary;
  }
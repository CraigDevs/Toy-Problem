# Toy-ProblemToy-Problem
Toy-Problem
Grading Calculator
-The calculateGrade(mark) function contains the calculation logic for determining the grade based on the input mark. The program uses the following grade ranges:

Marks greater than 79: Grade 'A' Marks between 60 and 79: Grade 'B' Marks between 49 and 59: Grade 'C' Marks between 40 and 49: Grade 'D' Marks below 40: Grade 'E' -The main() function handles user input and calls the calculateGrade() function to calculate the grade. If the input marks are within the valid range (0 to 100), the calculated grade is displayed using an alert. If the input is invalid, an error message is displayed.

Speed Detector Calculator
The Demerit Points Calculator is a simple JavaScript function that calculates the demerit points for speeding offenses based on the provided speed and the speed limit.

How to Use
Clone the repository to your local machine or copy the JavaScript function into your project.

Invoke the calculateDemeritPoints(speed) function, passing the speed as an argument.

The function will determine whether the speed exceeds the speed limit and calculate the demerit points accordingly.

The output will be displayed in the console, indicating either "Ok" (if the speed is below the limit), the number of demerit points, or "License suspended" (if the demerit points exceed the maximum limit).

Calculation Logic
The function uses the following constants for calculation:

speedLimit: The standard speed limit in km/h (default is set to 70 km/h).
kmPerDemeritPoint: The number of kilometers over the speed limit for each demerit point (default is set to 5 km/h).
maxDemeritPoints: The maximum allowed demerit points before the license is suspended (default is set to 12 points).
The calculation process follows these steps:

Check if the speed is below the speed limit. If so, display "Ok" as the output, indicating no demerit points.

If the speed exceeds the speed limit, calculate the number of demerit points based on how much the speed exceeded the limit.

If the calculated demerit points are within the allowed limit, display the number of points as the output.

If the demerit points exceed the maximum allowed limit, display "License suspended" as the output.

Employee Salary Calculator
-This JavaScript program calculates the Payee Tax, NHIF, NSSF Deductions, and net salary for an employee based on the provided data.

Calculation Details
The program uses the provided data to calculate :

Payee Tax: Calculated based on the provided PAYE rates with effect from 1 January 2021. NHIF Deduction: Calculated based on the provided NHIF rates in effect from 1 April 2015. NSSF Deduction: Calculated based on the provided NSSF rates from the new and old rates.

Data Sources
PAYE rates with effect from 1 January 2021.
NHIF rates in effect from 1 April 2015.
NSSF contribution rates under the new NSSF Act and the old rates.
Disclaimer
The provided data and calculations in this program are based on the information available up to September 2021. Tax laws and rates might change over time, so it is essential to consult the latest official sources for the most current tax and contribution rates.

Contributing
If you find any issues, have suggestions for improvements, or want to contribute to this project, feel free to open an issue or create a pull request. Your contributions are welcome!

License
This project is licensed under the MoringaXGemba (LICENSE).

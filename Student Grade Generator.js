//Function to calculate the grade based on the input mark
function calculateGrade(mark) {
    if (mark > 79) {
      return 'A';
    } else if (mark >= 60 && mark <= 79) {
      return 'B';
    } else if (mark >= 49 && mark <= 59) {
      return 'C';
    } else if (mark >= 40 && mark <= 49) {
      return 'D';
    } else {
      return 'E';
    }
  }
  
  // Function to handle user input and display the result
  function main() {
    // Prompt the user to input student marks
    const input = prompt("Enter student marks (0-100):");
  
    // Parse the input as a floating-point number
    const marks = parseFloat(input);
  
    // Check if the parsed marks are a valid number between 0 and 100
    if (!isNaN(marks) && marks >= 0 && marks <= 100) {
      // Calculate the grade based on the input marks
      const grade = calculateGrade(marks);
      // Display the result to the user using an alert
      alert(`The grade for the student is: ${grade}`);
    } else {
      // Display an error message if the input is invalid
      alert("Invalid input! Marks should be between 0 and 100.");
    }
  }
  
  // Call the main function to start the program
  main();
// Function to calculate demerit points for a given speed
function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const maxDemeritPoints = 12;
  
    if (speed < speedLimit) {
      console.log("Ok");
      // If the speed is below the speed limit, no demerit points are added
    } else {
      // Calculate the number of demerit points based on how much the speed exceeded limit
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
      if (demeritPoints <= maxDemeritPoints) {
        // If the calculated demerit points are within the allowed limit, display the points
        console.log(`Points: ${demeritPoints}`);
      } else {
        // If the demerit points exceed the maximum limit, the license is suspended
        console.log("License suspended");
      }
    }
  }
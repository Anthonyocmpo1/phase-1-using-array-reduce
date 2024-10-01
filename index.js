
// Code your solution here

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Function to calculate total batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

// Output the total number of batteries
console.log(`Total Batteries: ${totalBatteries}`);

module.exports = {
  totalBatteries,
};
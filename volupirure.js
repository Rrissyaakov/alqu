function collectUniquePivotValues(pivotValues) {
  let uniquePivotValues = new Set(pivotValues);
  return Array.from(uniquePivotValues);
}

let pivotValues = [10, 20, 30, 10, 40, 20, 50];
let uniqueValues = collectUniquePivotValues(pivotValues);
console.log(uniqueValues); // Output: [10, 20, 30, 40, 50]

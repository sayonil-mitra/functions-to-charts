import expotential from "./math-functions/expotential";
import inverse from "./math-functions/inverse";
import normalDist from "./math-functions/normal-distribution";
import square from "./math-functions/square";

export default function calculateChartData(
  years,
  yearWiseFunctions = ["normal"],
  startingPoint = 1000
) {

  const functionMappings = {
    normal: normalDist,
    square: square,
    inverse: inverse,
    expotential: expotential,
  };

  let data = [];

  for (let i = 0; i < yearWiseFunctions.length; i++) {
    let yearlyData = functionMappings[yearWiseFunctions[i]](startingPoint);
    startingPoint = yearlyData[yearlyData?.length - 1];
    // starting point of current year = last data point of previous year
    data = data.concat(yearlyData);
  }
  
  return data;
}

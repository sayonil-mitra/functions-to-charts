import { DAYS, NORMAL_DIST_HEIGHT } from "../constants";
import { NORMAL_DIST_STANDARD_DEVIATION as SD } from "../constants";

export default function normalDist(start) {
  let data = Array(DAYS)
    .fill(0)
    .map((day, index) => {
      return normalDistFormula(index, DAYS / 2) * NORMAL_DIST_HEIGHT + start;
    });
  return data;
}

function normalDistFormula(x, mean) {
  let y =
    (1 / (SD * Math.sqrt(2 * Math.PI))) *
    Math.E ** ((0 - (x - mean) ** 2) / (2 * SD ** 2));
  // actual formula for normal distribution

  return y;
}

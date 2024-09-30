import { DAYS, EXPOTENTIAL_FACTOR } from "../constants";

export default function expotential(start = 0) {
  let data = Array(DAYS)
    .fill(0)
    .map((day, index) => {
      return Math.PI ** (index / EXPOTENTIAL_FACTOR) + start;
    });
  return data;
}

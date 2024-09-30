import { DAYS } from "../constants";

export default function inverse(start = 0) {
  let data = Array(DAYS)
    .fill(0)
    .map((day, index) => {
      return Math.sqrt(index) + start;
    });
  return data;
}

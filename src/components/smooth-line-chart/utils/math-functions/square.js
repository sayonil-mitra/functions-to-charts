import { DAYS } from "../constants";

export default function square(start = 0) {
  let data = Array(DAYS)
    .fill(0)
    .map((day, index) => {
      return index ** 2 + start;
    });
  return data;
}

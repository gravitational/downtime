import type { RawJoke } from "../types";

export function sortByDate(arr: RawJoke[]) {
  return arr.sort(function (a, b) {
    return +new Date(b.fields.date) - +new Date(a.fields.date);
  });
}

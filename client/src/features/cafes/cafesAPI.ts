import { Cafe } from "schema/Cafe";

export function fetchCafes() {
  return new Promise<{ data: Cafe[] }>((resolve) =>
    setTimeout(() => resolve({ data: [] }), 500)
  );
}

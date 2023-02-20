import { Cafe } from "schema/Cafe";
import { API_URL } from "config/env";

export function fetchCafesAPI() {
  return fetch(`${API_URL}/cafes`).then((r) => r.json());
}

export function fetchCafeByIdAPI(cafeId: string) {
  return fetch(`${API_URL}/cafes/${cafeId}`).then((r) => r.json());
}

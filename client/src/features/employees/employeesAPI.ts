import { API_URL } from "config/env";

export function fetchEmployeesAPI() {
    return fetch(`${API_URL}/employees`).then((r) => r.json());
}

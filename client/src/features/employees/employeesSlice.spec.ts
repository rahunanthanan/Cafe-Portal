import counterReducer, { EmployeesState } from "./employeesSlice";

describe("counter reducer", () => {
  const initialState: EmployeesState = {
    loading: false,
    items: [],
    error: null,
  };

  it("should handle initial state", () => {
    expect(counterReducer(undefined, { type: "unknown" })).toEqual({
      value: 0,
      status: "idle",
    });
  });
});

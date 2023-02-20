import counterReducer, {CafesState} from './cafesSlice';

describe('counter reducer', () => {
  const initialState: CafesState = {
    loading: false,
    items: [],
    error: null
  };
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      value: 0,
      status: 'idle',
    });
  });
});

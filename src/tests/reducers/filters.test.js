import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test("Should set default filter values", () => {
  const state = filtersReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual({
    text: "",
    sortBy: "date",
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test("Should set Text Filter", () => {
  const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text: "new text!"})
  expect(state.text).toBe("new text!");
});

test("Should set sortBy to Date", () => {
  const currentState = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined
  };
  const state = filtersReducer(currentState, { type: "SORT_BY_DATE" });
  expect(state.sortBy).toBe("date");
});

test("Should set sortBy to Amount", () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe("amount");
});

test("Should set startDate filter", () => {
  const state = filtersReducer(undefined, { 
    type: "SET_START_DATE",
    startDate: moment(0)
  });
  expect(state.startDate).toEqual(moment(0));
});

test("Should set endDate filter", () => {
  const endDate = moment(0).add(10, "years")
  const action = { 
    type: "SET_END_DATE",
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});
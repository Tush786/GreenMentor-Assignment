import { GETDATA } from "./actiontype";

const intialVal = {
  chartdatavalue: [],
};
 const reducer = (state = intialVal, { type, payload }) => {
  switch (type) {
    case GETDATA:
      return { ...state, chartdatavalue: payload };
    default:
      return state;
  }
};
export default reducer;
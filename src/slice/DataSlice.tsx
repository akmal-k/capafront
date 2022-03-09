import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// api
import api from "../api/api";

//type
import { DataType } from "../components/types";

export interface productState {
  productData?: DataType | null;
}
export interface filterTypes {
  method: Array<string>;
  material: Array<string>;
  status: string;
}
const initialState: productState = {
  productData: null,
};
export const DataSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.productData = action.payload;
    },
  },
});

export const { setData } = DataSlice.actions;
export default DataSlice.reducer;

export const getData = (filters: filterTypes) => async (dispatch: any) => {
  try {
    const { method, material, status } = filters;
    const req: any = await api.get(
      `posts?method_like=${method}&material_like=${material}&status_like=${status}`
    );
    if (req.data) {
      dispatch(setData(req.data));
    }
  } catch (error) {
    console.log("ERROR!>>", error);
  }
};

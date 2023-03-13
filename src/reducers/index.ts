import { StoreTypes } from "CustomCommons";
import todoSlice from "./todoReducer";

export default <StoreTypes> {
    todo: todoSlice.reducer
};

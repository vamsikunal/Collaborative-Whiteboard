import { configureStore } from '@reduxjs/toolkit';
import whiteboardSliceReducer  from "../Whiteboard/WhiteboardSlice";


export const store = configureStore({
  reducer: {
     whiteboard: whiteboardSliceReducer,
  },
});

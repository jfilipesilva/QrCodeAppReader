import type {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {QrCode, QrCodesState} from './types';

// Define the initial state using that type
const initialState: QrCodesState = {
  qrCodeList: [],
};

const addQrCode: CaseReducer<QrCodesState, PayloadAction<QrCode>> = (
  state,
  action,
) => {
  state.qrCodeList.push(action.payload);
};

const removeQrCode: CaseReducer<QrCodesState, PayloadAction<QrCode>> = (
  state,
  action,
) => {
  state.qrCodeList = state.qrCodeList.filter(
    qrCode => qrCode !== action.payload,
  );
};

export const qrCodesSlice = createSlice({
  name: 'qrCodes',
  initialState,
  reducers: {
    addQrCode,
    removeQrCode,
  },
});

export default qrCodesSlice.reducer;

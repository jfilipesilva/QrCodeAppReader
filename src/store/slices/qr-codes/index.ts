import type {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {QrCode, QrCodesState} from './types';

// Define the initial state using that QrCodesState type
const initialState: QrCodesState = {
  qrCodeList: [],
  idCounter: 1,
};

/**
 * Adds a new QR code to the `qrCodeList` in the `QrCodesState`, with an incremented id.
 * @param state - Represents the current state of the `QrCodesState` slice
 * @param action - Contains information about the QRCode being added
 */
const addQrCode: CaseReducer<QrCodesState, PayloadAction<QrCode>> = (
  state,
  action,
) => {
  state.qrCodeList.push({...action.payload, id: state.idCounter});
  state.idCounter += 1;
};

/**
 * The function removes a QR code from the `qrCodeList` in the `QrCodesState`.
 * @param state - Represents the current state of the `QrCodesState` slice
 * @param action - Contains information about the QRCode being deleted
 */
const removeQrCode: CaseReducer<QrCodesState, PayloadAction<QrCode>> = (
  state,
  action,
) => {
  state.qrCodeList = state.qrCodeList.filter(
    qrCode => qrCode.id !== action.payload.id,
  );
};

// Creates the qrCodes slice
export const qrCodesSlice = createSlice({
  name: 'qrCodes',
  initialState,
  reducers: {
    addQrCode,
    removeQrCode,
  },
});

export default qrCodesSlice.reducer;

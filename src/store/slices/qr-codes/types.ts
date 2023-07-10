/**
 * The `QrCodesState` type represents the state of a QR code list with an ID counter.
 * @property {QrCode[]} qrCodeList - This property stores the list of QRcodes.
 * @property {number} idCounter - Keeps track of the current value for generating unique IDs for QR codes.
 */
export type QrCodesState = {
  qrCodeList: QrCode[];
  idCounter: number;
};

/**
 * Represents a QR code object with an id, qrCode string, and date string.
 * @property {number} id - A unique identifier for the QR code.
 * @property {string} qrCode - Represents the QR code value.
 * @property {string} date - Represents the date when the QR code was generated
 */
export type QrCode = {
  id: number;
  qrCode: string;
  date: string;
};

export type QrCodesState = {
  qrCodeList: QrCode[];
  idCounter: number;
};

export type QrCode = {
  id: number;
  qrCode: string;
  date: string;
};

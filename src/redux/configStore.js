import { combineReducers, createStore } from "redux";

const stateDefault = {
  gioHang: [
    {
      maSP: 1,
      tenSP: "iphone X",
      gia: 1000,
      soLuong: 1,
      hinhAnh: "./img/vsphone.jpg",
    },
  ],
};

const rootReducer = combineReducers({
  //Nơi chứa toàn bộ state của ứng dụng
  gioHangReducer: (state = stateDefault) => {
    return state;
  },
  //stateA: () =>{}
});

export const store = createStore(rootReducer);

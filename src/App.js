import logo from "./logo.svg";
import "./App.css";
import DemoFunction from "./Components/DemoComponents/DemoFunction";
import DemoClass from "./Components/DemoComponents/DemoClass";
import CardProduct from "./Components/DemoComponents/CardProduct";
import BaiTapLayout1 from "./Components/BaiTapLayout1/BaiTapLayout1";
import BT1Header from "./Components/BaiTapLayout1/BT1Header";
import BT1Slides from "./Components/BaiTapLayout1/BT1Slides";
import BT1ListPhone from "./Components/BaiTapLayout1/BT1ProductList";
import BT1ListLaptop from "./Components/BaiTapLayout1/BT1ListLaptop";
import BT1Footer from "./Components/BaiTapLayout1/BT1Footer";
import Databinding from "./Components/Databinding/Databinding";

import Styles from "./Components/Styles/Styles";
import HandleEvent from "./Components/HandleEvent/HandleEvent";
import StateDemo from "./Components/StateDemo/StateDemo";
import BaiTapChonXe from "./Components/StateDemo/BaiTapChonXe";
import BaiTapThucHanhLayout from "./Components/BaiTapthucHanhLayout/BaiTapThucHanhLayout";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapLayoutMap from "./RenderWithMap/BaiTapLayoutMap";
import DanhSachSanPhamProps from "./Props/DemoProps/DanhSachSanPhamProps";
import Products from "./Props/BaiTapProps/Products";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";
import BaiTapGioHangRedux from "./DemoRedux/BTGioHangRedux/BaiTapGioHangRedux";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout1 /> */}
      {/* <Databinding /> */}

      {/* Bài tập thực hành layout */}
      {/* <BaiTapThucHanhLayout /> */}

      {/* <Styles />
      <p className="text-red">Cybersoft</p>
      <p className="textGreen">BS4</p> */}

      {/* <HandleEvent /> */}
      {/* <StateDemo /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapLayoutMap /> */}
      {/* <DanhSachSanPhamProps /> */}
      {/* <Products /> */}
      <BaiTapThuKinh />
      {/* <BaiTapGioHangRedux /> */}
    </div>
  );
}

export default App;

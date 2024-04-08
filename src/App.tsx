// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import LayoutWebsite from "./components/layout/LayoutWebsite";
// import LayoutDetail from "./components/layout/LayoutDetail";
// import LayoutPay from "./components/layout/LayoutPay";

import Header from "./components/Header";


function App() {
  return (
    <>
      {/* <Router>
        <Routes>
          <Route index element={<LayoutWebsite />} />
          <Route path="detail" element={<LayoutDetail />} />
          <Route path="pay" element={<LayoutPay />} />

          <Route />
        </Routes>
      </Router> */}
      <Header />
      
    </>
  );
}

export default App;

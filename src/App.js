import { Routes, Route } from "react-router-dom";
import "./App.css";
import TableContents from "./TableContents";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import SalesInfo from "./SalesInfo";
import Americas from "./Americas";
import AsiaPac from "./AsiaPac";
import NotFound from "./NotFound";
import Home from "./Home";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/contents/:id" element={<TableContents />} />
        <Route path="/contents/1" element={<PageOne />} />
        <Route path="/contents/2" element={<PageTwo />} />
        <Route path="/contents/3" element={<PageThree />} />
        <Route path="/contents/4" element={<PageFour />} />
        <Route path="/contactsales" element={<SalesInfo />}>
          <Route path="americas" element={<Americas />} />
          <Route path="asianpacific" element={<AsiaPac />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

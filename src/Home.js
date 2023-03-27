import React from "react";
import { useNavigate } from "react-router";
import NavBar from "./NavBar";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <h1 className="frontTitle">
        Yanmar YSB-8 & YSB-12 Marine Diesel Sailboat Engine Literature
      </h1>
      <NavBar />

      <button className="salesCall" onClick={() => navigate("/contactsales")}>
        Contact Your Sales Team
      </button>
    </div>
  );
}

export default Home;

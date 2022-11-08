import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout
        children={
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/products" element={<Products />} /> */}
          </Routes>
        }
      />
    </>
  );
}

export default App;

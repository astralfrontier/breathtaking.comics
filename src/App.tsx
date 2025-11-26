import { Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./Navbar";

import Beta from "./beta.mdx";

function HelloWorld() {
  return (
    <>
      <Navbar />
      <main className="container">
        <h1>Hello World</h1>
      </main>
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route index element={<HelloWorld />} />
      <Route path="beta" element={<Beta />} />
    </Routes>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route exact path="home" component={<Home />} />
        <Route path="blog" component={<Blog />} />
      </Route>
    </Routes>
  );
}

export default App;

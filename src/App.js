import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Route path="/contact" exact component={Contact} />
    </div>
  );
}

export default App;

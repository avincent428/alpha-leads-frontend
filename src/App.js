import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Route path="/contact" exact component={Contact} />
      <Route path="/admin" eact component={Admin} />
    </div>
  );
}

export default App;

import Header from "./pages/page1/Header";
import Sec1 from "./pages/page1/Sec1";
import Sec2 from "./pages/page1/Sec2";
import "./App.css";

export default function App() {
  return (
    <div className="App col-12">
      <Header />
      <Sec1 />
      <Sec2 />
    </div>
  );
}

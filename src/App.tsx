import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UpSell from "./container/UpSell";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <UpSell />
      <Footer />
    </div>
  );
}

export default App;

import Header from "./Header";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "./Cards";
import Topbar from "./Topbar";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Topbar />
      </div>
      <div>
        <Container />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}

export default App;

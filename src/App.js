//Importing components
import AboutUs from "./Pages/AboutUs";
import Nav from "./Components/Nav";
//Import global style
import GlobalStyle from "./Components/GlobalStyle";
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;

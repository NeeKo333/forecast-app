import "./App.css";
import Wrapper from "./components/Wrapper";
import CityInput from "./components/CityInput";
import InfoDashboard from "./components/InfoDashboard";
import { AppContextProvider } from "./context";

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <Wrapper>
          <CityInput></CityInput>
          <InfoDashboard></InfoDashboard>
        </Wrapper>
      </AppContextProvider>
    </div>
  );
}

export default App;

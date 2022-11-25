import "./App.css";
import RoutesList from "./components/routes/RoutesList";
import { Provider } from "react-redux";
import { store } from "./feature/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <RoutesList />
      </div>
    </Provider>
  );
}

export default App;

import "./App.scss";
import AppListing from "./components/AppListing";
import AppRecommendation from "./components/AppRecommendation";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Search></Search>
      <AppRecommendation></AppRecommendation>
      <AppListing></AppListing>
    </div>
  );
}

export default App;

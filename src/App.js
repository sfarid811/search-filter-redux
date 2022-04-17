import SearchApp from "./components/SearchApp.jsx";
import "./App.css";

function App() {


  return (
    <div className="App">
      <div className="container bg-red-100 mx-auto">
        <div className="flex justify-center items-center h-full">
          <div className=" bg-gray-900">
            <SearchApp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
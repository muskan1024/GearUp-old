import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Items from "./components/Items";
import { Landing } from "./components/Landing";


function App() {
  return (
    <>

      <div>
        <NavBar />
        <div className="bg-gray-700">
          <img
            src="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="opacity-60 bg-blend-soft-light w-screen bg-gray-600 "
          />
        </div>
      </div>
      <Landing/>
    </>
  );
}

export default App;

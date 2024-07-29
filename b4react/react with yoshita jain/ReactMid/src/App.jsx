import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App(){

  return (
    <>
  
    < Navbar />
    <div className="cards">
    < Card  title="card 1" decsription="card 1 disc" />
    < Card  title="card 1" decsription="card 1 disc" />
    < Card  title="card 1" decsription="card 1 disc" />
    < Card  title="card 1" decsription="card 1 disc" />

   
    </div>
    < Footer />


    </>
  );
}
export default App
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";


function App(){

  return(
    <div>
     <Navbar />
     <div className="cards">
        <Cards title="Card 1" desciption="card 1 desc" />
        <Cards title="Card 2" desciption="card 2 desc" />
        <Cards title="Card 1" desciption="card 3 desc" />
        <Cards title="Card 1" desciption="card 4 desc" />
        
     </div>
     <Footer />
    </div>
  )
}

export default App;
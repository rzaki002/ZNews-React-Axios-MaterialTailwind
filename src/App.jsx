import './App.css'
import Data from './Component/Data/Data';
import Footer from './Component/Footer/Footer';
import NavMenu from "./Component/NavMenu/NavMenu";
import Toogle from './Component/Toogle/Toogle';

function App() {

  return (
    <>
      <div className='App dark:bg-blue-gray-900'>
      <div className="container mx-auto max-w-screen-xl py-4">
        <NavMenu/>
        <Toogle/>
        <Data/>
        <Footer/>
      </div>
      </div>
      
    </>
  )
}

export default App

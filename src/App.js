
import './App.css';
import CounterReducer from './component/CounterReducer';
import Homepage from './component/Homepage';
import Products from './component/Products';
import Register from './component/Register';
import SingleProduct from './component/SingleProduct';
import GlobalContext from './component/context/GlobalContext';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>}/>
        <Route exact path='/globalContext' element={<GlobalContext/>}/>
        <Route exact path='/products' element={<Products/>}/>
        <Route exact path='/singleProduct/:id' element={<SingleProduct/>}/>
        <Route exact path='/counter-reducer' element={<CounterReducer/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;

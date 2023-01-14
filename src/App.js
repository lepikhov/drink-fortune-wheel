import './App.css';
import DrinkWheel from './Drink_wheel';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h3>Крути колесо, чтобы узнать будущее</h3> 
        <div className="wheel">
          <DrinkWheel/> 
        </div>              
      </div>  
    </div>
  );
}


export default App;

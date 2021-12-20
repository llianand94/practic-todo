import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Todo></Todo>
    </div>
  );
}
function createStore(reducer, initialState){
  let state = initialState;
  return {
    dispatch: action => {state= reducer(state, action)},
    getState: ()=>state,  
    
  }
}
const storeOne = createStore();
console.log(storeOne.dispatch)
export default App;

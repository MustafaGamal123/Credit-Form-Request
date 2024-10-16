import './App.css';
import { useEffect } from 'react';
import MyForm from './MyForm';

function App() {
  useEffect(() => {
    document.title = "Credit Request"; 
  }, []); 


  return (
    <div className="App">
      <modal/>
      <MyForm/>

    </div>
  );
}
export default App;

import { useState, useEffect } from 'react';
import './assets/css/App.css';
import Search from './pages/home';

function App() {
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${count} times`;
  // });
  return (
    // <div>
    //   <p>you've click {count} times</p>
    //   <button onClick={() => setCount (count+1) }>click me</button>
    // </div>
    <>
      <Search />
    </>
    
  );

}

export default App;

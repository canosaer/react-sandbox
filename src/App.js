import './App.css';
import { useState } from 'react';

const data = {
  src: 'https://www.fillmurray.com/640/320',
  width: 640,
  height: 320,
  alt: 'Bill Murray',
  caption: `"Whatever you do, always give 100%. Unless you're donating blood."`,
}


const HelloWorld = ({src, width, height, alt, caption}) =>{
  const [count, setCount] = useState(0);

  const buttonClicked = () => {
    setCount(count + 1)
  }  

  return(
    <figure>
      <img src={src} width={width} height={height} alt={alt} />
      <figcaption>
        {caption}
      </figcaption>
      <button onClick={buttonClicked}>Click Me! {count} </button>
    </figure>
  )
}

function App() {

  return (
    <div className="App">
      <HelloWorld {...data}/>
    </div>
  );
}

export default App;

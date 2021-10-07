import './App.css';
import { useEffect, useState, useRef } from 'react'

function App() {

  const [ data, setData ] = useState([])

  const carrossel = useRef(null)

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json').then((response) => response.json()).then(setData)
  }, [])

  const handleLeftClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft = carrossel.current.offsetWidth
  }

  const handleRightClick = (e) =>{
    e.preventDefault();
    console.log(carrossel.current.offsetWidth)
    carrossel.current.scrollLeft += carrossel.current.offsetWidth
  }

  if( !data || !data.length ) return null

  return (
    <div className="container">
      <div className = "logo">
          <img src = "/static/images/super-shoes.png" alt = "Super Shoes Logo"/>
      </div>

      <div className = "carrossel" ref={carrossel}>

        {data.map((item) =>{

          const {id, name, price, oldPrice, image} = item;

          return(
          <div className = "item" key = {id}>
              <div className = "image">
                  <img src = {image} alt = {name}/>
              </div>

              <div className = "info">
                  <span className = "name">{name}</span>
                  <span className = "oldPri">U$ {oldPrice}</span>
                  <span className = "price">U$ {price}</span>
              </div>
          </div>
          )
        })}
      </div>

      <div className = "buttons">

        <button onClick = {handleLeftClick}> 
          <img src= "/static/images/216151_right_chevron_icon.png" /> 
        </button>

        <button onClick = {handleRightClick}> 
          <img src= "/static/images/216151_right_chevron_icon.png" /> 
        </button>

      </div>
    </div>
  );
}

export default App;

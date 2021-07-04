import React from "react";
import PropTypes from "prop-types";


const foodLike = [
  {
    id:1,
   name : "kimchi",
   image:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4aBRBEMc36CPZmEg84X40wEsDI%26pid%3DApi&f=1",
   rating : 5
  },
  { 
    id:2,
    name : "bibimbap",
    image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WAqTx1PHip91SNmDQ68svwHaGL%26pid%3DApi&f=1",
    rating : 4
   },
   {
   id:3,
   name : "samgyetang",
   image :"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.vomQr4xtWP6s66f_UDoxDAHaFk%26pid%3DApi&f=1",
   rating : 4.3
   },
  ];

  function Food({ name, picture, rating }){
    return <div>
      <h2>I like {name}</h2>
      <h4>{rating} / 5.0</h4>
      <img src ={picture} alt={name} />
    </div>
  }  

  Food.propTypes = {
    name: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    rating: PropTypes.number
  };

function App() {
  return (
    <div className="App">
      hello
     {foodLike.map(dish =>(
       <Food key= {dish.id} name ={dish.name} picture ={dish.image} rating = {dish.rating} /> 
       ))}
    </div>
  );
}

export default App;

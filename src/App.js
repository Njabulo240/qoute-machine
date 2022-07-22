//import logo from './logo.svg';
import './App.scss';
import React, {useState, useEffect} from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import color_Array from "./colorsArray.js"
//import './fontawesome';

function App() {
  const [qoute,setQoute]= useState("Whether you think you can or you think you can’t, you’re right.")
  const [author,setAuthor]= useState("Henry Ford")
  const [randomNum,setRandomNum]=useState(0)
  
  const [accentColor,setAccentColor]=useState('#FF6633')


  const generateQoutes=()=>{
    let randomInteger=(Math.floor(qoutesArray.length*Math.random()))
    setRandomNum(randomInteger)
    setAccentColor(color_Array[randomInteger])
    setQoute(qoutesArray [randomInteger].qoute)
    setAuthor(qoutesArray [randomInteger].author)
  }

const qoutesArray =[
  {qoute:"Build your own dreams, or someone else will hire you to build theirs.",
  author:"Farrah Gray"},

  {qoute:"If the wind will not serve, take to the oars.",
  author:"Latin Proverb"},

  {qoute:"The most common way people give up their power is by thinking they don’t have any.",
  author:"Alice Walker"},


  {qoute:"Build your own dreams, or someone else will hire you to build theirs",
  author:"Farrah Gray"},

  {qoute:"Everything you’ve ever wanted is on the other side of fear.",
  author:"George Addair"}]

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: accentColor, color: accentColor}}>
      <div id="quote-box" style={{ color: accentColor}}>
      <p id="text">"{qoute}"</p>
        <p id="author">- {author}</p>
      
        <div className="buttons">
<a  id="tweet-quote" role="button" title="Share on twitter"
   href={'http://twitter.com/intent/tweet?text=Hello'}
   rel="noopener" style={{backgroundColor: accentColor}} >
  <i class="fab fa-2x fa-twitter" ></i>
</a> 

    <button id="new-quote" onClick={()=> generateQoutes()} style={{backgroundColor: accentColor}}>new-quote</button>
    </div>
      </div>
      </header>
    </div>
  );
}

export default App;

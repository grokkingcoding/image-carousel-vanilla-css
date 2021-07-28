import React, { useReducer, useEffect, useState, cloneElement } from 'react';
import logo from './logo.svg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import './App.css';

function App() {

  var images = [
    logo, img1, img2
  ];
  
  var currentIndex = 0;   

  useEffect(() => {

    // add event listeners here 
      window.addEventListener("resize", (event) => {
        console.log('screen size has changed')
        console.log(document.body.clientWidth + ' wide by ' + document.body.clientHeight + ' high');                              
      }); 
      
      var img = document.querySelector('img');
      var next = document.getElementById('next-button');
      var prev = document.getElementById('prev-button');

      next.onclick = function(){
          img.setAttribute('src', images[incrementIndex(currentIndex)]);  
        }
        
      prev.onclick = function(){
          img.setAttribute('src', images[decrementIndex(currentIndex)]);  
        }

  }, []);   
  
  var incrementIndex = function(){
        //console.log(currentIndex);
        currentIndex = currentIndex + 1;
        if (currentIndex > images.length - 1) {currentIndex = 0}
        return currentIndex;
    }
    
    var decrementIndex = function(){
        //console.log(currentIndex);
        currentIndex = currentIndex - 1;
        if (currentIndex < 0) {currentIndex = images.length - 1}
        return currentIndex;
    }

    

  return (
    <div className="App">      
      <header className="App-header">        
        <div         
        style={{
          display: 'flex',         
          marginBottom: '2rem'           
        }}        
        >        
        <button 
        style={{
          marginRight: '5rem',                    
        }}     
        id="prev-button"> {'<'} </button>
        <button         
        id="next-button"> {'>'} </button>                
        </div>
        <div 
        style={{
          width: '40rem',
          height: '25rem',
        }}
        className="backgroundImg"
        >
        <div class="imageCarousel">
        <img 
        style={{
          width: '20rem',
          height: '20rem',
        }}
        src={img1}
        />        
        </div>
      </div>      
      </header>            
    </div>
  );
}

export default App;

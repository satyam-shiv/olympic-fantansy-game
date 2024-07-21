import React from 'react'
import Navbar from './Navbar';
import './Home.css';
const Home = ({ username }) => {
  return (<>
       <div className='logo3'>
        <Navbar username={username}/>
        
        <div className='box'>
          <p className='paragraph'>
            The Olympic Games are a major international multi-sport event that takes place every four years. 
            The Games are held in a different city each time, with athletes from around the world competing in a 
            variety of sports. The Olympics are renowned for their spirit of competition, unity, and sportsmanship, 
            celebrating both the achievements of individuals and the collective harmony of the global community.
          </p>
        </div>

     </div>
     
     </>
    
  )
}

export default Home

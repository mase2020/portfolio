import React from 'react'
import './about.scss'
import {ArrowDownward} from '@material-ui/icons'
// import { Button } from '@material-ui/core'

export default function About() {
    return (
        <div className="about" id = 'about'>
        <div className="container">
            <div className="row text-center" >
                
                <h1>About Me</h1>
            </div>
            <div className="row  " style={{width:"100%", margin:'auto', }}>
              {/* <div   style={{border:'8px solid',borderWidth: '10px',	borderImage: 'repeating-linear-gradient(45deg, turquoise, pink 4%) 1',
            
           
            
            display: 'grid',
            placeItems: 'center',
            minHeight: '200px',

            padding: '1rem'}}> */}
              <div>
                <p >
               

  I am currently a final year Computer Science student at City University of London.
  My decision to study Computer Science was rather unique compared to my peers as prior to entering University, my interests lied elsewhere. 
  The reason behind my switch was that although I have interest in my previous role but due to the lack of formal recognition and accreditation of my previous studies, I was unable to get any mainstream jobs. 
  This led me to quit my job and seriously ponder upon my future.
  Therefore I had some meetings with fellow friends who are in the professional field and they proposed that I choose a career in the Computer Science Department. 
  I applied for City University knowing that they have a coding bootcamp in the first two weeks of the first semester which will give me an insight into what coding is and what the life of a computer scientist entails.
  This introduction to coding was amazing for me as from being a total novice and writing my first 'hello world' code I ended up managing to create a game at the end of it. 
  This is where I realised that the IT sector is where I want to be, and I have not looked back since.

                </p>
              
                
              <span><a target="_blank" href='assets/cv.pdf'> <button className='btn btn-danger '>Click for CV</button></a>  
               <span><a style={{color:'maroon', marginLeft:'50px'}} href="#portfolio">
         <ArrowDownward/>
        </a></span> 
      </span>
             
             
            
                </div>
               

            </div>
        </div>
      
        </div>


    )
}

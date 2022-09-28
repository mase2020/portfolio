import { useState } from "react";
import "./Contact.scss";
import emailjs from 'emailjs-com'
import{ArrowUpward , LinkedIn, GitHub} from '@material-ui/icons'

export default function Contact() {

  const [message, setMessage] = useState(false);
  const [enteredName, setEnteredName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredMessage, setEnteredMessage] = useState('');

  const nameChangeHandler = (e)=>{
    setEnteredName(e.target.value)
  }
  const emailChangeHandler = (e)=>{
    setEnteredEmail(e.target.value)
  }
  const messageChangeHandler = (e)=>{
    setEnteredMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_e9zrlaf','template_9ceaqgg',e.target,'user_Fvdmp0TIa2YhVcKlAQm3g').then(res=>{
      console.log(res)
    }).catch(err=>console.log(err))
    setMessage(true);

    setEnteredName('');
    setEnteredEmail('');
    setEnteredMessage('');
  };

return(
  <div className='contact' id='contact'>
  <div className= 'container border cont ' >
    
    <h1 className='text-center'>Contact Form</h1>
 
    
    <form className='formlayout' onSubmit={handleSubmit}>
      <div className='form-group'>
      <label>Name</label>
      <input type='text' name='name' className='form-control' value={enteredName} onChange={nameChangeHandler}/>
      </div>
      <div className='form-group'>
      <label>Email</label>
      <input type='email' name ='email'className='form-control' value={enteredEmail} onChange={emailChangeHandler}/>
      </div>
      <div className='form-group'>
      <label>Message</label>
      <textarea name='message' rows='5'className='form-control' value={enteredMessage} onChange={messageChangeHandler}/>
      </div>
      <input type="submit" value='Send' className='form-control btn btn-primary' style={{marginTop:'25px'}}/>
   
    </form>
    {message && 
    <div className='text-center'>
    <span  style={{marginTop:'30px', color:'green', fontSize:'2rem'}}>Thank you for your message. I'll try to reply ASAP. </span>
    </div>}
    <div className='row text-center' >
          <div className="col my-3 d-flex align-items-stretch justify-content-center " style={{marginBottom:'30px', padding:'8px'}}>
          <a  style={{margin:'8px'}}  href="https://www.linkedin.com/in/muhammad-masum-miah-3082a7105/"><button className='btn btn-primary '><LinkedIn className="icon"/> LinkedIn</button> </a>
          <span style={{margin:'8px'}} ><a target="_blank" href='assets/cv.pdf'> <button className='btn btn-danger '>Click for CV</button></a> </span>
            <a style={{margin:'8px'}}  href="https://github.com/mase2020"><button className='btn btn-secondary'><GitHub className="icon"/> GitHub</button></a>
    </div>
         
    <div className='text-center' style={{marginBottom:'30px', padding:'8px'}} >
          <a href="#intro">
         <span ><ArrowUpward  className="svg_icons"/></span> 
        </a>
        </div>
  
      
          </div>
          </div>

    </div>

  
)
}
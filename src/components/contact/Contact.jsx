import { useState } from "react";
import "./Contact.scss";
import emailjs from 'emailjs-com'


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
  
  <div className= 'container border contact' id='contact' >
    <div className='row'>
    <h1 className='text-center'>Contact Form</h1>
    </div>
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
    <div className="row text-center">


<a className='col ' href="https://www.linkedin.com/in/muhammad-masum-miah-3082a7105/"><i class="fab fa-linkedin-in fa-2x"></i> </a>
<a className='col 'href="https://github.com/mase2020"><i class="fab fa-github fa-2x"></i> </a>

</div>
    </div>
    
  
  
)
}
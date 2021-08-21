
import {Card,Button} from 'react-bootstrap'


const CardPortfolio = (props) => {
  
  return <div >

      
    <Card style={{ width: '18rem', height:'29rem' }}>
  <Card.Img style={{ width: '18rem', height:'15rem' }}variant="top" src={props.image} />
  <Card.Body>
    <Card.Title style={{color:'red'}}>{props.title}</Card.Title>
    <Card.Text>
      {props.desc}
    </Card.Text>
    <footer >
      <div className='row'>
        <div className = 'col  '>
            <a href={props.code}><Button variant="primary" >Code</Button></a>
    {!props.website.trim() == "" &&
    <a className= 'mx-2'href={props.website}><Button variant="success">Website</Button></a>}
    </div>
    </div>
  
    </footer>
  </Card.Body>
</Card>
  </div>;
};

export default CardPortfolio;
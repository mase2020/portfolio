import { useEffect, useState } from "react";
import PortfolioList from "../PortfolioList/PortfolioList";
import "./Portfolio.scss";
import {ArrowDownward} from '@material-ui/icons'
import CardPortfolio from '../UI/Card'
import {
  featuredPortfolio,
  pythonPortfolio,
  websitePortfolio,
  cplusplusPortfolio,
  javaPortfolio,
  othersPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
   
    {
      id: "websites",
      title: "Websites",
    },
    {
      id: "java",
      title: "Java",
    },
    {
      id: "python",
      title: "Python",
    },
    {
      id: "cplusplus",
      title: "C++",
    },
    
    {
      id: "others",
      title: "Others",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "python":
        setData(pythonPortfolio);
        break;
      case "websites":
        setData(websitePortfolio);
        break;
      case "cplusplus":
        setData(cplusplusPortfolio);
        break;
      case "java":
        setData(javaPortfolio);
        break;
        case "others":
          setData(othersPortfolio);
          break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className=" portfolio" id="portfolio">
      <div className='container '>
      <div className='row text-center ' >
      <h1  >Projects</h1>
     </div>
     <div className='row '>
      <ul >
      
    
        {list.map((item) => (
          <div className=' d-flex text-center' >
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            
          />
         </div>
        ))}
        
       
      </ul>
      </div>
      
    
      
      <div  className=""style={{ marginTop:'20px' }}>
    <div className="row text-center ">
        {data.map((d) => (
          <div  className="  col-lg-4 col-md-6 my-3 d-flex align-items-stretch justify-content-center">
          <CardPortfolio image={d.img} title={d.title} desc={d.desc} code={d.code} website = {d.website}/>
          </div>
          
        ))}
         <a   href="#contact">
         <span  ><ArrowDownward style={{margin:'30px'}} className='svg_icons'/></span> 
        </a>
      </div>
      </div>
     
      </div>
   
    

    </div>
  );
}
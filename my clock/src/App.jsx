import './App.css';
import React, {useEffect,useState} from "react";  
const DigitalClock = () => {
  const [clockState, setClockstate] = useState(); 
    useEffect(() =>{
      setInterval(() =>{
        const date =new Date();
        setClockstate(date.toLocaleTimeString());
      },1000);
    },[]);
  return (
    <div className="digital-clock">
      <h2>{clockState}</h2>
    </div>
  );
};
export default DigitalClock ;

import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Footerimg } from "./Footer-img";
import { Nav } from "./Navbar";
import {

  FaCalendarDay,

  FaPersonBooth,
  FaHotel
} from "react-icons/fa";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { useState } from "react";
import { format } from "date-fns";

import { useNavigate } from "react-router-dom";

function Home() {


  const [opendate, setopendate] = useState(false);
  const [date, setdate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination,setdestination]=useState('')
  const [openoptions, setopenoptions] = useState(false);
  const [options, setoptions] = useState({
    Adult: 1,
    childern: 0,
    room: 1,
  });
  const navigate = useNavigate()
  const handleclick = (name, opertons) => {
    setoptions((prv) => {
      return {
        ...prv,
        [name]: opertons === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handlsearch=()=>{
    navigate('/Secondpage',{state:{destination,date,options}})
 

  }

  return (
    <>
      <Nav />
      <br />

      <div className="Home">
        <img
          className="ima1"
          src="https://images.pexels.com/photos/6129987/pexels-photo-6129987.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />

        <div className="home1">
        
          <div className="hedersearchitem">
          <FaHotel className="headericon" />.
            {/* <FaFontAwesome icon={FaHotel} className="headericon" /> */}
            <input
              type="text"
              placeholder="where are u go"
              className="headersearchinput"
              onChange={(e)=>setdestination(e.target.value)}
          
            />
          </div>

          <div
            className="hedersearchitem"
            onClick={() => setopendate(!opendate)}
      
          >
            <FaCalendarDay className="headericon"  />
            <span className="headersearchtext"  >
              {`${format(date[0].startDate, "MM/dd/yyyy")}  to  ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )} `}
            </span>
            {opendate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setdate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="hedersearchitem">  
           <FaPersonBooth className="headericon" />.



          
            <span
              className="headersearchtext"
           
              onClick={() => setopenoptions(!openoptions)}
            >{`${options.Adult}Adult .${options.childern} childern .${options.room} room`}</span>
            {openoptions && (
              <div className="options">
                <div className="optionsitems">
                  <span className="optiontext">Adult </span>
                  <div className="optioncounter">
                    <button
                      disabled={options.Adult <=1}
                      className="counterbutton"
                      onClick={() => handleclick("Adult", "d")}
                    >
                      -
                    </button>
                    <span className="counternumber">{options.Adult} </span>
                    <button
                  
                      className="counterbutton"
                      onClick={() => handleclick("Adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsitems">
                  <span className="optiontext">childern </span>
                  <div className="optioncounter">
                    <button
                         disabled={options.childern <=0}
                      className="counterbutton"
                      onClick={() => handleclick("childern", "d")}
                    >
                      -
                    </button>
                    <span className="counternumber"> {options.childern} </span>
                    <button
                      className="counterbutton"
                      onClick={() => handleclick("childern", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="optionsitems">
                  <span className="optiontext">room </span>
                  <div className="optioncounter">
                    <button
                              disabled={options.room <=1}
                      className="counterbutton"
                      onClick={() => handleclick("room", "d")}
                    >
                      -
                    </button>
                    <span className="counternumber"> {options.room} </span>
                    <button
                      className="counterbutton"
                      onClick={() => handleclick("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <div className="hedersearchitem">
          
          
         
            <button onClick={handlsearch} style={{ backgroundColor: "white",borderRadius:"10px" }}>submit</button>
          </div>
            
        </div>
    
      </div>
      <br />
      <br />
      <br />
      <br />
      <Cart />
      <Footerimg />
      <Footer />
    </>
  );
}

export { Home };

import { useLocation } from "react-router-dom";
import { Nav } from "./Navbar";
import { useState } from "react";
import { format } from "date-fns";
import { Searchitem } from "./Searchitem";
function Secondpage() {
  const location = useLocation();
  const [destination, setdestination] = useState(location.state.destination);
  const [date, setdate] = useState(location.state.date);
  const [options, setoptions] = useState(location.state.options);

  return (
    <>
      <Nav />

      <div className="listcontainer">
        <div className="listwrapper">
          <div className="listsearch">
            <h1 className="lstitile">search</h1>
            <div className="listitem">
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </div>
            <div className="listitem">
              <label htmlFor="">check-in-date</label>
              <span>{`${format(date[0].startDate, "MMM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
            </div>
            <div className="listitem">
              <label htmlFor="">options</label>
              <div className="lsoptins">
                <span className="lsoptiontext">
                  Min price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>
              <div className="lsoptins">
                <span className="lsoptiontext">
                  Max price <small>per night</small>
                </span>
                <input type="number" className="lsoptioninput" />
              </div>
              <div className="lsoptins">
                <span className="lsoptiontext">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsoptioninput"
                  placeholder={options.Adult}
                />
              </div>
              <div className="lsoptins">
                <span className="lsoptiontext">childern</span>
                <input
                  type="number"
                  className="lsoptioninput"
                  min={0}
                  placeholder={options.childern}
                />
              </div>
              <div className="lsoptins">
                <span className="lsoptiontext">room</span>
                <input
                  type="number"
                  min={1}
                  className="lsoptioninput"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button>search</button>
          </div>
          <div className="listresult">
          <Searchitem />
          <Searchitem />
          <Searchitem />
          <Searchitem />
          <Searchitem />
          <Searchitem />
     

       
          </div>
         
        </div>
      </div>
    </>
  );
}
export { Secondpage };

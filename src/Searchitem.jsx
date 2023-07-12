// import "./Searchitem.css";
// function Searchitem() {
//   return (
//     <>
//       <div className="searchiteam">
//         <img
//           src="https://i.pinimg.com/564x/d1/7f/bb/d17fbba0045a7cafd0ff3c1e34bc9ac8.jpg"
//           alt=""
//           className="simag"
//         />

//         <div className="sidesc">
//           <h1 className="sititle"> Tower Street Apartments</h1>
//           <span className="sidistance"> 500 from center</span>
//           <span className="sitaxiop"> Free airport taxi</span>
//           <span className="sisubtile">
//             Studio Apartment with Air conditioning
//           </span>
//           <span className="sifeature">
//             Entire studio . 1 bathroom . 21m 1 full bed
//           </span>
//           <span className="sicancelop">free cancellation</span>
//           <span className="sicancelopsubtitel">
//             you can cancal later so in this great price tody!
//           </span>
//           </div>
       
//         <div className="sidetails"> details
//         </div>
        
//         </div>
   
//     </>
//   );
// }
// export { Searchitem };

import { useNavigate } from "react-router-dom";
import "./searchitem.css";

const Searchitem = () => {
  const navigate= useNavigate()
  const handilclick=()=>{
    navigate('/Hotel')


  }
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire studio • 1 bathroom • 21m² 1 full bed
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button onClick={handilclick} className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export {Searchitem};
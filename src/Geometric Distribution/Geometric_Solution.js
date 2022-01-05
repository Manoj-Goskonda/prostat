import React,{useState,useEffect} from 'react'
import Try_Calc from '../Critical_Calc/Try_Calc';
import { jStat } from "../../node_modules/jstat/dist/jstat.min";
import Geometric1 from '../assets/Images/Geometric1.png';
import Geometric2 from '../assets/Images/Geometric2.png';
import Geometric3 from '../assets/Images/Geometric3.png';

const Geometric_Solution = (props) => {

    /* ---------------- Equal  -------------- */
    const [Success, setSuccess] = useState(0);

    useEffect(() => {  
    let result = jStat.geo.pdf(
      20,
      props.getSolutionDataObject.numEqual
     )
    console.log("res =========>", result);
    setSuccess(result);
});

    return (
        <>
            <div className="container fluid">
                <div className="row getsolution">
                    <div className="pb-100">
                        {/* <button type="submit" class="back-btn"><svg width="20" height="20" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.5 25.75L18 25.75V32C17.9999 32.2472 17.9266 32.4888 17.7893 32.6943C17.6519 32.8998 17.4567 33.06 17.2283 33.1546C16.9999 33.2492 16.7487 33.2739 16.5062 33.2257C16.2638 33.1775 16.0411 33.0585 15.8662 32.8837L0.866249 17.8837C0.631908 17.6493 0.500267 17.3314 0.500267 17C0.500267 16.6685 0.631908 16.3506 0.866249 16.1162L15.8662 1.11623C16.0411 0.941466 16.2638 0.822458 16.5062 0.774248C16.7487 0.726039 16.9999 0.750793 17.2283 0.84538C17.4567 0.939968 17.6519 1.10014 17.7893 1.30565C17.9266 1.51117 17.9999 1.75279 18 1.99998V8.24998L30.5 8.24998C31.1628 8.25064 31.7983 8.51424 32.267 8.98294C32.7357 9.45164 32.9993 10.0871 33 10.75L33 23.25C32.999 23.9127 32.7353 24.548 32.2667 25.0166C31.798 25.4853 31.1627 25.749 30.5 25.75ZM3.5175 17L15.5 28.9825V23.25L30.5 23.25L30.5 10.75L15.5 10.75L15.5 5.01748L3.5175 17Z" fill="white" />
                    </svg>
                    </button> */}
                    </div>
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <p className="sol-text">Solution :</p>
                                    <p>The Following information has been provided :</p>
                                    <div className="soln-box">
                                        <div class="row1">
                                            <p>Probability of success (P) = </p>
                                            <p>{props.getSolutionDataObject.numProbability}</p>
                                        </div>
                                        <div class="row2">
                                            <p>Population Probability of Failure (q = 1- p) = </p>
                                            <p>0.6</p>
                                        </div>
                                    </div>
                                    <p>Find</p>
                                    <div className="sol-box">                                  
                                    <div className="soln-box">
                                    <div class="row2">
                                            <p>Probability Event = </p>
                                            <p>{props.getSolutionDataObject.numEqual}</p>
                                        </div>
                                    </div>
                                    </div>

                                    <p>Geometric Probability Distribution Formula :</p>
                                    <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                        <img src={Geometric1} />
                                    </div>
                                    <p>Therefore, we get that,</p>
                                    <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                        <img src={Geometric2} />
                                    </div>
                                    <p>This implies that,</p>
                                    <div className='btformula mt-3 mb-3 ' style={{ textAlign: 'center' }}>
                                        <img src={Geometric3} />
                                    </div>
                                    <p>Which means that the probability we are looking for is Pr = {Success}</p>
                                </div>
                                <br ></br >
                                <br ></br >
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn">
                    <button type="submit" className="solution-btn ml-3">Download Photo</button>
                    <button type="submit" className="solution-btn ml-3">Save As</button>
                    <button type="submit" className="solution-btn ml-3">7.8k Likes</button>
                </div>
            </div>
            <Try_Calc />
        </>
    )
}

export default Geometric_Solution;

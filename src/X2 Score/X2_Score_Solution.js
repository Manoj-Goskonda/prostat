import React, { useState, useEffect } from "react";
import Try_Calc from "../Critical_Calc/Try_Calc";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";

const X2_Score_Solution = (props) => {

  /* -------------- Left Tailed -------------- */  
  const [critical, setCritical] = useState(0);

  useEffect(() => {
    let result = jStat.chisquare.cdf(
      props.getSolutionDataObject.numSign,
      props.getSolutionDataObject.numDof
    );

    console.log("res =========>", result);
    result = result.toFixed(props.getSolutionDataObject.DecimalValues);
    console.log("result.toFixed(10); =========>", result);
    setCritical(result);
  });

  /* -------------- Right Tailed -------------- */  
  const [critical1, setCritical1] = useState(0);

  useEffect(() => {
    let result1 = 1 - jStat.chisquare.cdf(
      props.getSolutionDataObject.numSign,
      props.getSolutionDataObject.numDof
    );

    console.log("res =========>", result1);
    result1 = result1.toFixed(props.getSolutionDataObject.DecimalValues);
    console.log("result.toFixed(10); =========>", result1);
    setCritical1(result1);
  });

  /* -------------- Two Tailed -------------- */  
  const [critical2, setCritical2] = useState(0);

  useEffect(() => {
    let result2 = 2 * jStat.chisquare.cdf(
      props.getSolutionDataObject.numSign,
      props.getSolutionDataObject.numDof
    );

    console.log("res =========>", result2);
    result2 = result2.toFixed(props.getSolutionDataObject.DecimalValues);
    console.log("result.toFixed(10); =========>", result2);
    setCritical2(result2);
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
                  <p className="sol-text">Solution</p>
                  <p>The Following information has been provided :</p>
                  <div className="soln-box">
                    <div class="row1">
                      <p>Type of test = </p>
                      <p>{props.getSolutionDataObject.tailed}</p>
                    </div>
                    <div class="row2">
                      <p>Degrees of freedom (d) =</p>
                      <p>{props.getSolutionDataObject.numDof}</p>
                    </div>
                    <div class="row1">
                      <p>Test Statistics(χ²)=</p>
                      <p>{props.getSolutionDataObject.numSign}</p>
                    </div>
                  </div>
                  <div className="soln-box">
                    <p>
                      Here, the test statistic (χ2) is {props.getSolutionDataObject.numSign} with degrees of
                      freedom {props.getSolutionDataObject.numDof} having {props.getSolutionDataObject.tailed} χ2-distribution. Then the P
                      value is :
                    </p>
                    <div className="criticalbox">
                      <p>P-value :</p>
                      <p>{critical}</p>
                    </div>
                  </div>
                  <h5 className="critical-heading">
                    The P value for {props.getSolutionDataObject.tailed} test using Excel :
                  </h5>
                  <div className="sigsoln">
                    <div className="significance">
                      <li>Test Statistics : </li>
                      <p>{props.getSolutionDataObject.numSign}</p>
                    </div>
                    <div className="significance">
                      <li>deg_freedom :</li>
                      <p>{props.getSolutionDataObject.numDof}</p>
                    </div>
                  </div>
                  <div className="sigsolution">
                    <p className="mt-2">
                      = CHISQ.DIST.RT (Test Statistics, deg_freedom)
                    </p>
                    <p className="mt-2">= CHISQ.DIST.RT ({props.getSolutionDataObject.numSign}, {props.getSolutionDataObject.numDof})</p>
                    <p className="mt-2">= {critical} , {critical1} and {critical2}</p>
                  </div>
                  <div class="sol-para">
                    <p>
                      Here, the test statistic (χ2) is {props.getSolutionDataObject.numDof} with degrees of
                      freedom {props.getSolutionDataObject.numDof} having {props.getSolutionDataObject.tailed} χ2-distribution. Then the P
                      value is {critical}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn">
          <button type="submit" className="solution-btn ml-3">
            Download Photo
          </button>
          <button type="submit" className="solution-btn ml-3">
            Save As
          </button>
          <button type="submit" className="solution-btn ml-3">
            7.8k Likes
          </button>
        </div>
      </div>
      <Try_Calc />
    </>
  );
};

export default X2_Score_Solution;

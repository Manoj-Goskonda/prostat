import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";
import { jStat } from "../../node_modules/jstat/dist/jstat.min";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Onesample_Ztest_GetSolution = (props) => {
  const [changeHypothesis1, setChangeHypothesis1] = useState();
  const [changeHypothesis2, setChangeHypothesis2] = useState();

  const [numProbability, setProbability] = useState();

  const [changeCriticalPValue, setchangeCriticalPValue] = useState();
  const [numTestStatistic, setTestStatistic] = useState();
  // const [numCriticalDecimalPoint, setCriticalDecimalPoint] = useState();
  // const [numPValueDecimalPoint, setPValueDecimalPoint] = useState();

  const [choiceConfidenceInterval, setchoiceConfidenceInterval] = useState();
  const [numDecimalPoint, setnumDecimalPoint] = useState();

  const [numPopulationMean, setPopulationMean] = useState();
  const [numSampleAvg, setSampleAvg] = useState();
  const [numSampleSize, setSampleSize] = useState();
  const [numSampleSD, setSampleSD] = useState();

  const [selectRadioBtn, setselectRadioBtn] = useState();
  const [selectRadioBtn1, setselectRadioBtn1] = useState();

  const [numMulValue, setMulValue] = useState();

  const [fromClose, setfromClose] = useState(true);

  const inputchangeHypothesis1 = (event) => {
    setChangeHypothesis1(event.target.value);
    console.log("Hypothesis1 is ========>", event.target.value);
  };

  const inputchangeHypothesis2 = (event) => {
    setChangeHypothesis2(event.target.value);
    console.log("Hypothesis2 is ========>", event.target.value);
  };

  const inputProbability = (event) => {
    setProbability(event.target.value);
    console.log("Probability is ========>", event.target.value);
  };

  const inputchangeCriticalPValue = (event) => {
    setchangeCriticalPValue(event.target.value);
    console.log("Critical and P Value is ========>");
  };

  const inputnumTestStatistic = (event) => {
    setTestStatistic(event.target.value);
    console.log("Select Test Statistic is ========>", event.target.value);
  };

  // const inputnumCriticalDecimalPoint = (event) => {
  //   setCriticalDecimalPoint(event.target.value);
  //   console.log("Select Test Statistic is ========>", event.target.value);
  // };

  // const inputnumPValueDecimalPoint = (event) => {
  //   setPValueDecimalPoint(event.target.value);
  //   console.log("Select Test Statistic is ========>", event.target.value);
  // };

  const inputchoiceConfidenceInterval = (event) => {
    setchoiceConfidenceInterval(event.target.value);
    console.log("Click Radio Confidence Interval =======>", event.target.value);
  };

  const inputnumDecimalPoint = (event) => {
    setnumDecimalPoint(event.target.value);
    console.log("Select Decimal Point is ========>", event.target.value);
  };

  const inputPopulationMean = (event) => {
    setPopulationMean(event.target.value);
    console.log("Population Mean is ========>", event.target.value);
  };

  const inputSampleAvg = (event) => {
    setSampleAvg(event.target.value);
    console.log("Sample Avg. is ========>", event.target.value);
  };

  const inputSampleSize = (event) => {
    setSampleSize(event.target.value);
    console.log("Sample Size is ========>", event.target.value);
  };

  const inputSampleSD = (event) => {
    setSampleSD(event.target.value);
    console.log("Sample SD is ========>", event.target.value);
  };

  const inputselectRadioBtn = (event) => {
    setselectRadioBtn(event.target.value);
    console.log("Select Q - Q Plot  is ========>", event.target.value);
  };

  const inputselectRadioBtn1 = (event) => {
    setselectRadioBtn1(event.target.value);
    console.log(
      "Normality(The Shipiro Walk Test) is ========>",
      event.target.value
    );
  };

  // const handleChangeMulValue = (event) => {
  //   setMulValue(event.target.value);
  //   console.log("Multiple Value is =============>", event.target.value);
  // };

  const resetInputField = () => {
    setMulValue(" ");
  };

  const HandleCloseBtn = (event) => {
    setfromClose(false);
    console.log("Form Close =====>", event.target.value);
  };

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const solutionButtonClick = () => {
    props.getSolutionData(
      selected,
      changeHypothesis1,
      changeHypothesis2,
      numProbability,
      changeCriticalPValue,
      numTestStatistic,
      choiceConfidenceInterval,
      numDecimalPoint,
      numPopulationMean,
      numSampleAvg,
      numSampleSize,
      numSampleSD,
      numMulValue
    );
    props.sendtoparent(true);
  };

  // const [getSolutionDataObject,setSolutionDataObject] = useState({});

  // let getsolutionMulValue = (numMulValue) => {
  //   console.log("inside Parent ===============>",numMulValue);
  //   let dataobject = {};
  //   dataobject.numMulValue = numMulValue;
  //   setSolutionDataObject(dataobject);
  // }

  /* --------------------- Decimal Point Test Statistic, P Value, Critical value   */

  const [selected, setSelected] = useState(" ");

  const changeSelectOptionHandler = (event) => {
    setSelected(event.target.value);
    console.log(
      "Select Decimal Critical and P value is ========>",
      event.target.value
    );
  };

  const [data_array, setArray] = useState([]);

  const handleChangeMulValue = (event) => {
    // console.log(numMulValue);
    let a = [];
    let b = [];
    let c = [];
    setMulValue(event.target.value);
    const myArr = event.target.value.split("\n");
    for (let i = 0; i < myArr.length; i++) {
      a = myArr[i].split(" ");
      for (let j = 0; j < a.length; j++) {
        b = a[j].split(",");
        c = c.concat(b);
      }
    }
    let d = [];
    for (let i = 0; i < c.length; i++) {
      if (c[i] != "") {
        d.push(parseFloat(c[i]));
      }
    }
    console.log(d);
    setArray(d);
    let mean = jStat.mean(d);
    let sd = jStat.pooledstdev([d]);
    let sdLess = jStat.stdev(d);
    // if (sdLess < sd) {
    //   console.log("The SD is more than 30");
    // } else {
    //   console.log("The SD less than 30");
    // }
    let sample = d.length;
    console.log(sample);
    console.log(mean);
    console.log(sd);
    console.log(sdLess);
  };

  const [numInputInsert, setInputNum] = useState([]);

  const handleChangeMultipleValue = (event) => {
    setInputNum(event.target.value);
    console.log("Row Data Calculate Summary ", data_array);
    //props.getsolutionMulValue(numMulValue);
  };

  const Teststatistic = ["1", "2", "3"];

  const CriticalValue = ["1", "2", "3"];

  const PValue = ["1", "2", "3", "4"];

  let type = null;
  let options = null;
  if (selected === "Test Statistics") {
    type = Teststatistic;
  } else if (selected === "Critical Value") {
    type = CriticalValue;
  } else if (selected === "P Value") {
    type = PValue;
  }
  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>);
  }
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h3 className="text1">Enter Data :</h3>
      <div className="container fluid">
        <div className="row getsolution">
          <div className="col-lg-12 col-sm-12 box">
            <div className="input container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row " style={{ justifyContent: "right" }}>
                    <div className="col-lg-6 col-6  text align-self-center">
                      <p>Hypothesis : </p>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>Ho: μ</p>
                    </div>
                    <div className="col-lg-2 mar">
                      <select
                        className="inputfield"
                        id="test"
                        name="testlist"
                        value={changeHypothesis1}
                        onChange={inputchangeHypothesis1}
                      >
                        <option className="inputfield" value="Select">
                          Select
                        </option>
                        <option
                          className="inputfield"
                          value=" = "
                          style={{ textAlign: "center" }}
                        >
                          {" = "}
                        </option>
                        <option
                          clacssName="inputfield"
                          value="≤"
                          style={{ textAlign: "center" }}
                        >
                          {" ≤ "}
                        </option>
                        <option
                          className="inputfield"
                          value=" ≥ "
                          style={{ textAlign: "center" }}
                        >
                          {" ≥  "}
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>μo</p>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>Ha: μ</p>
                    </div>
                    <div className="col-lg-2 mar justify-content">
                      <select className="inputfield" id="test" name="testlist"
                      value={changeHypothesis2}
                      onChange={inputchangeHypothesis2}
                      >
                        <option className="inputfield" value="Select">
                          Select
                        </option>
                        <option
                          className="inputfield"
                          value=" ≠ "
                          style={{ textAlign: "center" }}
                        >
                          {"≠"}
                        </option>
                        <option
                          clacssName="inputfield"
                          value=" < "
                          style={{ textAlign: "center" }}
                        >
                          {"< "}
                        </option>
                        <option
                          className="inputfield"
                          value=" > "
                          style={{ textAlign: "center" }}
                        >
                          {">"}
                        </option>
                      </select>
                    </div>
                    <div className="col-lg-2 mar">
                      <p>μo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Significance Level (α) :</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <input
                        type="text"
                        className="inputfield"
                        placeholder="0.05"
                        onChange={inputProbability}
                        value={numProbability}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 col-6 mar text align-self-center">
                      <p>Approach :</p>
                    </div>
                    <div className="col-lg-6 col-6 mar">
                      <select className="inputfield" id="test" name="testlist"
                      value={changeCriticalPValue}
                      onChange={inputchangeCriticalPValue}
                      >
                        <option className="inputfield" value="volvo">
                          Both (P Value and Critical Value)
                        </option>
                        <option className="inputfield" value="saab">
                          {" Critical value"}
                        </option>
                        <option className="inputfield" value="saab">
                          {" P value"}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-6 mar col-6 text ">
                      <p>Decimal Point :</p>
                    </div>
                    <div className="col-lg-6 mar col-6">
                      <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          onChange={changeSelectOptionHandler}
                          value={selected}
                          style={{ marginBottom: "10px" }}
                        >
                          <option>Select Decimal Point</option>
                          <option>Test Statistics</option>
                          <option>Critical Value</option>
                          <option>P Value</option>
                        </select>
                      </div>
                      <div>
                        <select
                          className="inputfield"
                          id="test"
                          name="testlist"
                          value={numTestStatistic}
                          onChange={inputnumTestStatistic}
                        >
                          {options}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12 ">
                  <div className="row  justify-content-center">
                    <div className="col-lg-8 mar col-6 text align-self-center">
                      <FormControlLabel
                        value="end"
                        control={<Radio color="primary" />}
                        label="Confidence Interval for μ "
                        value={choiceConfidenceInterval}
                        onChange={inputchoiceConfidenceInterval}
                      />
                    </div>
                    <div className="col-lg-4 mar col-6">
                      <select className="inputfield" id="test" name="testlist"
                      value={numDecimalPoint}
                      onChange={inputnumDecimalPoint}
                      >
                        <option
                          className="inputfield"
                          value="Select_Decimal_Point"
                        >
                          Select Decimal Point
                        </option>
                        <option className="inputfield" value="4">
                          4
                        </option>
                        <option className="inputfield" value="5">
                          5
                        </option>
                        <option className="inputfield" value="6">
                          6
                        </option>
                        <option className="inputfield" value="7">
                          7
                        </option>
                        <option className="inputfield" value="8">
                          8
                        </option>
                        <option className="inputfield" value="9">
                          9
                        </option>
                        <option className="inputfield" value="10">
                          10
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-12 col-12 row rowdata ">
            <h3 className="get1-text">
              Enter summarized data (μ0, x̅, n, σ) below
            </h3>
            <div className="btn">
              <NavLink
                class="nav-link active"
                data-toggle="tab"
                href=""
                role="tab"
                to="rowdata"
              >
                <button type="submit" className="solution-btn ml-3"
                onClick={handleShow}>
                  Enter Raw Data
                </button>
              </NavLink>
            </div>
            <div className="btn">
              <button type="submit" className="solution-btn ml-3">
                From Excel
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-12 col-12 box">
          <div className="input container">
            <div className="row justify-content-center">
              <div className="col-lg-12 col-12 ">
                <div className="row justify-content-center">
                  <div className="col-lg-12 col-12 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Expected population mean (μ0):</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="578"
                              value={numPopulationMean}
                              onChange={inputPopulationMean}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Sample average (x̅) :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="527"
                              value={numSampleAvg}
                      onChange={inputSampleAvg}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Sample size (n) :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="10"
                              value={numSampleSize}
                      onChange={inputSampleSize}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-12 mar text align-self-center">
                    <div className="row">
                      <div className="col-lg-12 col-12">
                        <div className="row">
                          <div className="col-lg-6 col-6 mar text align-self-center">
                            <p>Population SD (σ) :</p>
                          </div>
                          <div className="col-lg-6 col-6 mar">
                            <input
                              type="text"
                              className="inputfield"
                              placeholder="12.72"
                              value={numSampleSD}
                      onChange={inputSampleSD}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="row justify-content-center">
                                        <div className='col-lg-6 col-6 mar text align-self-center'>
                                            <div className="row">
                                                <div className="col-lg-12 col-12">
                                                    <div className="row">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-12 col-12">
            <div className="row  justify-content-center">
              <div className="col-lg-6 mar col-6 text align-self-center">
                <div className="btn">
                  <button
                    type="submit"
                    className="solution-btn"
                    onClick={solutionButtonClick}
                  >
                    Solution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container fluid">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-12 box row_data2">
              <div className="input container">
                <div className="row ">
                  <div className="col-lg-12 col-12 ">
                    <div className="row">
                      <div className="col-lg-12 col-12 row rowdata">
                        <h1 className="get-text">Enter Row Data :</h1>
                        <HighlightOffIcon
                    type="button"
                    value={fromClose}
                    onClick={HandleCloseBtn}
                  />
                      </div>
                    </div>
                    <p className="sol-text">Note:</p>
                    <p>1.You may change the group name to real name</p>
                    <p>
                      2. When entering data, each value separated by Enter/
                      space / comma
                    </p>
                    <div className="col-lg-10 col-10 ">
                      <div className="row">
                        <div className="Col-lg-3 col-3">
                          <div className="group-box">
                            <div class="row4">
                              <p>Group 1 </p>
                            </div>
                            <div className="form-group">
                              <label htmlFor="FormControlTextarea1"></label>
                              <textarea
                                className="form-control2"
                                id="exampleFormControlTextarea1"
                                rows="10"
                          cols="34"
                          maxLength="1003"
                          value={numMulValue}
                          onChange={handleChangeMulValue}
                          // onClick={showHideKeys(this)}
                              />
                            </div>
                          </div>
                          <p>Total observations: 4</p>
                          <br></br>
                        </div>
                      </div>
                    </div>
                    <p className="sol-text">Optional :</p>
                    <RadioGroup
                      aria-label="gender"
                      name="gender1"
                      value={value}
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value="female"
                        onClick={inputselectRadioBtn}
                        control={<Radio color="primary" />}
                        label="Q - Q plot (Quantile - Quantile Plot) "
                      />
                      <FormControlLabel
                        value="end"
                        onClick={inputselectRadioBtn1}
                        control={<Radio color="primary" />}
                        label="Normality    (The shipiro walk test)"
                      />
                    </RadioGroup>
                    <div className="col-lg-12 col-6 mar">
                      <div className="btn">
                        <button type="submit" className="solution-btn ml-3"
                        onClick={handleChangeMultipleValue}>
                          Calculate Summary
                        </button>
                        <button type="submit" className="solution-btn2 ml-3"
                         onClick={resetInputField}>
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Onesample_Ztest_GetSolution;

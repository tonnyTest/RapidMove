import React from 'react'
import { useState } from 'react'

// import basement from '../../../assets/images/basement.png'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
} from '@coreui/react'



const Calculator = () => {

  // const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);

  const [typeCalci, setTypeCalci] = useState("1");
  const [total, setTotal]=useState("");

  // useEffect(()=>{
  //   document.querySelector('#result').value="";
  // },[])
  
  // useEffect(()=>{
  //   if(clear)
  //   document.querySelector('#result').value="";
  // })

  function findTotal(){
    var arr = document.getElementsByName('qty');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
  }


  // const Add=(e)=>{
  //   e.preventDefault();
  //   if(clear) setClear(false);
  //   let currentNum=document.querySelector('#num').value
  //   if(currentNum=='')
  //   return;
  //   let sum= currentSum+parseInt(currentNum);
  //   setCurrentSum(sum);
  //   document.querySelector('#num').value="";
      
  // }

  // const Clear=(e)=>{
  //   e.preventDefault();
  //   console.log('sum:', currentSum);
  //   document.querySelector('form').reset();
  //   setClear(true);
  //   setCurrentSum(0);
  // }

  const selectCalci = (e) =>{
    const val = e.target.value;
    setTypeCalci(val);
  }
  const submitTotal = (e) =>{
    e.preventDefault();  
  }

  // const oldValueRef = React.useRef(0)
  //   let constValue = (e) => {
  //       const oldValue = oldValueRef.current;
  //       let newValue = e.target.value; // let oldValue = will be here
    
  //       // after everything     
  //       oldValueRef.current = e.target.value;
  //   }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Car Park</strong> <small>calulator</small>
          </CCardHeader>
          <CCardBody>
          <div className="row">
            <div className="app-title" style={{   width: "20%"}} >
              <select className="form-select" 
                  style={{   padding: "5px 5px 5px 12px"}}
                  onChange={ (e)=> (selectCalci(e))}
                  aria-label="Default select example">
                    {/* <option selected>Open this select menu</option> */}
                    <option value="1" >Four Wheeler</option>
                    <option value="2">Two Wheeler</option>
                    <option value="3">Others</option>
              </select>
            </div>
            {/* <form>
                  <input type="text" id="result" value={currentSum}  readOnly />   
                  <input type="text" id="num" placeholder="enter a number" />
                  <button onClick={Add}>Add</button>
                  <button onClick={Clear}>Clear</button>
            </form> */}
            
            {
              typeCalci==='1' && (

            <div className="calci-wrap" style={{ position: "relative" }} value={typeCalci} >
               <form className="needs-validation" >
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label>Free Time</label>
                    <input type="text" className="form-control" 
                     
                    id="validationTooltip01" placeholder="A"  required />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price Per Hour</label>
                    <input type="text" className="form-control" 
                    // onChange={constValue}  
                    id="validationTooltip02" placeholder="0.0" required />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Total Amount</label>
                    <input type="text" className="form-control"
                    onChange={(e)=>setTotal(e.target.value)} value={total}
                    id="validationTooltip03" placeholder="0.0" required readOnly/>
                  </div>
                </div>
                <div className="form-row row justify-content-center">
                  <button className="btn btn-primary col-md-3" onClick={ submitTotal } >Final Price</button>
                </div>
              </form> 
            </div>

            )}

            {
              typeCalci==='2' && (

            <div className="calci-wrap" style={{ position: "relative" }} value={typeCalci} >
               <form className="needs-validation" >
                  <div className="form-row row justify-content-center">
                    <div className="col-md-3 mb-3">
                      <label>Free Time</label>
                      <input type="text" 
                      
                      className="form-control" id="validationTooltip01" placeholder="A"  required />
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationTooltip02">Price Per Hour</label>
                      <input type="text" className="form-control" id="validationTooltip02" placeholder="0.0" required />
                  </div>
                  </div>
                  <div className="form-row row justify-content-center">
                    <div className="col-md-3 mb-3">
                      <label htmlFor="validationTooltip01">Total Amount</label>
                      <input type="text" className="form-control" id="validationTooltip03" placeholder="0.0" required />
                    </div>
                  </div>
                  <div className="form-row row justify-content-center">
                    <button className="btn btn-primary col-md-6"  >Final Price</button>
                  </div>
                </form>  
            </div>

            )}

            {
              typeCalci==='3' && (

            <div className="calci-wrap" style={{ position: "relative" }} value={typeCalci} >
                <form className="needs-validation" >
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label>Demand Factor</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="A"  required />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price Per Hour</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Y" required />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Hour</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder="H" required />
                  </div>
                  <div className="col-md-3 mb-3 justify-content-center">
                    <label htmlFor="validationTooltip02">Base Rate</label>
                    <input type="text" className="form-control" id="validationTooltip04" placeholder="B" required />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Price Of Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip05" placeholder="Peh"  />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">No. Of Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip06" placeholder="Eh"  />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Price Per Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip07" placeholder="Yeh"  />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Total : </label>
                    <input type="text" className="form-control" id="validationTooltip08" placeholder="Total"  />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <button className="btn btn-primary col-md-6" >Final Price</button>
                </div>
              </form> 
            </div>

            )}

            {/* <form className="needs-validation" >
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label>Demand Factor</label>
                    <input type="text" className="form-control" id="validationTooltip01" placeholder="A"  required />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Price Per Hour</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder="Y" required />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Hour</label>
                    <input type="text" className="form-control" id="validationTooltip03" placeholder="H" required />
                  </div>
                  <div className="col-md-3 mb-3 justify-content-center">
                    <label htmlFor="validationTooltip02">Base Rate</label>
                    <input type="text" className="form-control" id="validationTooltip04" placeholder="B" required />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Price Of Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip05" placeholder="Peh"  />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">No. Of Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip06" placeholder="Eh"  />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip01">Price Per Extra Hour</label>
                    <input type="text" className="form-control" id="validationTooltip07" placeholder="Yeh"  />
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="validationTooltip02">Total : </label>
                    <input type="text" className="form-control" id="validationTooltip08" placeholder="Total"  />
                 </div>
                </div>
                <div className="form-row row justify-content-center">
                  <button className="btn btn-primary col-md-6"  onClick={Add}>Final Price</button>
                </div>
              </form> */}
          </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Calculator;

import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import basement from '../../../assets/images/base.png'
import '../../../assets/css/style.css'

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CImage,
} from '@coreui/react'



const Map = () => {

  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);
  const [show, setShow] = useState("1");

  useEffect( () => {
    axios.get('https://rapidmove.herokuapp.com/gateway')
    .then((resp) => setArr(resp.data.occupancy));
  }, []);

  // Parking Numbers show
  useEffect( () => {
    axios.get('https://rapidmove.herokuapp.com')
    .then((resp) => setData(resp.data.display_data));     
  }, []);

  // Map switch on select
  const handleDiv = (e) =>{
    const val = e.target.value;
    setShow(val);
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <CRow>
              <CCol md={2}>
                <select className="form-select" 
                  style={{   padding: "5px 5px 5px 12px"}}
                  onChange={ (e)=> (handleDiv(e))}
                  aria-label="Default select example">
                    <option value="1" >Basement</option>
                    <option value="2">Floor - 1</option>
                    <option value="3">Floor - 2</option>
                </select>
               </CCol>
               <CCol md={3}>
                  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ padding: "4px 12px"}} >
                    <i className="fa-solid fa-eye"></i>
                  </button>

                  <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="staticBackdropLabel">Parking Details :</h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                          <table className="table table-hover">
                              <thead>
                                <tr>
                                  <th scope="col">Area</th>
                                  <th scope="col">Total</th>
                                  <th scope="col">Occupied</th>
                                  <th scope="col">Available</th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <td>Basement</td>
                                  <td>{data.total_parking}</td>
                                  <td>{data.occupied_parking}</td>
                                  <td>{data.available_parking}</td>
                                </tr>
                                <tr>
                                  <td>Floor - 1</td>
                                  <td>145</td>
                                  <td>145</td>
                                  <td>546</td>
                                </tr>
                                <tr>
                                  <td>Floor - 2</td>
                                  <td>223</td>
                                  <td>17</td>
                                  <td>002</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>

               </CCol>
            </CRow>
          </CCardHeader>
          <CCardBody>
            
            {
              show==='1' && (

                <div className="form un-select" style={{ position: "relative" }} value={show}>
            
             
                <div style={{ position: "absolute" , top: "-3px " , left: "-3px" , zIndex: 200 , width:  "100%" ,  height: "100%" }}
                    className="infoBuss" id="infoBuss">


{arr.map(( eve, index) =>{
                      if( index === 0 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 1 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '116px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '116px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '116px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 2 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '154px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '154px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '154px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 3 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '180px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '180px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '180px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 4 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '215px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '215px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '215px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 5 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '251px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '251px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '251px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 6 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '288px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '288px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '288px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 7 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '315px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '315px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '315px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}



{arr.map(( eve, index) =>{
                      if( index === 8 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '355px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '355px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '355px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}



{arr.map(( eve, index) =>{
                      if( index === 9 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '225px' , top: '155px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{   left : '225px' , top: '155px'  }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{   left : '225px' , top: '155px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 10 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 11 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 12 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 13 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 14 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 15 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 16 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 17 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 18 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{ 
                      if( index === 19 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 20 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 21 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 22 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 23 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}

{arr.map(( eve, index) =>{
                      if( index === 24 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


{arr.map(( eve, index) =>{
                      if( index === 25 )
                      { 
                        return ( <>
                          { eve.value == 0 ? <span className="badge-dot " value={eve.value} style={{  left : '133px' , top: '86px' }}></span> : eve.value == '1' ? <span className="badge-dot red" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                            : <span className="badge-dot black" value={eve.value} style={{  left : '133px' , top: '86px' }}></span>
                          }                        
                        </>); 
                      }
                    }
                    )}


                  </div>
                  <CImage src={basement} fluid className="mb-2"/>
                </div>

              )
            }

            {
              show==='2' && (

            <div className="form un-select" style={{ position: "relative" }} value={show} >
              <div style={{ position: "absolute" , top: "-3px " , left: "-3px" , zIndex: 200 , width:  "100%" ,  height: "100%" }}
                className="infoBuss" id="infoBuss">

              </div>
              <CImage src={basement} fluid className="mb-2"/>
            </div>

            )}
            
            {
              show==='3' && (

            <div className="form un-select" style={{ position: "relative" }} value={show} >
              <div style={{ position: "absolute" , top: "-3px " , left: "-3px" , zIndex: 200 , width:  "100%" ,  height: "100%" }}
                className="infoBuss" id="infoBuss">

                <span className="badge-dot " id="2" style={{ position: "absolute" , left: "133px" , top: "85px", backgroundColor: "#0bd508" , padding: "10px", borderRadius: "50%"  }}></span>

              </div>
              <CImage src={basement} fluid className="mb-2"/>
            </div>
            
            )}

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Map;

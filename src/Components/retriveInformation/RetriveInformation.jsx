import React, { useState,Fragment } from 'react'
import { useSelector } from 'react-redux';
import './retrive.css';

const RetriveInformation = () => {

  const [finddata, setfinddata] = useState("")
  const [storedata, setstoredata] = useState([])


  const { addperdata } = useSelector((state) => state.addperson)

 


  const searchdatabaedonadhar = (finddata) => {
    const newdata = addperdata.filter((item) =>{
      return item.adharno === finddata
    })
    setstoredata(newdata)
  }



  return (
    <>
      <div className="container contain">
        <div className="row">
          <div className="col-3 row1">Retrive Information</div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-3 col-md-3 col-lg-3 inputadhardiv">
            <input type="number" placeholder='Enter Adhar No.' value={ finddata } onChange={ (e) => setfinddata(e.target.value) } />
          </div>
          <div className="col-sm-9 col-md-9 col-lg-9">
            <button type="button" className="btn btn-primary" onClick={ () => searchdatabaedonadhar(finddata)
            } >Find Data</button>
          </div>
        </div>

        <div className="row mt-4 ">
          <div className="col datashowdiv">
            {
              storedata.length > 0 ? <>
                { 
                 storedata && storedata.map((item, id) => {
                  return <Fragment key={id}>
                  <div className='detaisldiv'>

                    <h3>Name : { item.names }</h3>
                    <p>DOB : { item.dob }</p>
                    <p>Adhar NO. :  { item.adharno }</p>
                    <p>Mobile NO. :{ item.mobileno }</p>
                    <p> Age : { item.age }</p>
                  </div>
                  </Fragment>
                }) }
              </> : <h2>No data matched </h2>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RetriveInformation
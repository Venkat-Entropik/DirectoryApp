import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react'
import './addperson.css'

import {addpersondata} from '../../redux/addPersonSlice'
import { deletepesron } from '../../redux/addPersonSlice'
import { useState } from 'react'
import { useEffect } from 'react'

const Addperson = () => {

  const [names, setNames] = useState("")
  const [dob, setDob] = useState('')
  const [mobileno, setMobileno] = useState("")
  const [adharno, setAdharno] = useState("")
  const [age, setAge] = useState("")

  const dispatch = useDispatch()
  const { addperdata } = useSelector((state) => state.addperson)

 

  const handledata = () => {
   
    if (mobileno.length !== 10){
      alert("Mobile Number must be in 10 digits")
    }else if(adharno.length !== 12){
        alert("Aadhar Number must be 12 digits")
    }
    else if(names === ''){
      alert("Enter Name")
    }
    else if(dob === ''){
      alert("Enter Date of Birth")
    }
    
    
    else {
      dispatch(addpersondata({
        ...addperdata,
        names: names,
        dob: dob,
        adharno: adharno,
        mobileno: mobileno,
        age: age,
        id: Date.now()
      }))
      setNames(" ")
      setDob(" ")
      setAdharno(" ")
      setMobileno(" ")
      setAge(" ")
    }

  }

  useEffect(() => {
    if(dob !== ''){
      let year=dob.slice(0,4);
      console.log((year));
      setAge(2023-year)
    }
  }, [dob])
  
  

  const deletehandle = (id) => {
    dispatch(deletepesron(id))
  }



  return (
    <>
      <div className="container mainpart">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-9 row1">Add New Person</div>
        </div>



        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <table className="table table-bordered border-dark">
                <thead className='thead'>
                  <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Mobile Number</th>
                    <th>Adhar Number</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  
                    {
                      addperdata && addperdata.map((ele, id) => {
                        return (
                          <Fragment key={ id }>
                            <tr className='trmain'>
                              <td className='names'>{ ele.names }</td>
                              <td>{ ele.dob }</td>

                              <td>{ ele.mobileno }</td>
                              <td>{ ele.adharno }</td>

                              <td>{ ele.age }</td>

                              <td> <button className='btn2'>save</button> <button className='btn2' onClick={ () => deletehandle(id) }> delete </button></td>
                            </tr>
                          </Fragment>
                        )
                      })
                    }
                  


                  <tr className='inputetext'>
                    <td><input type="text" value={ names } onChange={ (e) => setNames(e.target.value) } /></td>

                    <td><input type="date" value={ dob } onChange={(e)=>{
                      setDob(e.target.value)
                      
                    }} /></td>



                    <td><input type="text" value={ mobileno } onChange={ (e) => {
                      setMobileno(e.target.value)
                     
                      
                    } } /></td>

                    <td><input type="text" value={ adharno } onChange={ (e) => {
                      setAdharno(e.target.value)
                    } } /></td>



                    <td className='age'><input type="number" value={ age }  /></td>

                    <td><button className='btn2'>save</button><button className='btn2'>delete</button> </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col btndiv">
            <button type="button" className="btn btn-primary" onClick={ handledata }>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addperson;
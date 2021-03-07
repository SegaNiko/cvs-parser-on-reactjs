import React,{useState} from 'react'

import keys from "../../consts/keys"
import { validation,checkDuplicate } from '../../parser/validation'

import CsvParse from '../../parser/parcer'
import {Table} from '../Table/Table';
import { Error } from '../Error/Error';
import { InputFile } from '../InputFile/InputFile';


const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const handleData = data => {
    setData({ data })
  }
  const handleError = error => {
    setError(error)
  };

  // convetn responce from parser obj{data[]}  to table
  const convert = (obj) => {
    // check Error and convert to 
    const newArr = obj.data.map((item, index) =>{
      return Object.entries(item).reduce((acc, [key,value]) => {
        return {...acc, [key]: validation(key,value)}
      },{id: index + 1, duplicate: [],})
    })
    // Test result
    // console.log(newArr) 
    const finallyArr = checkDuplicate(newArr)
    //    Test result
    console.log("Result, =" ,finallyArr)
    // create and rendering table
    return <Table arr={finallyArr} />
  }

  return (
    <>  
      <header>
        <h1 className="green accent-2">Demo React Csv Parse</h1> 
      </header>
      <div className="container">    
        {/* Component-parser  */}
        <CsvParse
          keys={keys}
          onDataUploaded={handleData}
          onError={handleError}
          render={onChange => {return(<InputFile onChange={onChange} />)}}
        />
        
        {/* Rendering content  error or component */}
       {!error && data ? convert(data) : error ? <Error></Error> : <div></div>}
      
     </div>
   </>
  )  
}

export default App;

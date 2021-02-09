import React,{useState} from 'react'

import keys from "../../consts/keys"
import { validation } from '../../parser/validation'

import CsvParse from '../../parser/parcer'
import Table from '../Table/Table';

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
    const checkDuplicate = newArr.map(item => {
      // cycle for find duplicate user
      for (let i = 0; i < newArr.length ; i++ ) {
        if (newArr[i] !== item) {
          if (newArr[i].FirstName.value === item.FirstName.value || 
            newArr[i].Phone.value === item.Phone.value || 
            newArr[i].Email.value === item.Email.value){
              item.duplicate = [...item.duplicate,newArr[i].id]
          }
        }
      }
      return item
    })
    //    Test result
    console.log(checkDuplicate)
    // create and paint table
    return <Table arr={checkDuplicate} />
  }

  return (
    <>  
      <header><h1 className="green accent-2">Demo React Csv Parse</h1> </header>
      
      <div className="container">    
        {/* Component-parser  */}
        <CsvParse
          keys={keys}
          onDataUploaded={handleData}
          onError={handleError}
          render={onChange => {
            return(
              <div className="input__wrapper">
              <input id="input__file" name="file" type="file" className="input input__file" onChange={onChange} />
              <label htmlFor="input__file" className="input__file-button" >
                <span className="input__file-icon-wrapper"><i className="fas fa-cloud-download-alt"></i></span>
                <span className="input__file-button-text">Choose one file</span>
              </label>
              </div>)}}
        />
        {/* Painted content  */}
       {!error && data ? convert(data) : error ? (
       <div className="error">
         <h3 className="error__title">Error: file not parsed</h3>
         <p className="error__text">Please check format file before send it is must be .cvs</p>
         <img className="error__img" alt="think-about" src="https://lh3.googleusercontent.com/proxy/ta8pnf2KDpMolgBHsrGI6TyJ3UAbzzPMvziOVXpT5z8W-8xw5RSAql_1BaYf449sR7yFoYDroMDG9gJIkUlDda_5KU9IPMkmPFR0qPwR_hDFx4yZMMtgkaj2ng"/>
       </div>
       ) : <div></div>}

     </div>
   </>
  )  
}

export default App;

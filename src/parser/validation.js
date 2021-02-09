export const validation = (key, value) => { 
       // eslint-disable-next-line no-useless-escape
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       // eslint-disable-next-line no-useless-escape
  const regPhone = /^(\+1|1)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;

  switch (key) {
    case 'FirstName' : 
     if (value) {
        return {value: value.trim(), hasError : false}
     } else {
       return {value: value.trim(), hasError : true}
      }
     
    case 'Phone' :
      if (regPhone.test(value) === true) {
        return {value: value.trim(), hasError: false }
      } else return {value: value.trim(), hasError: true }

    case 'Email' :
      if (regEmail.test(value) === true) {
        return {value: value.trim(), hasError: false }
      } else return {value: value.trim(), hasError: true }
     
    case 'Age' :
      if (value >= 21 && value !== 0) {
        return {value: value.trim(), hasError: false }
      } else  return {value: value.trim(), hasError: true }
     
      // bad Validation TODO
    case 'Experience':
      if (value < 30 && value >= 0) {
        return {value: value.trim(), hasError: false }
      } else  return {value: value.trim(), hasError: true}
     
    case 'YearlyIncome': 
      if (value) {
        return {value: value.trim().substr(0,8), hasError: false }
      } else return {value: value.trim().substr(0,8), hasError: true }
      
    case 'Haschildren' :
      if (value.toLowerCase() === "false" || value === "") {
        return {value: "false", hasError: false }
      } 
      if (value.toLowerCase() === "true") {
        return {value: "true", hasError: false }
      } else return {value: "", hasError: true }
      
    case 'Licensestates' :
      if (value) return {value: value.trim(), hasError: false }
      else return {value: value.trim(), hasError: true }
      
    case 'Expirationdate' :
      if (Date.parse(new Date(value)) < Date.parse(new Date())){
        if (value) return {value: value.trim(), hasError: false }
      } else return {value: value.trim(), hasError: true }
      break
    case 'Licensenumber' :
      if (value.length !== 6){
        return {value: value.trim(), hasError: true }
      } else return {value: value.trim(), hasError: false }
     

    default : return {value: value.trim(), hasError: false }
  } 
}

      
      
     
     


      
     
      
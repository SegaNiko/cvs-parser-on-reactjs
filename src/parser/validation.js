const generateObj = (value, hasErr) => {
  return {value: value.trim(), hasError: hasErr}
}

export const validation = (key, value) => { 
       // eslint-disable-next-line no-useless-escape
  const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
       // eslint-disable-next-line no-useless-escape
  const regPhone = /^(\+1|1)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
       // eslint-disable-next-line no-useless-escape
  const regListenNum = /^[a-z0-9_-]{6}$/;

  switch (key) {
    case 'FirstName' : 
     if (value) {
        return generateObj(value,false)
     } else {
       return generateObj(value,true)
      }
     
    case 'Phone' :
      if (regPhone.test(value) === true) {
        return generateObj(value, false)
      } else return generateObj(value, true)

    case 'Email' :
      if (regEmail.test(value.trim()) === true) {
        return generateObj(value, false)
      } else return generateObj(value, true)
     
    case 'Age' :
      if (value >= 21 && value !== 0) {
        return generateObj(value, false)
      } else  return generateObj(value, true)
     
      // bad Validation TODO
    case 'Experience':
      if (value) {
        return generateObj(value, false)
      } else  return generateObj(value, true)
     
    case 'YearlyIncome': 
      if (value < 1000000) {
        return {value: value.trim().substr(0,8), hasError: false }
      } else return {value: value.trim().substr(0,8), hasError: true }
      
    case 'Haschildren' :
      if (value.toLowerCase() === "false" || value === "") {
        return generateObj(value = "false", false)
      } 
      if (value.toLowerCase() === "true") {
        return generateObj(value = "true", false)
      } else return generateObj(value = "", true)
      
    case 'Licensestates' :
      if (value) return generateObj(value, false)
      else return generateObj(value, true)
      
    case 'Expirationdate' :
      if (Date.parse(new Date(value)) < Date.parse(new Date())){
        if (value) return generateObj(value, false)
      } else return generateObj(value, true)
      break
    case 'Licensenumber' :
      if (regListenNum.test(value) === true){
        return generateObj(value, false)
      } else return generateObj(value, true)

    default : return generateObj(value, false)
  } 
}

export const checkDuplicate = (arr) => {
  const newArr =  arr.map(item => {
    // Check Experiance with Age
    if (+item.Experience.value >= 0 && +item.Experience.value < +item.Age.value ){
      item.Experience.hasError = false
    } else item.Experience.hasError = true

    for (let i = 0; i < arr.length ; i++ ) {
      if (arr[i] !== item) {
        if (arr[i].FirstName.value === item.FirstName.value || 
          arr[i].Phone.value === item.Phone.value || 
          arr[i].Email.value.toLowerCase() === item.Email.value.toLowerCase()){
            item.duplicate = [...item.duplicate,arr[i].id]
        }
      }
    }
    return item
  })

  return newArr
}
      
      
     
     


      
     
      
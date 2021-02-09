import React from 'react'
import PropTypes from 'prop-types'

const Table = ({arr}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Full Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Age</th>
          <th>Experience</th>
          <th>Yearly Income</th>
          <th>Has children</th>
          <th>License states</th>
          <th>Expiration date</th>
          <th>License number</th>
          <th>Duplicate</th>
        </tr>
      </thead>
      <tbody>
       {arr.map(item => (
         <tr key={item.FirstName.value + item.id}>
            <td className="table__td">{item.id}</td>
            <td className={item.FirstName.hasError ? "table__td-err" : "table__td"}>{item.FirstName.value}</td>
            <td className={item.Phone.hasError ? "table__td-err" : "table__td"}>{item.Phone.value}</td>
            <td className={item.Email.hasError ? "table__td-err" : "table__td"}>{item.Email.value}</td>
            <td className={item.Age.hasError ? "table__td-err" : "table__td"}>{item.Age.value}</td>
            <td className={item.Experience.hasError ? "table__td-err" : "table__td"}>{item.Experience.value}</td>
            <td className={item.YearlyIncome.hasError ? "table__td-err" : "table__td"}>{item.YearlyIncome.value}</td>
            <td className={item.Haschildren.hasError ? "table__td-err" : "table__td"}>{item.Haschildren.value}</td>
            <td className={item.Licensestates.hasError ? "table__td-err" : "table__td"}>{item.Licensestates.value}</td>
            <td className={item.Expirationdate.hasError ? "table__td-err" : "table__td"}>{item.Expirationdate.value}</td>
            <td className={item.Licensenumber.hasError ? "table__td-err" : "table__td"}>{item.Licensenumber.value}</td>
            <td className="table__td">{item.duplicate.map(val => `${val} `)}</td>
        </tr>
        ))}
     </tbody>
    </table>
  )
}

Table.propTypes = {
  arr: PropTypes.array.isRequired
}

export default Table;
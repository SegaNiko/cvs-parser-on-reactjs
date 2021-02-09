import PropTypes from 'prop-types'

import Papa from 'papaparse'
import { apply, compose, lift, splitAt, zipObj } from 'ramda'

const CsvParse = ({render, keys, onDataUploaded, onError }) => {

  const handleFile = event => {
    const file = event.target.files[0];
    const fileFail = file.name.split(".").pop() !== "csv";

    // Documentation https://www.papaparse.com/
    Papa.parse(file, {
      skipEmptyLines: true,
      error (err, file, inputElem, reason)  {
        onError({ err, file, inputElem, reason })
      },
      complete: function(results) {
        const data = results.data

        // remove display headers
        data.shift()

        // add api headers
        data.unshift(keys)

        // convert arrays to objects
        const formatedResult = compose(
          apply(lift(zipObj)),
          splitAt(1),
        )(data)

        // send result to state
        onError(fileFail)
        onDataUploaded(formatedResult)
      },
    })
  }
  return (render(handleFile))
}

CsvParse.propTypes = {
  keys: PropTypes.array.isRequired,
  onDataUploaded: PropTypes.func.isRequired,
  onError: PropTypes.func,
}

export default CsvParse

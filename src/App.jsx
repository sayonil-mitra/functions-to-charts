import { useState } from 'react'
import './App.css'
import SmoothLineChart from './components/smooth-line-chart/smooth-line-chart'
import { DISTRIBUTIONS } from './components/smooth-line-chart/utils/constants'

function App() {

  const [yearWiseFunctions, setFunctions] = useState(Array(10).fill("normal"))
  const [selectedYear, setYear] = useState(0)
  const [startingPoint, setStartingPoint] = useState(1000)
  const [selectedYearFunction, setSelectedFunction] = useState("normal")

  function handleDistChange(event) {
    let distributionName = event.target.value
    setSelectedFunction(distributionName)
    setFunctions(prev => {
      let temp = [...prev]
      temp[selectedYear] = distributionName
      return temp
    })
  }

  return (
    <>
      Choose Year:
      <select value={selectedYear} onChange={e => setYear(e.target.value)}>
        {yearWiseFunctions.map((year, index) => <option value={index} key={`year-${index}`}>
          {index}
        </option>)}
      </select>
      &nbsp;
      Choose distribution:
      <select value={yearWiseFunctions[selectedYear]} onChange={handleDistChange}>
        {DISTRIBUTIONS.map((dist, index) => <option key={`${dist}-${index}`}>
          {dist}
        </option>)}
      </select>
      <br />
      Starting point:
      <input placeholder='default 1000' value={startingPoint} onChange={e => setStartingPoint(parseInt(e.target.value))} type='number' />
      <SmoothLineChart yearWiseFunctions={yearWiseFunctions} startingPoint={startingPoint} />
    </>
  )
}

export default App

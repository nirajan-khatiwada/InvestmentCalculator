import React,{Fragment,useState} from 'react'
import Header from './components/Header'
import Userinput from './components/Userinput'
import  Results from './components/Results'
 const App = () => {
  const [data, setData] = useState({
    initialInvestment: 10,
    annualInvestment: 10,
    expectedReturn: 10,
    duration: 10,
  });

  function handleData(newValue) {
    setData((prev) => ({ ...prev, ...newValue }));
  }
  return (
    <Fragment>
    <Header/>
    <Userinput data={data} handleData={handleData}/>
    <Results data={data}/>
    </Fragment>
    
  )
}

export default App
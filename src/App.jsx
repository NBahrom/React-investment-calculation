import { useState } from 'react'
import Header from './header'
import UserInput from './userInput'
import Table from './table'


function App() {

  const [dataI , SetdataI] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  
  function inputF(name, value) {
    SetdataI((oldValue) => {
       return {
        ...oldValue,
        [name]: +value
      }
    })
  }

  const isDurationValid = dataI.duration >= 1;


  return (

    <>

      <Header />
      <UserInput inputF={inputF} dataI={dataI} />
      {!isDurationValid && <p className='center'> Please enter a duration greater than zero </p> }
      {isDurationValid && <Table iValue={dataI} />}
      
    </>

  )
}

export default App

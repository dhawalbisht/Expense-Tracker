import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionlList from './components/TransactionList'


function App() {

  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionlList />
      </div>
    </div >
  )
}

export default App

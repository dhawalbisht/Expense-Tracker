import React from 'react'
import Header from './components/Header'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import TransactionlList from './components/TransactionList'
import AddNewTransaction from './components/AddNewTransaction'


function App() {

  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionlList />
        <AddNewTransaction />
      </div>
    </div >
  )
}

export default App

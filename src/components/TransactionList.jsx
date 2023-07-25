import React, { useContext } from 'react'
import Transaction from './Transaction'
import { GlobalContext } from '../context/GlobalState'

const TransactionlList = () => {
    const { transactions } = useContext(GlobalContext)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(transactions => (<Transaction key={transactions.id} transaction={transactions} />))}
            </ul>
        </>
    )
}

export default TransactionlList

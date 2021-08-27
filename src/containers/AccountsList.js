import React from "react";
import Table from 'react-bootstrap/Table';
import Account from '../components/Account'
import { Route } from "react-router-dom";
import TransactionsList from './TransactionsList'

const AccountsList = ({ accounts }) => {
  return (
    <p class='container'>
    <Route exact path='/transactions' component={TransactionsList} />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Account Type</th>
            <th>Current Ballance</th>
            {/* <th>Account Number</th> */}
            <th>Expiration Date</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => <Account className='lead h4' key={index} account={account} index={index} />)}
        </tbody>
      </Table>
      
      </p>
  )
}

export default AccountsList
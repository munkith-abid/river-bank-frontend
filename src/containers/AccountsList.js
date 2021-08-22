import React from "react";
import Table from 'react-bootstrap/Table';
import Account from '../components/Account'

const AccountsList = (props) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Account Type</th>
          <th>Current Ballance</th>
          <th>Account Number</th>
          <th>Expiration Date</th>
        </tr>
      </thead>
      <tbody>
        { props.accounts.map( (account, index )=> <Account key={ index } account={ account } index={ index } />) }
      </tbody>
    </Table>
  )
}

export default AccountsList
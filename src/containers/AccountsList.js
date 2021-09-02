import React from "react";
import Table from 'react-bootstrap/Table';
import Account from '../components/Account'
import { Route, useParams, Switch } from "react-router-dom";
import { TransactionsList } from './TransactionsList'

class AccountsList extends React.PureComponent{
  
  // account_id = parseInt(useParams().id)
  // debugger
  //  accounts, userName  = this.props
  // shouldComponentUpdate(){
  //   return false
  // }
  render() {
    return (
      <>
        <Switch>
          <Route path='/:id/transactions' render={(rp ) => <TransactionsList {...rp} accounts={this.props.accounts} userName={this.props.userName} />} />
        </Switch>

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
            {this.props.accounts.map((account, index) => <Account className='lead h4' key={index} account={account} index={index} />)}
          </tbody>
        </Table>

      </>
    )


  }

}

export default AccountsList
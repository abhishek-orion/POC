import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleUnstackable = () => (
  <Table unstackable>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Funds</Table.HeaderCell>
        <Table.HeaderCell>Morningstar Rating</Table.HeaderCell>
        <Table.HeaderCell>Participants</Table.HeaderCell>
        <Table.HeaderCell textAlign='right'>Balance</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Fund 1</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>9</Table.Cell>
        <Table.Cell textAlign='right'>$303 256.67</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Fund 2</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>4</Table.Cell>
        <Table.Cell textAlign='right'>$210 825.58</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Fund 3</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>7</Table.Cell>
        <Table.Cell textAlign='right'>$6 059.70</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleUnstackable

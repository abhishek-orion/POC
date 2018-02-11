import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'

export default class QuickNotification extends Component {

  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div className="quickNotification">
      <Header as='h2'>Quick Notifications</Header>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical>
            <Menu.Item name='To Dos' active={activeItem === 'bio'} onClick={this.handleItemClick} />
            <Menu.Item name='Compliance' active={activeItem === 'pics'} onClick={this.handleItemClick} />
            <Menu.Item name='Reports' active={activeItem === 'companies'} onClick={this.handleItemClick} />
            <Menu.Item name='Fileshare' active={activeItem === 'links'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>
        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the tab height
          </Segment>
        </Grid.Column>
      </Grid>
      </div>
    )
  }
}

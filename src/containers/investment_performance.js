import React, {Component} from 'react';
import { Menu, Segment } from 'semantic-ui-react';


export default class InvestmentPerformance extends Component {

    constructor (props) {
      super(props)

      this.state = { activeItem: 'home' };
    }


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div id="investmentAndPerformance" className="appBar margin-app margin-left-final investment">
        <Menu pointing secondary>
          <Menu.Item name='Investment Options' active={activeItem === 'invOptions'} onClick={this.handleItemClick} />
          <Menu.Item name='Documents' active={activeItem === 'documents'} onClick={this.handleItemClick} />
          <Menu.Item name='Charts' active={activeItem === 'charts'} onClick={this.handleItemClick} />
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>

            <Segment>
          Here goes the Text
          </Segment>
      </div>
    )
  }
}

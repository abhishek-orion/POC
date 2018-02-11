import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';


export default class Sidebar extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <div id = "sidebar" className = "sidebar margin-app fixed">
      <Menu vertical>
        <Menu.Item>
          <Menu.Header>Plan</Menu.Header>
          <Menu.Menu>
            <Menu.Item name='Overview' active={activeItem === 'overview'} onClick={this.handleItemClick} />
            <Menu.Item name='Investment & Performance' active={activeItem === 'investments'} onClick={this.handleItemClick} />
            <Menu.Item name='Administration' active={activeItem === 'admin'} onClick={this.handleItemClick} />
            <Menu.Item name='Feduciary Records' active={activeItem === 'frduciary'} onClick={this.handleItemClick} />
            <Menu.Item name='Forms & Documents' active={activeItem === 'forms&document'} onClick={this.handleItemClick} />
            <Menu.Item name='Contact' active={activeItem === 'contact'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Employees</Menu.Header>
          <Menu.Menu>
          <Menu.Item name='Search Employee' active={activeItem === 'search_employee'} onClick={this.handleItemClick} />
          <Menu.Item name='Add Employee' active={activeItem === 'add_employee'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Process Center</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Overview' active={activeItem === 'Process_overview'} onClick={this.handleItemClick} />
            <Menu.Item name='Payroll' active={activeItem === 'payroll'} onClick={this.handleItemClick} />
              <Menu.Item name='Pending Contributions' active={activeItem === 'contributions'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Compliance</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Year End Compliance' active={activeItem === 'year_end_comp'} onClick={this.handleItemClick}>
              E-mail Support
            </Menu.Item>

            <Menu.Item name='Compliance User Guide' active={activeItem === 'comp_user_guide'} onClick={this.handleItemClick}>
              FAQs
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Reports</Menu.Header>

          <Menu.Menu>
          <Menu.Item name='My Reports' active={activeItem === 'my_reports'} onClick={this.handleItemClick} />
          <Menu.Item name='Standard Reports' active={activeItem === 'stndrd_reports'} onClick={this.handleItemClick} />
          </Menu.Menu>

        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Resource Center</Menu.Header>
          <Menu.Menu>
          <Menu.Item name='Products and Services' active={activeItem === 'resource_cemter'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>
      </Menu>
      </div>
    )
  }
}

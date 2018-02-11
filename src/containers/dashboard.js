import React, {Component} from 'react';
import Header from '../components/Header/header';
import Sidebar from '../components/Sidebar/sidebar';
import OverviewPage from './overview_page';
import InvestmentPerformance from './investment_performance';


 class Dashboard extends Component {

     constructor (props) {
       super(props);

       this.state = {
         active_component: 'investments'
       };
    //   this.handlePageChange = this.handlePageChange.bind(this);
     }


  // function handlePageChange(e) {
  //     this.setState({active_component: e.target.value })
  //   }


    render (){

    var content;
    if (this.state.active_component=='overview') {
        content = <OverviewPage/>;
    } else if (this.state.active_component=='investments') {
        content = <InvestmentPerformance/>;
    }
      return (
        <div>
          <div>
              <Header/>
          </div>
          <div className = "row">
            <Sidebar/>
            {content}
          </div>
        </div>
      );
    }
}

export default Dashboard;

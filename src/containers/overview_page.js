import React, {Component} from 'react';
import style from '../styles/components/overview.css';
import QuickNotification from '../components/Notification/quick_notification';
import { Divider } from 'semantic-ui-react'
import PieChart from '../components/Charts/pie_chart'
import LineChart from '../components/Charts/line_chart'
import { Header } from 'semantic-ui-react'
import TopFunds from '../components/TopFunds/top_funds'




export default class OverviewPage extends Component {

    render () {
      return (
        <div className="overview margin-app margin-left-final">
            <QuickNotification/>
            <div className = "divider">
                <Divider/>
            </div>
            <div className = "row charts">
                <div className = "col-md-12">
                    <Header as='h2'>Plan Analytics</Header>
                </div>
                <div className = "col-md-4">
                    <PieChart/>
                </div>
                <div className = "col-md-4">
                    <PieChart/>
                </div>
                <div className = "col-md-4">
                    <PieChart/>
                </div>
            </div>
            <div className = "divider">
                <Divider/>
            </div>
            <div id="FundPerformance" className="topFunds row">
            <div className="col-md-12">
            <Header as='h2'>Fund Performance</Header>
            </div>
            <div id="LineChart" className="lineChart">
            <LineChart/>
            </div>
            <div id="TopFunds" className ="fundRatings">
            <TopFunds/>
            </div>
            </div>
        </div>
      );
    }
}

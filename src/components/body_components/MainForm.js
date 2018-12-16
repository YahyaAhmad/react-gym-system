import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../css/tabs.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import globalStore from '../../store/index'
import MainTab from './tabs/MainTab'
import HRTab from './tabs/HRTab'
import ClientsTab from './tabs/ClientsTab'
import Options from './tabs/Options';
import Finance from './tabs/Finance';
import '../../css/finance_tab.css'


class MainForm extends Component {


    render() {
        return (
            <div className="main-component">
                <div className="react-form gym-main-form border">
                
                    <Tabs forceRenderTabPanel={true}>
                        <TabList>
                            <Tab>MAIN</Tab>
                            <Tab>CLIENTS</Tab>
                            <Tab>HR</Tab>
                            <Tab>FINANCE</Tab>
                            <Tab>OPTIONS</Tab>
                        </TabList>
  
                       <TabPanel><MainTab /></TabPanel>
                       <TabPanel><ClientsTab /></TabPanel>
                       <TabPanel><HRTab /></TabPanel>
                       <TabPanel><Finance/></TabPanel>
                       <TabPanel><Options /></TabPanel>

                    </Tabs>
                </div>
            </div>
        );
    }
}

export default MainForm;
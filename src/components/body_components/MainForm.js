import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../../css/tabs.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import globalStore from '../../store/index'
import MainTab from './tabs/MainTab'
import HRTab from './tabs/HRTab'
import ClientsTab from './tabs/ClientsTab'
import Options from './tabs/Options';


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
                            <Tab>OPTIONS</Tab>
                        </TabList>
  
                       <TabPanel><MainTab /></TabPanel>
                       <TabPanel><ClientsTab /></TabPanel>
                       <TabPanel><HRTab /></TabPanel>
                       <TabPanel><Options /></TabPanel>

                    </Tabs>
                </div>
            </div>
        );
    }
}

export default MainForm;
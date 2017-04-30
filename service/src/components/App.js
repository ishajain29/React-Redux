import React from 'react';
import ServiceList from '../containers/ServiceList';
import ServiceForm from '../containers/ServiceForm';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../css/App.css';


var App = React.createClass({
  getInitialState: function() {
    return {
    activePage: 0
    };
  },
 handleSelect(index, last) {
     var activePageNum=this.state.activePage;
    console.log("Last Tab selected ====>"+last);
    console.log("New Tab Selected ====>"+index);
        this.setState({
            activePage: index
        });
    },
componentDidMount: function() {
  this.setState({activeKey: 0});
  },
  render: function(){
    return (
      <Tabs className="container"
       onSelect={this.handleSelect}
       selectedIndex={this.state.activePage}>

       <TabList>
         <Tab>New Service Time</Tab>
         <Tab>Active Service Times</Tab>
       </TabList>

       <TabPanel>
         <div id="newService">
           <h3> New Service Time </h3>
           <div>
             <ServiceForm />
           </div>
         </div>

       </TabPanel>
       <TabPanel>
         <div id="newService">
           <h3> Active Service Times </h3>
           <div>
             <ServiceList />
           </div>
         </div>
       </TabPanel>

     </Tabs>
    );
  }
});

export default App;

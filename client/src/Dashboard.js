import React, { Component } from "react";
import ReminderItems from "./ReminderItems";
import { v1 } from 'uuid';
 
class Dashboard extends Component {
  constructor(props) {
    super(props);
 
    this.state = {
      reminders: []
    };

    this.addReminder = this.addReminder.bind(this);
    this.addReminder = this.addReminder.bind(this);
    this.deleteReminder = this.deleteReminder.bind(this);
  }

  addReminder(e) {
    if (this._inputElementDrug.value!== "" && this._inputElementDosage.value!== "" && this._inputElementDosage.timing!== "") {
      var newReminder = {
        drug: this._inputElementDrug.value,
        dosage: this._inputElementDosage.value,
        timing: this._inputElementTiming.value,
        key: v1(),
      };
   
      this.setState((prevState) => {
        return { 
          reminders: prevState.reminders.concat(newReminder) 
        };
      });
     
      this._inputElementDrug.value = "";
      this._inputElementDosage.value = "";
      this._inputElementTiming.value = "";
    }
     
    console.log(this.state.items);
       
    e.preventDefault();
  }

  deleteReminder(key) {
    var filteredItems = this.state.reminders.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      reminders: filteredItems
    });
  }

  

  render() {
    return (
      <div className="dashboardMain">
        <div className="header">
          <form onSubmit={this.addReminder}>
            <input ref={(a) => this._inputElementDrug = a}  placeholder="enter drug" required></input>
            <input ref={(b) => this._inputElementDosage = b}  placeholder="enter dosage" required></input>
            <input ref={(c) => this._inputElementTiming = c}  placeholder="enter timing" required></input>
            <button type="submit">add</button>
          </form>
        </div>
        <ReminderItems entries={this.state.reminders} remove={this.deleteReminder}/>
      </div>
    );
  }
}
 
export default Dashboard;
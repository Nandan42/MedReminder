import React, { Component } from "react";
 
class ReminderItems extends Component {
    constructor(props) {
        super(props);
        this.createReminders = this.createReminders.bind(this);
        // this.remove = this.remove.bind(this);
      }

    remove(key) {
        this.props.remove(key);
      }

  createReminders(reminders) {
    return <li key={reminders.key} onClick={() => this.props.remove(reminders.key)} > {reminders.drug} {reminders.dosage} {reminders.timing} </li>
  }  


 
  render() {
    var reminderEntries = this.props.entries;
    var listItems = reminderEntries.map(this.createReminders);
 
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default ReminderItems;
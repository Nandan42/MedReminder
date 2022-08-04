import React, { Component } from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
 
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
    return <li key={reminders.key}> {reminders.name} || {reminders.dosage} || {reminders.timing} <IconButton onClick={() => this.props.remove(reminders.key)}><DeleteIcon/></IconButton></li>
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
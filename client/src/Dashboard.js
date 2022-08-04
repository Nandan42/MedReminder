import React, { Component } from "react";
import ReminderItems from "./ReminderItems";
import { v1 } from 'uuid';
import axios from "axios"
import Userfront from "@userfront/react";

 
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

  componentDidMount () {
    let userData = Userfront.user
    axios.get('http://localhost:5035/medicine-all/'+userData.email)
        .then(response => {
            this.setState({ reminders: response.data })
        })
        .catch(function (error){
            console.log(error)
        })
    } 

  addReminder(e) {
    if (this._inputElementDrug.value!== "" && this._inputElementDosage.value!== "" && this._inputElementDosage.timing!== "") {
    let userData = Userfront.user
      var newReminder = {
        userUUID: userData.email,
        name: this._inputElementDrug.value,
        dosage: this._inputElementDosage.value,
        timing: this._inputElementTiming.value,
        key: v1(),
      };

      console.log(newReminder)

      // axios.post('http://localhost:5035/api/medicine', newReminder)
      axios({
        method: 'post',
        url: 'http://localhost:5035/medicine',
        data: newReminder
      })
      .then(res => console.log(res.data))
      .then(()=> this.setState((prevState) => {
        return { 
          reminders: prevState.reminders.concat(newReminder) 
        };
      }))
      .catch(function (error){
        console.log(error);
      });

      this._inputElementDrug.value = "";
      this._inputElementDosage.value = "";
      this._inputElementTiming.value = "";
    } 
    console.log(this.state.reminders);
    e.preventDefault();
  }

  deleteReminder(key) {

    axios({
      method: 'delete',
      url: 'http://localhost:5035/medicine-single/'+key,
    })
    .then(response => {
      console.log(response)
    })
    .then(() => {
      var filteredItems = this.state.reminders.filter(function (item) {
        return (item.key !== key);
      });
  
      this.setState({
        reminders: filteredItems
      });
    })
  }

  

  render() {
    return (
      <div className="dashboardMain">
        <div className="header">
          <form onSubmit={this.addReminder}>
            <input ref={(a) => this._inputElementDrug = a}  placeholder="enter drug" required></input>
            <input ref={(b) => this._inputElementDosage = b}  placeholder="enter dosage" required></input>
            <input type="time" ref={(c) => this._inputElementTiming = c}  placeholder="enter timing" required></input>
            <button type="submit">add</button>
            <div>{Userfront.user.userUUID}</div>
          </form>
        </div>
        <ReminderItems entries={this.state.reminders} remove={this.deleteReminder}/>
      </div>
    );
  }
}
 
export default Dashboard;
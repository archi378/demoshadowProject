import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './admin'
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCMcQ0SXIaUNsXbvSzwABEepwXSHIvAFo0",
    authDomain: "myproject-7ed24.firebaseapp.com",
    databaseURL: "https://myproject-7ed24.firebaseio.com",
    projectId: "myproject-7ed24",
    storageBucket: "myproject-7ed24.appspot.com",
    messagingSenderId: "667043118631"
  };
  firebase.initializeApp(config);
  class Employee extends React.Component{
    constructor(){
        super()
        this.loginFunction=this.loginFunction.bind(this)
        this.logOutFunction=this.logOutFunction.bind(this)
        this.state = {
            Employees: [],
        }
    }
    loginFunction(){
        const auth = firebase.auth()
        const promise = auth.signInWithEmailAndPassword(this.email.value, this.userPassword.value)
        promise.catch(e=> console.log(e.message))

        firebase.auth().onAuthStateChanged(firebaseUser=>{
            if(firebaseUser){
              console.log(firebaseUser)
              document.getElementById('logOut-button').removeAttribute('hide')
            }
            else{
              console.log('not logged in')
              document.getElementById('logOut-button').setAttribute('display','none')
            }
        
        })
    }
    logOutFunction(){
        firebase.auth().signOut()
        this.email.value=""
        this.userPassword.value=""
    }
    render(){

        return(
            <div>
                <input type="mail" id="" ref= {(value) => {this.email = value}} placeholder="enter your name"/>
                <input type="password" id="" ref= {(value) => {this.userPassword = value}} placeholder="enter your password"/>
                <button type="submit" id="login-button" onClick={this.loginFunction}>Login</button>  <span>
                    <button type="submit" className='hide' onClick={this.logOutFunction} id='logOut-button'>LogOut</button></span> 
            </div>
            )
        
    }
}
ReactDOM.render(<Employee />, document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
  const db = firebase.database()

  class Employee extends React.Component{
    constructor(){
        super()
        // this.passwordGenerator=this.passwordGenerator.bind(this)
        // this.uidGenerator=this.uidGenerator.bind(this)
        this.toggleState=this.toggleState.bind(this)
        this.signupFunction=this.signupFunction.bind(this)
        this.state = {
            Employees: [],
            isLoggedin: false
        }
    }

    // passwordGenerator(length, chars) {
    //     let mask = '';
    //     if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
    //     if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //     if (chars.indexOf('#') > -1) mask += '0123456789';
    //     if (chars.indexOf('!') > -1) mask += '@*';
    //     let result = '';
    //     for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
    //     return result;
    // }
    // uidGenerator(){

    //     let id = Math.floor(Math.random() * 10000+1)
    //      return id;
    // }
    
    signupFunction(){
        firebase.auth().createUserWithEmailAndPassword(this.mail.value, this.password.value)
        .then(function(user){
            db.ref(`users/${user.uid}`).set({name: '', email:user.email, uid: user.uid,}); // I added user
            console.log(user)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
            console.log(errorCode, errorMessage)
          });
          const { isLoggedin }= this.state
          this.setState({
              Employees:[],
              isLoggedin:!isLoggedin
          })
    }
    
    renderSignup(){
        return(
            <div>
            <h5>Enter your mail <span>
            <input type="mail" id="user-mail" ref= {(value) => {this.mail = value}} /></span>
            </h5>
            <h5>Enter your Password <span>
            <input type="password" id="user-password" ref= {(value) => {this.password = value}} /></span>
            </h5>
            <button type="submit" id="signup-button" onClick={this.signupFunction}>Sign Up</button>
            </div>
        )
    }
    toggleState(){
        const { isLoggedin }= this.state
        this.setState({
            isLoggedin: !isLoggedin
        })
    }
    renderLogin(){
        return(
        <div>
            <input type="mail" id="" ref= {(value) => {this.email = value}} placeholder="enter your name"/>
            <input type="password" id="" ref= {(value) => {this.userPassword = value}} placeholder="enter your password"/>
            <button type="submit" id="login-button" onClick={this.loginFunction}>Login</button> 
            <p>Create Account? <span> <button type="submit" onClick ={this.toggleState}>Sign Up</button></span></p> 
        </div>
        )
    }
    render(){

        const { isLoggedin }= this.state
        return(
            <section>
             { isLoggedin ? this.renderLogin() : this.renderSignup()}
            </section>
        )
        
    }
}
ReactDOM.render(<Employee />, document.getElementById('root'));


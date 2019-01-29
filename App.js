import React, {Component} from 'react'
// import {Platform, StyleSheet, Text, View} from 'react-native';
import { Animated, Text, View, AlertIOS } from 'react-native';
import User from "./components/user.js"
import Anime from "./components/anime.js"

export default class App extends Component {

  state = {name:"blake",alias:"balake",loggedIn:true,started:true,dead:false,enterText:"Press to Enter"}

  login = () => {
    AlertIOS.prompt(
      "Enter Your Alias",
      null,
      text => {
        this.setState({...this.state,alias:text,loggedIn:true})
      }
    )
    AlertIOS.prompt(
      "Enter Your Name",
      null,
      text2 => {
        this.setState({...this.state,name:text2})
      }
    )
  }

  start = () => {
    this.setState({...this.state,started:true},()=>{console.log(this.state);})
  }



  render() {
    if(!this.state.loggedIn){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Anime style={{width: 250, height: 50, backgroundColor: 'red'}}>
            <Text onPress = {()=>{this.login()}} style={{fontSize: 20, textAlign: 'center', margin: 10}}>{this.state.enterText}</Text>
          </Anime>
        </View>
      )
    }else{
      return (
        <User state = {this.state} start = {this.start}/>
      )
    }
  }
}

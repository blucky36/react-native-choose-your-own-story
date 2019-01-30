import React, {Component} from 'react'
import { Animated, Text, View, TextInput } from 'react-native';
import User from "./components/user.js"
import Anime from "./components/anime.js"

export default class App extends Component {

  state = {name:"name",alias:"alias",loggedIn:false,started:false,dead:false,enterText:"Press to Enter"}

  login = () => {
    this.setState({...this.state,loggedIn:true})
  }

  start = () => {
    this.setState({...this.state,started:true},()=>{console.log(this.state);})
  }



  render() {
    if(!this.state.loggedIn){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"black"}}>
          <Anime style={{width: 250, height: 150, backgroundColor: 'red'}}>
            <Text style={{color:"white"}}>NAME</Text>
            <TextInput style={{backgroundColor:"white"}} onChangeText={(name)=>{this.setState({...this.state,name})}}/>
            <Text style={{color:"white"}}>ALIAS</Text>
            <TextInput style={{backgroundColor:"white",marginTop:"4%"}} onChangeText={(alias)=>{this.setState({...this.state,alias})}}/>
            <Text onPress = {()=>{this.login()}} style={{marginTop:"4%",marginLeft:25,width:200,height:30,fontSize: 20, textAlign: 'center',backgroundColor:"blue"}}>{this.state.enterText}</Text>
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

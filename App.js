import React, {Component} from 'react'
import { Animated, Text, View, TextInput } from 'react-native';
import User from "./components/user.js"
import Anime from "./components/anime.js"

export default class App extends Component {

  state = {name:"name",alias:"alias",loggedIn:false,dead:false,enterText:"Press to Enter"}

  login = () => {
    this.setState({...this.state,loggedIn:true})
  }

  render() {
    if(!this.state.loggedIn){
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"black"}}>
          <Anime style={{width: 250, height: 150, backgroundColor: 'red'}}>
            <Text style={{color:"white"}}>enter NAME below</Text>
            <TextInput style={{backgroundColor:"white"}} onChangeText={(name)=>{this.setState({...this.state,name})}}/>
            <Text style={{color:"white"}}>enter ALIAS below</Text>
            <TextInput style={{backgroundColor:"white",marginTop:"4%"}} onChangeText={(alias)=>{this.setState({...this.state,alias})}}/>
            <Text onPress = {()=>{this.login()}} style={{marginTop:"4%",marginLeft:25,width:200,height:30,fontSize: 20, textAlign: 'center',backgroundColor:"blue"}}>{this.state.enterText}</Text>
          </Anime>
        </View>
      )
    }else{
      return (
        <User state1 = {this.state} state={this.state}/>
      )
    }
  }
}

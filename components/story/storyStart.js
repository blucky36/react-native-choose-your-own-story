import React, {Component,Fragment} from "react"
import { Animated, Text, View, TouchableHighlight } from 'react-native'
import Anime from "../anime.js"
import Death from "../DEATH.js"
import Food from "./pathRight/food.js"
import Chataqua from "./pathLeft/chataqua.js"

class StoryStart extends Component{

  state={
    ...this.props.state,
    output:"",
    deathText1:`${this.props.state.alias} decides to stay on the couch`,
    left1:false,
    right1:false
  }

  textFun(){
    let textVariable = "And So It Begins"
    let output = ""
    let arr = textVariable.split("")
    let whatever = setInterval(()=>{
      if(this.state.output.length >= textVariable.length){
        clearInterval(whatever)
        return
      }else{
        output += arr.shift()
        this.setState({...this.state,output})
      }
    },50)
  }

  leftPath(){
    this.setState({...this.state,left1:true})
  }

  rightPath(){
    this.setState({...this.state,right1:true})
  }

  death1(){
    this.setState({...this.state,deathText1:`${this.state.alias} dies of malnourishment GAME OVER`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  render(){
    this.textFun()
    if(this.state.right1){
      return <Food state = {this.state}/>
    }
    if(this.state.left1){
      return <Chataqua state = {this.state}/>
    }
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Text style={{color:"white",fontSize:20}}>{this.state.output}</Text>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} wakes up one morning on a couch in Galvanize.  "Oh man I slept through the night while studying late" {this.state.alias} thinks.  {this.state.alias}'s stomach growls with extreme hunger as they had forgotten to eat the entire day before.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text onPress = {()=>{this.rightPath()}} style={{color:"white",fontSize:20}}>{this.state.alias} decides to go find food</Text>
            <Text onPress = {()=>{this.leftPath()}} style={{color:"white",fontSize:20}}>{this.state.alias} decides to continue outside</Text>
            <Text onPress = {()=>{this.death1()}} style={{color:"white",fontSize:20}}>{this.state.deathText1}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default StoryStart

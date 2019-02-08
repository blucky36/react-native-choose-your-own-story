import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Arrested from "./pathLeft/arrested.js"
import SelfDefense from "./pathRight/selfDefense.js"

class Murder extends Component {
  state={...this.props.state,deathTextRLL:`Fight Cops`,deathText2RLL:`Stab dead mugger`,rllr:false,rlll:false}
  rllr(){
    this.setState({...this.state,rllr:true})
  }
  rlll(){
    this.setState({...this.state,rlll:true})
  }
  deathRLL(){
    this.setState({...this.state,deathTextRLL:`${this.state.alias} is beaten to death`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by batons"})
      clearInterval(deathInterval)
    },1500)
  }
  death2RLL(){
    this.setState({...this.state,deathText2RLL:`${this.state.alias} is shot by cops`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by bullet"})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rllr){
      return  <SelfDefense state = {this.state}/>
    }
    if(this.state.rlll){
      return <Arrested state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:`100%`,flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:`orange`}}>
          <Anime>
            <Text style={{color:`white`,fontSize:20}}>{this.state.alias}'s foot impacts the muggers skull and he falls to the ground dead as a doornail.  Soon cops surround the area and tell you to stand down</Text>
          </Anime>
        </View>
        <View style={{width:`100%`,flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:`orange`}}>
          <Anime>
            <Text onPress = {()=>{this.deathRLL()}}style={{color:`white`,fontSize:20,textAlign:`center`}}>{this.state.deathTextRLL}</Text>
            <Text onPress = {()=>{this.rlll()}}style={{color:`white`,fontSize:20,textAlign:`center`}}>Yell NEVER!</Text>
            <Text onPress = {()=>{this.death2RLL()}}style={{color:`white`,fontSize:20,textAlign:`center`}}>{this.state.deathText2RLL}</Text>
            <Text onPress = {()=>{this.rllr()}}style={{color:`white`,fontSize:20,textAlign:`center`}}>Yell SELF DEFENSE!</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Murder

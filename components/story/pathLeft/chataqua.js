import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../anime.js"
import Death from "../../DEATH.js"
import Befriend from "./pathRight/befriend.js"
import BattleBear from "./pathLeft/battleBear.js"

class Chataqua extends Component{
  state={...this.props.state,deathText3:"Give bear other half of sandwich",ll:false,lr:false}

  death3(){
    this.setState({...this.state,deathText3:`bear doesn't want sandwich and rips your head off`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  ll(){
    this.setState({...this.state,ll:true})
  }

  lr(){
    this.setState({...this.state,lr:true})
  }

  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.ll){
      return <BattleBear state = {this.state}/>
    }
    if(this.state.lr){
      return <Befriend state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"blue"}}>
          <Anime>
            <Text style={{marginTop:"10%",color:"white",fontSize:20}}>
              {this.state.alias} finds a stale sandwitch in their pocket.  "LUCKY DAY!" they exclaim.  {this.state.alias} eats it as they walk past a deranged man with a knife.  {this.state.alias} lost in thought walks a mile from Galvanize to Chataqua park.  {this.state.alias} decides it's a nice enough day for a hike and travels up the trail. halfway up {this.state.alias} finds themselves confronted with a massive bear.
            </Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"blue"}}>
          <Anime>
            <Text onPress = {()=>{this.death3()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText3}</Text>
            <Text onPress = {()=>{this.lr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Try to befriend bear</Text>
            <Text onPress = {()=>{this.ll()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Test out your battle skills</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Chataqua

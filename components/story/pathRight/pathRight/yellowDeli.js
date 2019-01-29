import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../anime.js"
import Death from "../../../DEATH.js"
import Conversion from "./pathLeft/conversion.js"
import Poisoned from "./pathRight/poisoned.js"

class YellowDeli extends Component {
  state = {...this.props.state,rrr:false,rrl:false,deathTextrr:"Insult Jesus"}
  deathRR(){
    this.setState({...this.state,deathTextrr:`${this.state.alias} is struck by lightning and dies`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  rrr(){
    this.setState({...this.state,rrr:true})
  }
  rrl(){
    this.setState({...this.state,rrl:true})
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rrr){
      return <Poisoned state = {this.state}/>
    }
    if(this.state.rrl){
      return  <Conversion state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",height:"70%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text style={{color:"white",fontSize:18,marginTop:"10%"}}>{this.state.alias} walks past the man while realizing he was just an illusion of their mind. as the illusion tries to pursue it evaporates into mist behind {this.state.alias}.  {this.state.alias} walks up an alley to a main street.  As they traverse west down the street they come upon a deli with rustic looking furniture inside.  {this.state.alias} decides to go inside to check it out. they are immediately confronted by the 12 tribes cult.  {this.state.alias} has entered YellowDeli.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",height:"30%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress={()=>{this.rrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Grab Table, Order, Eat.</Text>
            <Text onPress={()=>{this.deathRR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextrr}</Text>
            <Text onPress={()=>{this.rrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Ask about conversion</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default YellowDeli

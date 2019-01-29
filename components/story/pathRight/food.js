import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../anime.js"
import Death from "../../DEATH.js"
import YellowDeli from "./pathRight/yellowDeli.js"
import Battle from "./pathLeft/battle.js"

class Food extends Component{
  state={...this.props.state,deathText2:"You give him your 20",rl:false,rr:false}

  death2(){
    this.setState({...this.state,deathText2:"He takes your 20 and stabs you anyway"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  rl(){
    this.setState({...this.state,rl:true})
  }

  rr(){
    this.setState({...this.state,rr:true})
  }

  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rr){
      return  <YellowDeli state = {this.state}/>
    }
    if(this.state.rl){
      return <Battle state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} wanders outside of galvanize to see several restaurants, their stomach growls as they smell the scent of food around them.  {this.state.alias} checks their pocket to see they have $20.00 for the day.  A deranged man comes up to {this.state.alias} with a knife: "You better do what the blade says!" he exclaims.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text onPress={()=>{this.rr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Ignore him and walk right</Text>
            <Text onPress={()=>{this.death2()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2}</Text>
            <Text onPress={()=>{this.rl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Test your battle skills</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Food

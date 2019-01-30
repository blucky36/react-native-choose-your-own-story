import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../anime.js"
import Death from "../../../DEATH.js"
import Murder from "./pathLeft/murder.js"
import Ground from "./pathRight/ground.js"

class Battle extends Component {
  state={...this.props.state,deathTextRL:"You give him your FISTS",rll:false,rlr:false}
  rll(){
    this.setState({...this.state,rll:true})
  }
  rlr(){
    this.setState({...this.state,rlr:true})
  }
  deathRL(){
    this.setState({...this.state,deathTextRL:"he stabs you in the heart and steals your 20"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rll){
      return  <Murder state = {this.state}/>
    }
    if(this.state.rlr){
      return <Ground state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} throws up their fists like they are ready for a fight.  The mugger lunges at you!</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text onPress={()=>{this.deathRL()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRL}</Text>
            <Text onPress={()=>{this.rlr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>You embrace him</Text>
            <Text onPress={()=>{this.rll()}}style={{color:"white",fontSize:20,textAlign:"center"}}>You give him your FOOT</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Battle

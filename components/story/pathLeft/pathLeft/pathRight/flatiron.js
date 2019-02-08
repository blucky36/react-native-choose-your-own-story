import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Prize1 from "./pathRight/prize1.js"
import Prize2 from "./pathLeft/prize2.js"

class Flatiron extends Component {
  state={...this.props.state,deathTextLLR:`${this.props.state.alias} Picks Present 1`,deathText2LLR:`${this.props.state.alias} Picks Present 3`,llrl:false,llrr:false}
  llrl(){
    this.setState({...this.state,llrl:true})
  }
  llrr(){
    this.setState({...this.state,llrr:true})
  }
  deathLLR(){
    this.setState({...this.state,deathTextLLR:`upon unwrapping gift ${this.state.alias} melts into the ground as water and dies instantly`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by MELTING"})
      clearInterval(deathInterval)
    },1500)
  }
  death2LLR(){
    this.setState({...this.state,deathText2LLR:`upon unwrapping gift ${this.state.alias} bursts into flames and is incinerated`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by COMBUSTION"})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.llrl){
      return <Prize2 state = {this.state}/>
    }
    if(this.state.llrr){
      return <Prize1 state={this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"gold"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>With dumb luck and bravery {this.state.alias} escapes the enraged bear they just vaulted.  {this.state.alias} comes upon four pedistals, a wrapped gift perched atop each.  choose wisely...</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"gold"}}>
          <Anime>
            <Text onPress={()=>{this.deathLLR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLLR}</Text>
            <Text onPress={()=>{this.llrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.alias} Picks Present 2</Text>
            <Text onPress={()=>{this.death2LLR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LLR}</Text>
            <Text onPress={()=>{this.llrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.alias} Picks Present 4</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Flatiron

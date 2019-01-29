import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../anime.js"
import Death from "../../../DEATH.js"
import Flatiron from "./pathRight/flatiron.js"
import MurderBear from "./pathLeft/murderBear.js"

class BattleBear extends Component {
  state={...this.props.state,deathText2LL:"Punch the bear",deathTextLL:"Throw the stale sandwich at the bear",llr:false,lll:false}
  deathLL(){
    this.setState({...this.state,deathTextLL:"the bear hates the sandwich and mauls you to death"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LL(){
    this.setState({...this.state,deathText2LL:"the bear looks confused and mauls you to death"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  llr(){
    this.setState({...this.state,llr:true})
  }
  lll(){
    this.setState({...this.state,lll:true})
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.lll){
      return <MurderBear state = {this.state}/>
    }
    if(this.state.llr){
      return <Flatiron state={this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} knows there is no passing this bear without a fight. They take up arms and decide to...</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text onPress = {()=>{this.lll()}}style={{color:"white",fontSize:15,textAlign:"center"}}>Approach the bear and stab it with your sandwich</Text>
            <Text onPress = {()=>{this.llr()}}style={{color:"white",fontSize:15,textAlign:"center"}}>Realize this is a bad idea and vault the bear</Text>
            <Text onPress = {()=>{this.deathLL()}}style={{color:"white",fontSize:15,textAlign:"center"}}>{this.state.deathTextLL}</Text>
            <Text onPress = {()=>{this.death2LL()}}style={{color:"white",fontSize:15,textAlign:"center"}}>{this.state.deathText2LL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default BattleBear

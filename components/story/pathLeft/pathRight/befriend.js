import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../anime.js"
import Death from "../../../DEATH.js"
import BackWithBear from "./pathRight/backWithBear.js"
import Farther from "./pathLeft/farther.js"

class Befriend extends Component {
  state={...this.props.state,deathTextLR:"improve friendship with sandwich",lrr:false,lrl:false}
  lrl(){
    this.setState({...this.state,lrl:true})
  }
  lrr(){
    this.setState({...this.state,lrr:true})
  }
  deathLR(){
    this.setState({...this.state,deathTextLR:"the bear mauls you to death"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.lrl){
      return <Farther state={this.state}/>
    }
    if(this.state.lrr){
      return <BackWithBear state={this.state}/>
    }
    if(this.state.dead){
      return <Death state={this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} walks straight up to the bear and pets him under the chin.  The bear sits down and gives {this.state.alias} a confused look, but seems docile.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress = {()=>{this.deathLR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLR}</Text>
            <Text onPress = {()=>{this.lrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Travel back into Boulder</Text>
            <Text onPress = {()=>{this.lrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Continue farther into mountains</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Befriend

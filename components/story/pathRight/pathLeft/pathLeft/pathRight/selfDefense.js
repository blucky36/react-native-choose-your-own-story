import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class SelfDefense extends Component {
  state={...this.props.state,deathTextRLLR:`Claims self defence in court`,deathText2LLLR:"prepare for battle!",alive:false,penalty:""}
  deathRLLR(){
    this.setState({...this.state,deathTextRLLR:`${this.state.alias} dies in british prison`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  alive(){
    this.setState({...this.state,alive:true,penalty:"Human Murder Guilt"})
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.alive){
      return <Alive state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} is approached by the police and taken into custody</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text onPress={()=>{this.alive()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Claims self defense in court</Text>
            <Text onPress={()=>{this.deathRLLR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRLLR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default SelfDefense

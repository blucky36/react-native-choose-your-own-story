import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Evacuate from "./pathLeft/evacuate.js"
import Help from "./pathRight/help.js"

class Poisoned extends Component {
  state = {...this.props.state,rrrr:false,rrrl:false,deathTextRRR:"Continue and tough it out"}
  deathRRR(){
    this.setState({...this.state,deathTextRRR:`${this.state.alias} keels over and dies`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  rrrr(){
    this.setState({...this.state,rrrr:true})
  }
  rrrl(){
    this.setState({...this.state,rrrl:true})
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rrrr){
      return <Help state = {this.state}/>
    }
    if(this.state.rrrl){
      return  <Evacuate state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{marginTop:"10%",width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} walks outside the restaurant feeling ill. They suspect food poisoning or worse.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text onPress={()=>{this.rrrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Ask for help</Text>
            <Text onPress={()=>{this.deathRRR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRR}</Text>
            <Text onPress={()=>{this.rrrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Evacuate Stomach</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Poisoned

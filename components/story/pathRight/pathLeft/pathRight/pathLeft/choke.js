import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class Choke extends Component {
  state={...this.props.state,deathTextRLRL:`Let Go`,deathText2RLRL:"Squeeze harder without saying 'Yeet'",alive:false,penalty:""}
  deathRLRL(){
    this.setState({...this.state,deathTextRLRL:`the mugger overpowers you`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by mugger"})
      clearInterval(deathInterval)
    },1500)
  }

  death2RLRL(){
    this.setState({...this.state,deathText2RLRL:`The mugger overpowers ${this.state.alias}`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by mugger"})
      clearInterval(deathInterval)
    },1500)
  }

  alive(){
    this.setState({...this.state,alive:true,penalty:"Covered In Brains"})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"lime"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} grabs the mugger by the neck.  {this.state.alias} sees their face start to turn blue as they squeeze harder</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"lime"}}>
          <Anime>
            <Text onPress={()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>shout "YEET" and SQUEEZE HARDER</Text>
            <Text onPress={()=>{this.deathRLRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRLRL}</Text>
            <Text onPress={()=>{this.death2RLRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RLRL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Choke

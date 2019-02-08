import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class Evacuate extends Component {
  state={...this.props.state,deathTextRRRL:`Stare into sun`,deathText2RRRL:"Stare into sun with intent",alive:false}
  deathRRRL(){
    this.setState({...this.state,deathTextRRRL:`${this.state.alias} dies from an aneurysm`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by aneurysm"})
      clearInterval(deathInterval)
    },1500)
  }

  death2RRRL(){
    this.setState({...this.state,deathText2RRRL:`walks into street while staring at sun and is run over`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by sun"})
      clearInterval(deathInterval)
    },1500)
  }

  alive(){
    this.setState({...this.state,alive:true})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"skyblue"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} evacuates their stomach.  They feel less like death but at least they can survive.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"skyblue"}}>
          <Anime>
            <Text onPress={()=>{this.death2RRRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RRRL}</Text>
            <Text onPress={()=>{this.deathRRRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRRL}</Text>
            <Text onPress={()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>say "yeet" and walk away</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Evacuate

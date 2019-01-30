import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class Avoid extends Component {
  state={...this.props.state,deathTextLLLR:`stand your ground`,deathText2LLLR:"prepare for battle!",alive:false,penalty:""}
  deathLLLR(){
    this.setState({...this.state,deathTextLLLR:`death by bears OOF`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LLLR(){
    this.setState({...this.state,deathText2LLLR:`you are not God`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  alive(){
    this.setState({...this.state,alive:true,penalty:"Bear Murder Guilt"})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} runs from the dead bear, but over the horizon they see a mob of the bear's babies running at them.  from the other side they see animal rights activists waving a PETA flag running towards them at full speed.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text onPress = {()=>{this.deathLLLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLLLR}</Text>
            <Text onPress = {()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>try to fly away??</Text>
            <Text onPress = {()=>{this.death2LLLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LLLR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Avoid

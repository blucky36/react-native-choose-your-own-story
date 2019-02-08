import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Toss from "./pathRight/toss.js"
import Choke from "./pathLeft/choke.js"

class Ground extends Component {
  state={...this.props.state,deathTextRLR:`${this.props.state.alias} tries to grab the knife`,rlrl:false,rlrr:false}
  rlrl(){
    this.setState({...this.state,rlrl:true})
  }
  rlrr(){
    this.setState({...this.state,rlrr:true})
  }
  deathRLR(){
    this.setState({...this.state,deathTextRLR:`the knife comes loose and ${this.state.alias} is stabbed in the neck`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by stabbing"})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rlrl){
      return  <Choke state = {this.state}/>
    }
    if(this.state.rlrr){
      return <Toss state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"tomato"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>The mugger got his knife caught in {this.state.alias}'s shirt during the embrace.  Both parties fall to the ground with a thud.  {this.state.alias} can smell the muggers breath they are pinned down.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"tomato"}}>
          <Anime>
            <Text onPress = {()=>{this.rlrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.alias} tries to pick up the mugger</Text>
            <Text onPress = {()=>{this.rlrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.alias} tries to grab the muggers neck</Text>
            <Text onPress = {()=>{this.deathRLR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRLR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Ground

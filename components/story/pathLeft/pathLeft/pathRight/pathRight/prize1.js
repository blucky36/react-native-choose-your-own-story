import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class Prize1 extends Component {
  state={...this.props.state,deathTextLLRR:`${this.props.state.alias} eats it`,alive:false,reward:""}
  deathLLRR(){
    this.setState({...this.state,deathTextLLRR:`${this.state.alias} violently explodes`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  alive(){
    this.setState({...this.state,alive:true,reward:"Glow Orb"})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} Picked Present 4. They open it up and you see a glowing orb.  What can this thing do?</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text onPress={()=>{this.deathLLRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLLRR}</Text>
            <Text onPress={()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.alias} pockets it</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Prize1

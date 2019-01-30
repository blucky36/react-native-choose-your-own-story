import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Protec extends Component {
  state={...this.props.state,deathTextLRRR:`Dance`,deathText2LRRR:"Call Cthulu"}
  deathLRRR(){
    this.setState({...this.state,deathTextLRRR:`${this.state.alias} is shot by animal control`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LRRR(){
    this.setState({...this.state,deathText2LRRR:`CTHULU RISES FROM THE DEPTHS AND CLAIMS THE EARTH`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"blue"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} runs up to their new bear friend to protect them.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"blue"}}>
          <Anime>
            <Text onPress={()=>{this.death2LRRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LRRR}</Text>
            <Text onPress={()=>{this.deathLRRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRRR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Protec

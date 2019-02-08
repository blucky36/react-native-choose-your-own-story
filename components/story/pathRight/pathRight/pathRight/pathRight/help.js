import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Help extends Component {
  state={...this.props.state,deathTextRRRR:`"Help I'm Dying!"`,deathText2RRRR:`Help I'm Dying!" but louder`}
  deathRRRR(){
    this.setState({...this.state,deathTextRRRR:`Nobody Was around`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by poison"})
      clearInterval(deathInterval)
    },1500)
  }
  death2RRRR(){
    this.setState({...this.state,deathText2RRRR:`Nobody Cared v(v_v)v`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by sadness"})
      clearInterval(deathInterval)
    },1500)
  }

  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} starts to choke on the poison.  They scream for help...</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress={()=>{this.deathRRRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRRR}</Text>
            <Text onPress={()=>{this.death2RRRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RRRR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Help

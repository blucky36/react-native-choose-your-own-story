import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Cult extends Component {
  state={...this.props.state,deathTextRRLR:`Drink the kool aid`,deathText2RRLR:`Refuse the drink`}
  deathRRLR(){
    this.setState({...this.state,deathTextRRLR:`The drink was fine.  but ${this.state.alias} has a stroke`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2RRLR(){
    this.setState({...this.state,deathText2RRLR:`${this.state.alias} is sacraficed`})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} is then presented with a glass of red liquid.  They must drink upon the sacred liquid to become one with the community</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress={()=>{this.deathRRLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRLR}</Text>
            <Text onPress={()=>{this.death2RRLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RRLR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Cult

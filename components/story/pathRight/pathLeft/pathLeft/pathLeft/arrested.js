import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Arrested extends Component {
  state={...this.props.state,deathTextRLLL:`go to prison`,deathText2RLLL:`try to run`}
  deathRLLL(){
    this.setState({...this.state,deathTextRLLL:`${this.state.alias} dies in prison`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by time in prison"})
      clearInterval(deathInterval)
    },1500)
  }
  death2RLLL(){
    this.setState({...this.state,deathText2RLLL:`${this.state.alias} is shot by the cops`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by police"})
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
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} is approached by the police</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress={()=>{this.deathRLLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRLLL}</Text>
            <Text onPress={()=>{this.death2RLLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RLLL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Arrested

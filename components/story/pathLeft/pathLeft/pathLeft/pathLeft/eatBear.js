import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class EatBear extends Component {
  state={...this.props.state,deathTextLLLL:`${this.props.state.alias} bites the stomach`,deathText2LLLL:`${this.props.state.alias} bites the neck`}
  deathLLLL(){
    this.setState({...this.state,deathTextLLLL:`the bears baby gets jealous and attacks`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LLLL(){
    this.setState({...this.state,deathText2LLLL:`the bear was playing dead.  He eats your face.`})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"tomato"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>You start eating the bear. What do you eat first?</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"tomato"}}>
          <Anime>
            <Text onPress = {()=>{this.deathLLLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLLLL}</Text>
            <Text onPress = {()=>{this.death2LLLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LLLL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default EatBear

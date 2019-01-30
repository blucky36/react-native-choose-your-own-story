import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Run extends Component {
  state={...this.props.state,deathTextLRLL:`Dart Left`,deathText2LRLL:"Dart Right"}
  deathLRLL(){
    this.setState({...this.state,deathTextLRLL:`${this.state.alias} slams their head on a tree`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LRLL(){
    this.setState({...this.state,deathText2LRLL:`${this.state.alias} trips on a root and breaks their neck on a rock`})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} tries to befriend all the bears.  the bear {this.state.alias} thought was his friend takes a swipe at them.  {this.state.alias} books it in a dead sprint away from the 6 bears.  They are gaining!</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text onPress={()=>{this.death2LRLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LRLL}</Text>
            <Text onPress={()=>{this.deathLRLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRLL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Run

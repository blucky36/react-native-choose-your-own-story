import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Escape extends Component {
  state={...this.props.state,deathTextRRLL:`Run Left (Tall Fence Barbed Wire)`,deathText2RRLL:`Run Right (Short Fence overlooking river)`}
  deathRRLL(){
    this.setState({...this.state,deathTextRRLL:`Gets stuck in fence`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2RRLL(){
    this.setState({...this.state,deathText2RRLL:`hits head on rock after jumping fence`})
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
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} is surrounded.  The only escape is to jump a fence!</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress={()=>{this.deathRRLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRLL}</Text>
            <Text onPress={()=>{this.death2RRLL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RRLL}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}


export default Escape

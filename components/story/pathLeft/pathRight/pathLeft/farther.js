import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Run from "./pathLeft/run.js"
import Eaten from "./pathRight/eaten.js"

class Farther extends Component {
  state={...this.props.state,deathTextLRL:"NOPE run",lrll:false,lrlr:false}
  lrll(){
    this.setState({...this.state,lrll:true})
  }
  lrlr(){
    this.setState({...this.state,lrlr:true})
  }
  deathLRL(){
    this.setState({...this.state,deathTextLRL:`Silly ${this.state.alias} you can't outrun 5 bears`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by bear family"})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.lrlr){
      return <Eaten state={this.state}/>
    }
    if(this.state.lrll){
      return <Run state={this.state}/>
    }
    if(this.state.dead){
      return <Death state={this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"darkGreen"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} decides to continue farther into the woods with the befriended bear.  After travelling for some time they run into the bears den farther up the mountain path.  {this.state.alias} realizes they are in the presence of five other bears of various sizes</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"darkGreen"}}>
          <Anime>
            <Text onPress={()=>{this.deathLRL()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRL}</Text>
            <Text onPress={()=>{this.lrll()}}style={{color:"white",fontSize:20,textAlign:"center"}}>try to befriend all the bears</Text>
            <Text onPress={()=>{this.lrlr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Roar to show dominance</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Farther

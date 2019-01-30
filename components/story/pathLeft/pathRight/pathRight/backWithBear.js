import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import RunBoi from "./pathLeft/runBoi.js"
import Protec from "./pathRight/protec.js"

class BackWithBear extends Component {
  state={...this.props.state,deathTextLRR:"stick head in bears mouth",lrrl:false,lrrr:false}
  lrrl(){
    this.setState({...this.state,lrrl:true})
  }
  lrrr(){
    this.setState({...this.state,lrrr:true})
  }
  deathLRR(){
    this.setState({...this.state,deathTextLRR:"Why on earth would that ever be a good idea?!?"})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  render(){
    if(this.state.lrrl){
      return <RunBoi state={this.state}/>
    }
    if(this.state.lrrr){
      return <Protec state={this.state}/>
    }
    if(this.state.dead){
      return <Death state={this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} meanders down to pearl street with their new bear friend.  Someone saw the bear coming down the mountain and thought there was danger.  Within minutes they are surrounded by animal control.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
          <Anime>
            <Text onPress = {()=>{this.lrrr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Protect your new friend</Text>
            <Text onPress = {()=>{this.deathLRR()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRR}</Text>
            <Text onPress = {()=>{this.lrrl()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Run from the situation</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default BackWithBear

import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class RunBoi extends Component {
  state={...this.props.state,deathTextLRRL:`Run into first house`,deathText2LRRL:"Run Left",alive:false}
  death2LRRL(){
    this.setState({...this.state,deathText2LRRL:`${this.state.alias} is hit by a rogue meteor`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  deathLRRL(){
    this.setState({...this.state,deathTextLRRL:`The homeowner says "Make my day!"`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  alive(){
    this.setState({...this.state,alive:true})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"skyblue"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} Runs from the situation.  there are several directions to run.  Animal control is aiming their guns right at you.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"skyblue"}}>
          <Anime>
            <Text onPress={()=>{this.death2LRRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LRRL}</Text>
            <Text onPress={()=>{this.deathLRRL()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRRL}</Text>
            <Text onPress={()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>Run Right</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default RunBoi

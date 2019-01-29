import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Escape from "./pathLeft/escape.js"
import Cult from "./pathRight/cult.js"

class Conversion extends Component {
  state = {...this.props.state,rrlr:false,rrll:false,deathTextRRL:"Refuse"}
  deathRRL(){
    this.setState({...this.state,deathTextrr:`${this.state.alias} is struck by lightning and dies instantly`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  rrlr(){
    this.setState({...this.state,rrlr:true})
  }
  rrll(){
    this.setState({...this.state,rrll:true})
  }
  render(){
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.rrlr){
      return <Cult state = {this.state}/>
    }
    if(this.state.rrll){
      return  <Escape state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{marginTop:"10%",width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} asks the yellow deli employees about conversion.  They are then immediately struck by lightnight and knocked unconscious.  {this.state.alias} wakes up at the 12 tribes commune. "how the hell did I get here?" {this.state.alias} thinks.  You are then approaced by Brother Ezikiel.  He offeres you a delicious sandwich and tells {this.state.alias} that they are welcome to join the 12 tribes if they abide by ALL the rules.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"grey"}}>
          <Anime>
            <Text onPress={()=>{this.rrlr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Accept</Text>
            <Text onPress={()=>{this.deathRRL()}}style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRRL}</Text>
            <Text onPress={()=>{this.rrll()}}style={{color:"white",fontSize:20,textAlign:"center"}}>RUN!</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Conversion

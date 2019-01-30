import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"
import Alive from "../../../../../ALIVE.js"

class Toss extends Component {
  state={...this.props.state,deathTextRLRR:`Fall over in relief`,deathText2RLRR:"Say nothing and walk away",alive:false,reward:""}
  deathRLRR(){
    this.setState({...this.state,deathTextRLRR:`knife randomly sticks yourself`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  death2RLRR(){
    this.setState({...this.state,deathText2RLRR:`${this.state.alias} dies, for no reason.`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }

  alive(){
    this.setState({...this.state,alive:true,reward:"Muggers Knife"})
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
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} tosses the mugger 30 feet into the wall behind them.  The mugger slumps into a pile on the ground alive but beaten.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"skyblue"}}>
          <Anime>
            <Text onPress={()=>{this.alive()}} style={{color:"white",fontSize:20,textAlign:"center"}}>say "yeet" and walk away</Text>
            <Text onPress={()=>{this.deathRLRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextRLRR}</Text>
            <Text onPress={()=>{this.death2RLRR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2RLRR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Toss

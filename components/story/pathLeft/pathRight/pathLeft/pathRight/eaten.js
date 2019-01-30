import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../../anime.js"
import Death from "../../../../../DEATH.js"

class Eaten extends Component {
  state={...this.props.state,deathTextLRLR:`Tries to enjoy it`,deathText2LRLR:`Tries to fight it`}
  deathLRLR(){
    this.setState({...this.state,deathTextLRLR:`You are still being eaten alive`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(deathInterval)
    },1500)
  }
  death2LRLR(){
    this.setState({...this.state,deathText2LRLR:`HAHA sure against 6 bears`})
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
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"brown"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>{this.state.alias} used roar.  It wasnt very effective. the bears jump on top of them.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"brown"}}>
          <Anime>
            <Text onPress={()=>{this.death2LRLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathText2LRLR}</Text>
            <Text onPress={()=>{this.deathLRLR()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.deathTextLRLR}</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Eaten

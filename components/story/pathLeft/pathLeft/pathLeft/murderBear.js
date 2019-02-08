import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../../anime.js"
import Death from "../../../../DEATH.js"
import Avoid from "./pathRight/avoid.js"
import EatBear from "./pathLeft/eatBear.js"

class MurderBear extends Component {
  state={...this.props.state,deathTextLLL:`${this.props.state.alias} attempts to carry the bear down the mountain`,llll:false,lllr:false}
  deathLLL(){
    this.setState({...this.state,deathTextLLL:`${this.state.alias} is mobbed and killed by animal rights activists`})
    let deathInterval = setInterval(()=>{
      this.setState({...this.state,dead:true,death:"death by PETA"})
      clearInterval(deathInterval)
    },1500)
  }
  llll(){
    this.setState({...this.state,llll:true})
  }
  lllr(){
    this.setState({...this.state,lllr:true})
  }
  render(){
    if(this.state.dead){
      return <Death state={this.state}/>
    }
    if(this.state.llll){
      return  <EatBear state = {this.state}/>
    }
    if(this.state.lllr){
      return <Avoid state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>The Bear is gluten intolerant and dies instantly. now you have a dead bear... way to go? Several people watched {this.state.alias} murder this bear with a sandwich.</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
          <Anime>
            <Text onPress={()=>{this.deathLLL()}}style={{color:"white",fontSize:15,textAlign:"center"}}>{this.state.deathTextLLL}</Text>
            <Text onPress={()=>{this.lllr()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Ditch the bear and run away</Text>
            <Text onPress={()=>{this.llll()}}style={{color:"white",fontSize:25,textAlign:"center"}}>Eat the bear</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default MurderBear

import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "./anime.js"
import Death from "./DEATH.js"
import User from "./user.js"

class Alive extends Component {
  state = {...this.props.state,ss:"Second Story?",user:false}

  handleContinue(){
    //build the api bitch//api accepts deaths, aliases, deathcounts
    this.setState({name:this.state.name,alias:this.state.alias,loggedIn:true,started:false,dead:false,enterText:"Press to Enter",user:true})
  }

  nope(){
    this.setState({...this.state,ss:"Not Ready Yet Sorry"})
    let nopeinterval = setInterval(()=>{
      this.setState({...this.state,dead:true})
      clearInterval(nopeinterval)
    },1500)
  }
  render(){
    console.log(this.state);
    if(this.state.dead){
      return <Death state = {this.state}/>
    }
    if(this.state.user){
      return <User state = {this.state}/>
    }
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>Congratulations {this.state.alias}! You survived!</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"black"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Death Count:</Text>
            {this.state.penalty&&<Text style={{color:"white",fontSize:20,textAlign:"center"}}>Penalty: {this.state.penalty}</Text>}
            {this.state.reward&&<Text style={{color:"white",fontSize:20,textAlign:"center"}}>Rewards: {this.state.reward}</Text>}
            <Text onPress = {()=>{this.nope()}} style={{color:"white",fontSize:20,textAlign:"center"}}>{this.state.ss}</Text>
            <Text onPress = {()=>{this.handleContinue()}}style={{color:"white",fontSize:20,textAlign:"center"}}>Exit to Home Screen</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Alive

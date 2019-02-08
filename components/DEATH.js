import React,{Component,Fragment} from "react"
import { Animated, Text, View, Image} from 'react-native'
import Anime from "./anime.js"
import User from "./user.js"

class Death extends Component {
  state = {...this.props.state,user:false}

  handleDeath(){
    //send death data to api
  }

  handleRestart(){
    this.setState({...this.state,user:true,dead:false})
  }

  render(){
    console.log(this.state);
    if(this.state.user){
      console.log(this.state);
      return <User state = {this.state}/>
    }
    return (
      <Fragment>
        <View style = {{flex:1}}>
          <Anime>
            <Image style={{maxWidth:"100%",maxHeight:"100%",alignItems:"center"}}source={require("./images/sadcat2.jpg")}/>
          </Anime>
        </View>
        <View style={{flex:2,width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text style={{color:"blue",fontSize:50}}>Your'r're Ded'd</Text>
            <Text onPress = {()=>{this.handleRestart()}}style={{color:"blue",fontSize:30}}>try again?</Text>
            <Text onPress = {()=>{window.location.href = "/"}}>Exit</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Death

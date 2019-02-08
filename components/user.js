import React, {Component,Fragment} from 'react'
import {Text,View,Image} from "react-native"
import StoryStart from "./story/storyStart.js"


class User extends Component {
  state={...this.props.state,started:false}

  start(){
    this.setState({...this.state,started:true,user:false,death:""})
  }

  render(){
    console.log(this.state);
    if(!this.state.started){
      return (
        <Fragment>
          <View style={{height:"33%",width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"purple"}}>
            <Text style={{color:"white",}}>Welcome {this.props.state.name}</Text>
          </View>
          <View style={{height:"33%",width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"green"}}>
            <Text onPress = {()=>{this.start()}} style={{color:"white",}}>Click Here to start your adventure as {this.props.state.alias}</Text>
          </View>
          <View style={{height:"33%",width:"100%",flex: 3, alignItems: 'center', justifyContent: 'center', backgroundColor:"#0033cc"}}>
            {this.state.deathArray.length > 0 ? this.state.deathArray.map(death=><Text style={{color:"white"}}>{death}</Text>) :<Text><Image style={{maxWidth:"98%",maxHeight:"98%",alignItems:"center"}}source={require("./images/sadcat2.jpg")}/></Text>}
          </View>
        </Fragment>
      )
    }else{
      return <StoryStart state={this.props.state}/>
    }
  }
}

export default User

import React,{Component,Fragment} from "react"
import { Animated, Text, View, Image} from 'react-native'
import Anime from "./anime.js"
import User from "./user.js"

class Death extends Component {
  state = {...this.props.state,user:false}
  async handleDeath(){
    let users = await fetch(`https://cyosdeath.herokuapp.com/players`).then(data=>data.json())
    let specUser = users.filter(user=>this.state.alias === user.alias),oof
    console.log(specUser);
    if(specUser.length > 0){
      oof = specUser[specUser.length-1]
    }else{
      oof = {
        death_array:[],
        alias:this.state.alias
      }
    }
    console.log(oof);
    let deathArray = oof.death_array
    console.log(deathArray);
    deathArray.push(this.state.death)
    console.log(deathArray);
    await fetch(`https://cyosdeath.herokuapp.com/players`,{
      method:"post",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({
        alias: this.state.alias,
        deaths: deathArray
      })
    })
    this.setState({...this.state,deathArray})
  }

  componentDidMount(){
    this.handleDeath()
  }


  handleRestart(){
    this.setState({...this.state,user:true,dead:false})
  }

  render(){
    if(this.state.user){
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

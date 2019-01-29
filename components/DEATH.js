import React,{Component,Fragment} from "react"
import { Animated, Text, View, Image} from 'react-native'
import Anime from "./anime.js"

class Death extends Component {
  render(){
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
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Death

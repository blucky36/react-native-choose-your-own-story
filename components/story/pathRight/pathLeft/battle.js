import React, {Component,Fragment} from "react"
import { Animated, Text, View } from 'react-native'
import Anime from "../../../anime.js"

class Battle extends Component {
  state={...this.props.state,}
  render(){
    return (
      <Fragment>
        <View style={{width:"100%",flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20}}>Test</Text>
          </Anime>
        </View>
        <View style={{width:"100%",flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:"red"}}>
          <Anime>
            <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Test</Text>
            <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Test</Text>
            <Text style={{color:"white",fontSize:20,textAlign:"center"}}>Test</Text>
          </Anime>
        </View>
      </Fragment>
    )
  }
}

export default Battle

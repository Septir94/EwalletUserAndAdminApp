import React, { Component } from 'react';
import {Toolbar} from 'react-native-material-ui';
import { View } from 'react-native';

export default class CostumButton extends Component{
  render(){
    return (
      <View style={{marginTop:23}}>
      <Toolbar
      leftElement={this.props.icon}
      centerElement={this.props.name}
      rightElement={{
          menu: {
              icon: "more-vert",
              labels: ["Logout"],
              
          }
      }}
      onRightElementPress={ () => { this.props.navigation.navigate("Login") }}
      onLeftElementPress={this.props.navigate}
      
    />
    </View>
  )
}
    
}
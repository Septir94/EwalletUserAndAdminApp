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
  
      onLeftElementPress={this.props.navigate}
      
    />
    </View>
  )
}
    
}
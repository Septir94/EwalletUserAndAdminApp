import React, { Component } from 'react';
import {Toolbar} from 'react-native-material-ui';
import { View } from 'react-native';

export default class CostumButton extends Component{
  render(){
    return (
      <View style={{marginTop:23}}>
      <Toolbar
      centerElement="Searchable"
        searchable={{
          autoFocus: true,
          placeholder: 'Search',
          onChangeText:this.props.changeHandler
        }}
      leftElement={this.props.icon}
      centerElement={this.props.name}
      rightElement={{
          menu: {
              icon: "more-vert",
              labels: ["Shopping Cart", "Wishlist"],
          }
      }}
      onRightElementPress={ (label) => { console.log(label) }}
      onLeftElementPress={this.props.navigate}
      
    />
    </View>
  )
}
    
}
import React from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';

import { Overlay, Input, Button, Divider } from 'react-native-elements';
import Login from '../components/Login';
import Accountuser from '../components/Accountuser';
import {connect} from 'react-redux';

class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account',
    header: null
  };

  submitAccount(values){
      //console.log(values)
  }


  render() {
    return (
      <View style={styles.container}>

        <Accountuser onSubmit={this.submitAccount}/>

        <Login isVisible={this.props.visible}/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

function mapStateToProps(state) {
  //console.log(state);
  return { visible: !state.user.login }
}

export default connect(
    mapStateToProps,
    null
)(AccountScreen);

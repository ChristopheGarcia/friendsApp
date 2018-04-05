import React from 'react';
import { View } from 'react-native';
import {Overlay, Divider } from 'react-native-elements';

import {connect} from 'react-redux';

import Signinform from '../components/Signinform';
import Signupform from '../components/Signupform';

function textAccount(props) {
  const { input } = props;
  return (
    <View>
      <Input
        onChangeText={input.onChange}
        value={input.value}
      />
    </View>
  );
}

class Login extends React.Component {

  constructor(){
    super();
    this.submitSignin = this.submitSignin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);

  }

  submitSignin(values){
      var ctx = this;
      fetch('http://10.254.1.36:3000/users/signin?email='+values.email+"&password="+values.password)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
        console.log(data);
        if(data.result == true){
          ctx.props.onSubmitSignin(values.email, values.password, data.firstName, data.lastName, data.company);
        }
      }).catch(function(error) {
          console.log('Request failed', error)
      });

  }
  submitSignup(values){
    var ctx = this;
    fetch('https://guarded-forest-43002.herokuapp.com/signup', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: 'email='+values.email+'&firstName='+values.firstName+'&lastName='+values.lastName+'&password='+values.password
    }).then(function(response) {
        return response.json();
    })
    .then(function(data) {
      if(data.result == true){
        ctx.props.onSubmitSignup(values.email, values.password, values.firstName, values.lastName);
      }
    }).catch(function(error) {
        console.log('Request failed', error)
    });

  }

  render() {
    return (<Overlay isVisible={this.props.isVisible}>
      <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

        <Signinform onSubmit={this.submitSignin}/>

        <Divider style={{ backgroundColor: 'blue' }} />

        <Signupform onSubmit={this.submitSignup}/>

      </View>

    </Overlay>);
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmitSignin: function(email, password, firstName, lastName) {
        dispatch( {type: 'signin', email, password, firstName, lastName} )
    },
    onSubmitSignup: function(email, password, firstName, lastName) {
        console.log("onSubmitSignin");
        dispatch( {type: 'signup', email, password, firstName, lastName} )
    }
  }
}

export default connect(
    null,
    mapDispatchToProps
)(Login);

import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { reduxForm, Field } from "redux-form";

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

class Signupform extends React.Component {

  render(){
    return(
      <View>

        <Field
          name="firstName"
          component={textAccount}
        />
        <Field
          name="lastName"
          component={textAccount}
        />
        <Field
          name="email"
          component={textAccount}
        />
        <Field
          name="password"
          component={textAccount}
        />

        <Button
          onPress={this.props.handleSubmit}
          text="Sign Up"
          textStyle={{ fontWeight: "700" }}
          buttonStyle={{
            backgroundColor: "#3498db",
            width: 200,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}
          containerStyle={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default reduxForm({
  form: 'signup'
})(Signupform);

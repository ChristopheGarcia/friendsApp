import React from 'react';
import { Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { initialize, reduxForm, Field } from "redux-form";

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

class Accountuser extends React.Component {
  render() {
    return (
    <View style={{flex:1,justifyContent: 'center',alignItems: 'center' }}>

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
        name="paswword"
        component={textAccount}
      />



      <Button
        onPress={this.props.handleSubmit}
        text="Update"
        textStyle={{ fontWeight: "700" }}
        buttonStyle={{
          backgroundColor: "#3498db",
          width: 300,
          height: 45,
          borderColor: "transparent",
          borderWidth: 0,
          borderRadius: 5
        }}
        containerStyle={{ marginTop: 20 }}
      />
    </View>
  );
  }
}


export default reduxForm({
  form: 'accountuser'
})(Accountuser);

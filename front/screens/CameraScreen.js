import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import Cam from '../components/Cam';
import {Button, Avatar} from 'react-native-elements';
import { FileSystem } from 'expo';


export default class CameraScreen extends React.Component {
  static navigationOptions = {
      header: null,
    };

  constructor() {
    super();
    this.handleClick=this.handleClick.bind(this);
    this.state={cameraOn:false};
}

    handleClick(){
      this.setState({
     cameraOn: true
   });
}

    afterSnap(id){
      var picId = id - 1;
      this.setState({
     cameraOn: false, photoId : picId
    });
    }

  render() {
    var display;
    if(this.state.cameraOn){
      display = <Cam onPict={this.afterSnap.bind(this)} />
    }else{
      display=<View style={{flex : 1, justifyContent: "center", alignItems : "center"}}>
                <Avatar
                    xlarge
                    rounded
                    source={{uri: `${FileSystem.documentDirectory}photos/Photo_1.jpg`}}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                  />
              <Button
                 onPress={this.handleClick}
                text='Take a Picture'
                buttonStyle={{
                              marginTop:50,
                              backgroundColor: "#f9ca24",
                              width: 200,
                              height: 45,
                              borderColor: "transparent",
                              borderWidth: 0,
                              borderRadius: 5,
                              marginLeft:25,
                            }}
              />
            </View>
    }
    return (
      <View style={styles.container}>
          {display}
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

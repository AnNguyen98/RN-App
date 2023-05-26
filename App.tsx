import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Config from 'react-native-config';

const App = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          console.log(Config);
        }}>
        <Text>API_URL: {Config.API_URL}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'cyan',
  },
});

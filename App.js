import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, SafeAreaView } from 'react-native';

import { MethodModalPicker } from './components/method_modal_picker';

export default function App() {
  const [chooseOption, setChooseOption] = useState("Select a method")
  const [isMethodsModalVis, setIsMethodsModalVis] = useState(false)

  const changeMethodsModalVisibility = (bool) => {
    setIsMethodsModalVis(bool)
  }

  return (
    <SafeAreaView style={styles.container}>
       <TouchableOpacity 
        onPress={ () => changeMethodsModalVisibility(true) }
        style={styles.touchableOpacity}
       >
          <Text style={styles.text}>{chooseOption}</Text>
       </TouchableOpacity>
       <Modal
        transparent={true}
        animationType="fade"
        visible={isMethodsModalVis}
        nRequestClose={ () => changeMethodsModalVisibility(false) }
       >
         <MethodModalPicker changeMethodsModalVisibility={changeMethodsModalVisibility} />
       </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  touchableOpacity: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    paddingHorizontal: 20
  },
  text: {
    marginVertical: 20,
    fontSize: 25
  },
});

import {useState} from 'react';
import { Image, ImageBackground, StyleSheet, Text, View, Button, SafeAreaView, Alert} from 'react-native';
import MainScreen from './mainScreen';
import campusMap from "./screenImages/campusMap.png"; 

export default function FuncButt() {
  const [isActive, setIsActive] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Please choose a building to navigate to.
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Gil"
          onPress={() => {
            <ImageBackground>
                source = campusMap
                style = {styles.imageB}
            </ImageBackground>
        }
        }
        />
        <Button
          title="Nonny"
          onPress={() => Alert.alert('Nonny button pressed')}
        />
        <Button
          title="Deema"
          onPress={() => Alert.alert('Deema button pressed')}
        />
        <Button
          title="Ooma"
          onPress={() => Alert.alert('Ooma button pressed')}
        />
        <Button
          title="Goby"
          onPress={() => Alert.alert('Goby button pressed')}
        />
        <Button
          title="Grub Guppy"
          onPress={() => Alert.alert('Grub Guppy button pressed')}
        />
        <Button
          title="Feeding Frenzy Cafe"
          onPress={() => Alert.alert('Feeding Frenzy Cafe button pressed')}
        />
        <Button
          title="Anemone 1"
          onPress={() => Alert.alert('Anemone 1 button pressed')}
        />
        <Button
          title="Anemone 2"
          onPress={() => Alert.alert('Anemone 2 button pressed')}
        />
        <Button
          title="Anemone 3"
          onPress={() => Alert.alert('Anemone 3 button pressed')}
        />
        <Button
          title="Anemone 4"
          onPress={() => Alert.alert('Anemone 4 button pressed')}
        />
        <Button
          title="Library"
          onPress={() => Alert.alert('Library button pressed')}
        />
        <Button
          title="Rac"
          onPress={() => Alert.alert('Rac button pressed')}
        />
      </View>
    </View>
  </SafeAreaView>
  );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize: 20
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flexWrap:'wrap'
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    header: {
      backgroundColor: '#c6bafe',
      alignSelf: 'center',
      height: '100%',
      width:'100%', 
      position: 'absolute',
      bottom:0
    },
    imageB: {
        backgroundColor: '#c6bafe',
        alignSelf: 'center',
        height: '100%',
        width:'100%', 
        position: 'absolute',
        bottom:0
    },
    test:{
        ImageBackground: campusMap
    }
  });
 
const gil = () => {
   return(
    <View>
        <MainScreen/>
    </View>
   );
}
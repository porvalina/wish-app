import * as React from 'react';
import { Dimensions, StyleSheet, Text, View, SafeAreaView, Image, useColorScheme, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { BlurView } from "@react-native-community/blur";
import Button from '../components/button';
import colors from '../../styles/colors';

const { width } = Dimensions.get('window')
export default function WelcomeScreen({ navigation }) { 

  const colorScheme = useColorScheme();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <LinearGradient style={styles.linearGradient} colors={[colors.blue, '#fff']} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}>
      </LinearGradient>
      <BlurView
        blurType="light"
        blurAmount={10}
        style={styles.blur} />
      <View style={styles.container}>
        <View style={styles.welcomeHeaderWrapper}>
          <Text style={styles.welcomeHeader}>Welcome to the 100Wish 👋</Text>
        </View>

        <View style={styles.headerWrapper}>
          <Text style={styles.welcomeTextHeader}>Wish it, Dream it, Do it</Text>
        </View>
        <View style={styles.listContainer}>
          <View style={styles.welcomeTextContainer}>
            <View style={styles.point}></View>
            <Text style={styles.welcomeText}>Dive into your innermost thoughts and desires. 
            Our app provides a platform for you to articulate your aspirations, 
            covering areas such as personal development, relationships, career, and more.</Text>
          </View>
          <View style={styles.welcomeTextContainer}>
            <View style={styles.point}></View>
            <Text style={styles.welcomeText}>Focusing on your wishes helps foster a positive 
            mindset. By acknowledging your dreams, you're taking the first step towards 
            turning them into reality.</Text>
          </View>
          <View style={styles.welcomeTextContainer}>
            <View style={styles.point}></View>
            <Text style={styles.welcomeText}>Begin your journey by listing 100 wishes. 
            Reflect on your wishes and assign priorities to help you focus on what 
            truly matters to you.</Text>
          </View>
        </View>
        <Button
          title="Create the first wish"
          onPress={() => navigation.navigate('FirstWish')}
        />
      </View>
    </SafeAreaView>
  );
}
const circleDiameter = width * 1.666
const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    width: circleDiameter+10,
    height: circleDiameter+10,
    padding: 10,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  linearGradient: {
    position: 'absolute',
    backgroundColor: colors.blue,
    width: circleDiameter,
    height: circleDiameter,
    borderRadius: circleDiameter/2,
    top: 10,
    left: 10
  },
  container: {
    flex: 1,
    paddingHorizontal: width * 0.12,
    justifyContent: 'space-evenly',
  },
  welcomeHeaderWrapper: {
  },
  welcomeHeader: {
    color: colors.darkBlue,
    textAlign: 'center'
  },
  listContainer: {
    flexDirection: 'column',
  },
  welcomeTextContainer: {
    padding: 16,
    paddingTop: 5,
    flexDirection: 'row',
  },
  point: {
    backgroundColor: colors.darkBlue,
    width: 8,
    height: 8,
    borderRadius: 8/2,
    marginTop: 5,
    marginRight: 5,
  },
  welcomeText: {
      fontSize: 15,
      color: colors.darkBlue,
  }, 
    logo: {
        width: 150,
        height: 150,
        borderRadius: 15,
        resizeMode: 'contain',
        marginLeft: 100, 
        marginRight: 100,
        marginTop: 50, 
      },
      headerWrapper: {
        // flexDirection: 'vertical',
        justifyContent: 'center',
      },
      welcomeTextHeader: {
        marginTop: 16,
        paddingVertical: 10,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: colors.darkBlue,
    },
    button: {
        backgroundColor: 'darkgreen',
        borderColor: 'green',
        borderRadius: 10,
        padding: 10,
        marginVertical: 8,
        margin: 12,
      },
      buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
      },
});
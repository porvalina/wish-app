import * as React from 'react';
import { StyleSheet, Button, Text, View, ScrollView, Image, useColorScheme, Pressable} from 'react-native';
import colors from '../../styles/colors';

export default function LaunchScreen({ navigation }) { 

  const colorScheme = useColorScheme();

  return (
    <ScrollView>
      <View style={styles.headerWrapper} >
        <Text style={styles.logo}>W</Text>
        <Text style={styles.welcomeTextHeader}>100Wish</Text>
        <Text style={styles.policy}>Privacy Policy</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    logo: {
        fontSize: 60,
        color: colors.darkBlue,
      },
      headerWrapper: {
        // flexDirection: 'vertical',
        justifyContent: 'center',
      },
      welcomeTextHeader: {
        marginTop: 16,
        color: colors.darkBlue,
        paddingVertical: 10,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
    },
    policy: {
      color: colors.darkBlue,
    }
});
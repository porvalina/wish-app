import * as React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function WishHeader() {
  return (
    <View style={styles.header}>
        <Image 
            style={styles.logo} 
            source={require('../images/logo.jpg')
            } />
        <Text style={styles.headertext}>visualise and focus on your dream</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flex: 0.2,
        backgroundColor: 'white'
    }, 
    logo: {
        width: 70,
        height: 70,
        borderRadius: 15,
        resizeMode: 'contain', 
      },
    headertext: {
        padding: 10,
        fontSize: 15,
        color: 'black' 
    },
});
import * as React from 'react';
import { Dimensions, SafeAreaView, View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import Button from '../components/button';
import RoundButton from '../components/roundButton';
import colors from '../../styles/colors';
import { launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { addWish } from './redux/action';



const { width } = Dimensions.get('window')

export default function FirstWishScreen( {navigation}) {

  const [galleryPhoto, setGalleryPhoto] = useState();
  const [wish, setWish] = useState('');

  const  wishList  = useSelector(state => state.wishes);
  const dispatch = useDispatch();

const handleAddWish = () => {
  dispatch(addWish(wish))
  setWish('')
  navigation.navigate('WishList')
}

  let options = {
    mediaType: 'photo',
  }

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerWrapper}>
        <TextInput
          placeholder='Add wish name'
          style={styles.nameInput} />
        {
          galleryPhoto ?
          <Image 
            style={styles.image} 
            source={{uri:galleryPhoto}} /> : 
          <TouchableOpacity 
            style={styles.image}
            onPress={openGallery}>
            <Text style={styles.imageText}>Choose image</Text>
          </TouchableOpacity>
        }


        <View style={styles.buttonGroupContainer}>
          <RoundButton image="" onPress={() => {}} />
          <RoundButton image="" onPress={() => {}} />
          <RoundButton image="" onPress={() => {}} />
        </View>
        <Button
            title="Add wish to the list"
            onPress={handleAddWish}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  containerWrapper: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  nameInput: {
    backgroundColor: colors.lightBlue,
    padding: 10,
    color: colors.inputGrey,
    borderRadius: 10,
  },
  buttonGroupContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  image: {
    backgroundColor: colors.lightBlue,
    height: (width - 40) * 0.68,
    justifyContent: 'center',
  },
  imageText: {
    color: colors.inputGrey,
    textAlign: 'center',
  }
  
});
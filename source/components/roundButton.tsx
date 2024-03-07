import { Pressable, StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../styles/colors';

type RoundButtonProps = {
  image: string;
  onPress: () => void;
}

export default ({ image, onPress}: RoundButtonProps) => 
    <Pressable onPress={onPress}
        style={styles.wrapperCustom}>
        <Image source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }} />
    </Pressable>

const styles = StyleSheet.create({
  wrapperCustom: {
    padding: 16,
    width: 60,
    height: 60,
    borderRadius: 60/2,
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
  },
})
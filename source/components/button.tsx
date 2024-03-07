import { Pressable, StyleSheet, Text, View, Image} from 'react-native';
import colors from '../../styles/colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
}

export default ({ title, onPress}: ButtonProps) => 
    <Pressable onPress={onPress}
        style={styles.wrapperCustom}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#FFF'
  },
  wrapperCustom: {
    borderRadius: 30,
    padding: 16,
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
  },
})
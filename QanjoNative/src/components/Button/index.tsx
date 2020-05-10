import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  ViewStyle,
} from 'react-native';
import { colors } from '../../theme';

type ButtonProps = {
  buttonType?: 'Primary' | 'Secondary';
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
  style?: ViewStyle;
};

const Button: React.FC<ButtonProps> = ({
  buttonType = 'Primary',
  onPress,
  title,
  disabled = false,
  loading = false,
  style,
}) => {
  const primary = buttonType === 'Primary';
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View
        style={[
          styles.btn,
          primary ? styles.primaryBtn : styles.secondaryBtn,
          disabled && styles.disabled,
          style,
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: primary ? colors.buttonText : colors.paragraph },
          ]}
        >
          {title}
        </Text>
        {loading && <ActivityIndicator color="white" />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    width: 150,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  primaryBtn: {
    backgroundColor: colors.button,
  },
  secondaryBtn: {
    backgroundColor: colors.background,
    borderColor: colors.paragraph,
    borderWidth: 2,
    borderRadius: 10,
  },
  text: {
    paddingHorizontal: 10,
    fontWeight: '700',
  },
  disabled: {
    opacity: 0.35,
  },
});

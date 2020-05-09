import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet, Text, ActivityIndicator, View } from 'react-native';
import { colors } from '../../theme';

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  title: string;
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
  loading = false,
}) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <View style={[styles.btn, disabled && styles.disabled]}>
        <Text style={styles.text}>{title}</Text>
        {loading && <ActivityIndicator color="white" />}
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: colors.button,
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 30,
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    color: colors.buttonText,
    paddingHorizontal: 10,
    fontWeight: "700"
  },
  disabled: {
    opacity: 0.35,
  },
});

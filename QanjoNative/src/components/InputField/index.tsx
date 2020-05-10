import React from 'react';
import { StyleSheet, View, TextInput, Text, ViewStyle } from 'react-native';
import { colors, borders } from '../../theme';

type InputFieldProps = {
  onChangeText: (text: string) => void;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
  value?: string;
  style?: ViewStyle;
};

const InputField: React.FC<InputFieldProps> = ({
  onChangeText,
  placeholder,
  hasError,
  value,
  style,
}) => {
  return (
    <View style={[styles.inputView, hasError && styles.hasError, style]}>
      <TextInput
        value={value}
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={colors.paragraph}
        onChangeText={onChangeText}
        clearButtonMode="always"
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    height: 50,
    padding: 20,
    justifyContent: 'center',
    borderWidth: borders.width,
    borderRadius: borders.radius,
    borderColor: colors.paragraph,
    backgroundColor: colors.background,
  },
  hasError: {
    borderColor: colors.red,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    color: colors.paragraph,
  },
});

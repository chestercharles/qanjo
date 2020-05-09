import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { colors } from '../../theme';

type InputFieldProps = {
  onChangeText: (text: string) => void;
  placeholder?: string;
  hasError?: boolean;
  errorMessage?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  onChangeText,
  placeholder,
  hasError,
}) => {
  return (
    <>
      <View style={[styles.inputView, hasError && styles.hasError]}>
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          placeholderTextColor={colors.paragraph}
          onChangeText={onChangeText}
          clearButtonMode="always"
        />
      </View>
    </>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: colors.background,
    borderColor: colors.paragraph,
    borderWidth: 2,
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
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

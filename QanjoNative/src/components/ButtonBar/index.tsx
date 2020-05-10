import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Button from '../Button';

type ButtonBarProps = {
  onPrimaryPress: () => void;
  onSecondaryPress: () => void;
  primaryTitle: string;
  secondaryTitle: string;
  primaryLoading?: boolean;
  secondaryLoading?: boolean;
  primaryDisabled?: boolean;
  secondaryDisabled?: boolean;
  style?: ViewStyle;
};

const ButtonBar: React.FC<ButtonBarProps> = ({
  onPrimaryPress,
  onSecondaryPress,
  primaryTitle,
  secondaryTitle,
  primaryLoading = false,
  secondaryLoading = false,
  primaryDisabled = false,
  secondaryDisabled = false,
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Button
        buttonType="Secondary"
        onPress={onSecondaryPress}
        title={secondaryTitle}
        disabled={secondaryDisabled}
        loading={secondaryLoading}
      />
      <Button
        buttonType="Primary"
        onPress={onPrimaryPress}
        title={primaryTitle}
        disabled={primaryDisabled}
        loading={primaryLoading}
      />
    </View>
  );
};

export default ButtonBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

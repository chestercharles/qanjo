import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../theme';
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
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <Button
          buttonType="Secondary"
          onPress={onSecondaryPress}
          title={secondaryTitle}
          disabled={secondaryDisabled}
          loading={secondaryLoading}
        />
      </View>
      <View style={styles.btn}>
        <Button
          buttonType="Primary"
          onPress={onPrimaryPress}
          title={primaryTitle}
          disabled={primaryDisabled}
          loading={primaryLoading}
        />
      </View>
    </View>
  );
};

export default ButtonBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btn: {
    paddingHorizontal: 10,
  },
});

import React, { ReactNode } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../theme';

type HeaderProps = {
  title?: string;
  contentRight?: ReactNode;
  contentLeft?: ReactNode;
  onTitlePress?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  title,
  contentRight,
  contentLeft,
  onTitlePress,
}) => {
  let titleElement: ReactNode;
  if (typeof onTitlePress !== 'undefined') {
    titleElement = (
      <TouchableOpacity onPress={onTitlePress}>
        <Text style={styles.titleText}>{title}</Text>
      </TouchableOpacity>
    );
  } else {
    titleElement = <Text style={styles.titleText}>{title}</Text>;
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.container}>
        <View style={styles.left}>{contentLeft}</View>
        <View style={styles.center}>{titleElement}</View>
        <View style={styles.right}>{contentRight}</View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: colors.background,
    shadowOpacity: 1,
    shadowColor: colors.stroke,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
  },
  titleText: {
    fontWeight: '800',
  },
  center: {
    width: '33.3%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  right: {
    width: '33.3%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  left: {
    width: '33.3%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
});

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constants';
import { useTheme } from '../theme/ThemeProvider';
import { Image } from 'expo-image';

interface CategoryProps {
  name: string;
  icon: string;
  iconColor: string;
  backgroundColor: string;
  onPress: () => void;
}

const Category: React.FC<CategoryProps> = ({
  name,
  icon,
  iconColor,
  backgroundColor,
  onPress,
}) => {
  const { dark } = useTheme();

  const displayName = name.length > 9 ? `${name.slice(0, 9)}...` : name;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        style={[
          styles.iconContainer,
          {
            backgroundColor: COLORS.primary,
          },
        ]}
      >
        <Image
          source={icon}
          // contentFit="contain"
          tintColor={COLORS.white}
          style={[
            styles.icon,
            // {
            //   tintColor: iconColor,
            // },
          ]}
        />
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        style={[
          styles.name,
          {
            color: COLORS.primary,
            // color: dark ? COLORS.white : COLORS.greyscale900,
          },
        ]}
      >
        {displayName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    // marginBottom: 12,
    // width: (SIZES.width - 32) / 4,
    // // backgroundColor: COLORS.primary,
    // paddingVertical: 10,
    // paddingHorizontal: 16,
    // borderRadius: 12,
  },
  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 8,
  },
  icon: {
    height: 34,
    width: 34,
  },
  name: {
    fontSize: 12,
    fontFamily: 'semiBold',
  },
});

export default Category;

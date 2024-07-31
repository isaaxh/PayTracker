import { View, Text } from "react-native";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import SettingsIcon from "./SettingsIcon";

const HeaderHome = () => {
  return (
    <View className="flex-row justify-between items-center w-full px-4 py-4">
      <ProfileIcon />
      <View className="flex-1 px-3">
        <Text className="dark:text-white">Welcome!</Text>
        <Text className="dark:text-white">Isaac</Text>
      </View>
      <SettingsIcon />
    </View>
  );
};

export default HeaderHome;

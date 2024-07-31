import { View, Text } from "react-native";
import React from "react";
import ProfileIcon from "./ProfileIcon";
import SettingsIcon from "./SettingsIcon";
import UIText from "./ui/UIText";

const HeaderHome = () => {
  return (
    <View className="flex-row justify-between items-center w-full px-6 py-4">
      <ProfileIcon />
      <View className="flex-1 px-3">
        <UIText variant="subHeader" textStyles="font-medium">
          Welcome!
        </UIText>
        <UIText variant="header3">John Doe</UIText>
      </View>
      <SettingsIcon />
    </View>
  );
};

export default HeaderHome;

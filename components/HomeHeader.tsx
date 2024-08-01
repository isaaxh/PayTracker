import { View, Text } from "react-native";
import React from "react";
import ProfileButton from "./ProfileButton";
import SettingsButton from "./SettingsButton";
import UIText from "./ui/UIText";

const HomeHeader = () => {
  return (
    <View className="flex-row justify-between items-center w-full px-6 py-4">
      <ProfileButton />
      <View className="flex-1 px-3">
        <UIText variant="subHeader" textStyles="font-medium">
          Welcome!
        </UIText>
        <UIText variant="header3">John Doe</UIText>
      </View>
      <SettingsButton />
    </View>
  );
};

export default HomeHeader;

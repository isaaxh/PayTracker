import { View } from "react-native";
import React from "react";
import UIText from "./ui/UIText";

const TransactionHeader = () => {
  return (
    <View className="flex-row justify-between items-center pb-1">
      <UIText variant="header3" textStyles="">
        Transactions
      </UIText>
      <UIText variant="subHeader">View All</UIText>
    </View>
  );
};

export default TransactionHeader;

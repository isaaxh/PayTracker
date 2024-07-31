import { View } from "react-native";
import React from "react";
import IconComponent from "./IconComponent";
import UIText from "./ui/UIText";

type SummaryComponentProps = {
  label: "Income" | "Expenses";
  amount: number;
};

const SummaryComponent = ({ label, amount }: SummaryComponentProps) => {
  return (
    <View className="flex-row items-center gap-x-3">
      <View className="bg-white p-1 rounded-full bg-bgTransparent">
        <IconComponent
          name={label === "Income" ? "arrow up" : "arrow down"}
          variant="Linear"
          color={label === "Income" ? "#a3e635" : "#ef4444"}
        />
      </View>
      <View className="items-center">
        <UIText textStyles="text-textDark text-sm">{label}</UIText>
        <UIText textStyles="text-textDark font-bold">
          {amount.toFixed(2)}
        </UIText>
      </View>
    </View>
  );
};

export default SummaryComponent;
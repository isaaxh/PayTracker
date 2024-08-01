import { View, Text } from "react-native";
import React from "react";
import UIText from "./ui/UIText";
import TransactionIcon from "./TransactionIcon";
import { CategoryLabelType, categories } from "@/constants/Categories";
import { GlobalStyles } from "@/utils/globalStyles";

type TransactionIconProps = {
  category: CategoryLabelType;
  amount: number;
  date: string;
};

const TransactionCard = ({ category, amount, date }: TransactionIconProps) => {
  return (
    <View
      className="bg-bgSecondaryColor dark:bg-darkBgSecondaryColor flex-row px-6 py-6 mb-3 rounded-3xl items-center"
      /* style={GlobalStyles.shadow} */
    >
      <TransactionIcon category={categories[category]} />
      <View className="flex-1 ml-3">
        <UIText textStyles="font-bold text-lg">
          {categories[category].label}
        </UIText>
      </View>
      <View className="items-end">
        <UIText textStyles="text-sm font-medium">
          SAR {amount.toFixed(2)}
        </UIText>
        <UIText textStyles="text-xs text-tintLight dark:text-tintDark">
          {date}
        </UIText>
      </View>
    </View>
  );
};

export default TransactionCard;

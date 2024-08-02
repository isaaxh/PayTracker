import { TouchableOpacity, View } from "react-native";
import React from "react";
import UIText from "./ui/UIText";
import LinearGradView from "./LinearGradView";
import SummaryComponent from "./SummaryComponent";
import { Link } from "expo-router";

const monthlyPayout = 4800;

const TotalPayCard = () => {
  return (
    <LinearGradView>
      <Link href="/StatsTab" asChild>
        <TouchableOpacity className="py-7 px-2 items-center gap-y-2">
          <View>
            <UIText textStyles="text-textDark text-base">Monthly Payout</UIText>
          </View>
          <View className="flex-row items-center mb-4">
            <UIText textStyles="text-textDark text-4xl font-bold">
              SAR {monthlyPayout.toFixed(2)}
            </UIText>
          </View>
          <View className="flex-row w-full px-4 justify-between">
            <SummaryComponent label="Income" amount={558.0} />
            <SummaryComponent label="Expenses" amount={356.0} />
          </View>
        </TouchableOpacity>
      </Link>
    </LinearGradView>
  );
};

export default TotalPayCard;

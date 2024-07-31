import { View } from "react-native";
import React from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionList from "./TransactionList";

const TransactionHistory = () => {
  return (
    <View className="">
      <TransactionHeader />
      <TransactionList />
    </View>
  );
};

export default TransactionHistory;

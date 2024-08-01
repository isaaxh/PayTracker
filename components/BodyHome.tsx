import { View, Text, Switch } from "react-native";
import TotalPayCard from "./TotalPayCard";
import TransactionHistory from "./TransactionHistory";

const BodyHome = () => {
  return (
    <View className="w-full flex-1 px-6 py-4">
      <TotalPayCard />
      <TransactionHistory />
      {/*--------------------------------  */}
    </View>
  );
};

export default BodyHome;

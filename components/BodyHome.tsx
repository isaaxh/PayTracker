import { View, Text, Switch } from "react-native";
import { useColorScheme } from "nativewind";
import TotalPayCard from "./TotalPayCard";
import TransactionHistory from "./TransactionHistory";

const BodyHome = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="w-full flex-1 px-6 py-4">
      <TotalPayCard />
      <TransactionHistory />
      {/*--------------------------------  */}
      <View className="bg-transparent items-center">
        <Text className="text-black dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
    </View>
  );
};

export default BodyHome;

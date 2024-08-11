import { View } from "react-native";
import TotalPayCard from "./TotalPayCard";
import TransactionHistoryFeed from "./TransactionHistoryFeed";
import { useGlobal } from "@/hooks/useGlobal";
import { GlobalContextProps } from "@/services/providers/GlobalProvider";

const HomeBody = () => {
  const { userData } = useGlobal() as GlobalContextProps;
  console.log(userData);
  return (
    <View className="w-full flex-1 px-6 py-4">
      <TotalPayCard />
      <TransactionHistoryFeed />
    </View>
  );
};

export default HomeBody;

import { Switch } from "react-native";
import { Text, View } from "@/components/Themed";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import HeaderHome from "@/components/HeaderHome";
import { SafeAreaView } from "react-native-safe-area-context";

function HomeTab() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <SafeAreaView className="bg-bgColor dark:bg-zinc-900 flex-1 items-center">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <HeaderHome />
      <View className="bg-transparent items-center">
        <Text className="text-black dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
    </SafeAreaView>
  );
}

export default HomeTab;

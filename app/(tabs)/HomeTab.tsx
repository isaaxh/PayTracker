import { StatusBar } from "expo-status-bar";
import HeaderHome from "@/components/HeaderHome";
import { SafeAreaView } from "react-native-safe-area-context";
import BodyHome from "@/components/BodyHome";
import { useColorScheme } from "nativewind";

function HomeTab() {
  const { colorScheme } = useColorScheme();
  return (
    <SafeAreaView className="bg-bgColor dark:bg-darkBgColor flex-1 items-center">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <HeaderHome />
      <BodyHome />
    </SafeAreaView>
  );
}

export default HomeTab;

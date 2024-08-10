import { Button, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useColorScheme } from "nativewind";
import { Text, View } from "@/components/Themed";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import { useAuth } from "@/hooks/useAuth";

export default function TabTwoScreen() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { logout } = useAuth() as AuthContextProps;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <View className="bg-transparent items-center">
        <Text className="text-black dark:text-white">Toggle Theme</Text>
        <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      </View>
      <TouchableOpacity onPress={logout}>
        <Text>Log out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
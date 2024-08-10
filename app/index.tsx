import { Switch, TouchableOpacity, View, Text } from "react-native";
import React from "react";
import LoginForm from "@/components/LoginForm";
import { useColorScheme } from "nativewind";
import { StatusBar } from "expo-status-bar";
import { AuthContextProps } from "@/services/providers/AuthProvider";
import { useAuth } from "@/hooks/useAuth";

const index = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const { logout } = useAuth() as AuthContextProps;
  return (
    <View className="bg-bgColor dark:bg-darkBgColor flex-1 px-4 py-6">
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <LoginForm />
      <Switch value={colorScheme === "dark"} onChange={toggleColorScheme} />
      <TouchableOpacity onPress={logout}>
        <Text className="text-orange-400">Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;

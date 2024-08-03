import { Stack } from "expo-router";
import React from "react";

export default function AuthLayout() {
  return <AuthLayoutNav />;
}

function AuthLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" />
      <Stack.Screen name="SignupScreen" />
    </Stack>
  );
}

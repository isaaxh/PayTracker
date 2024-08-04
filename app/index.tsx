import { Redirect } from "expo-router";

const index = () => {
  return <Redirect href="/(auth)/LoginScreen" />;
};

export default index;

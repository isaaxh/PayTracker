import { TouchableOpacity } from "react-native";
import IconComponent from "./IconComponent";
import { useColorScheme } from "nativewind";
import Colors from "@/constants/Colors";

const SettingsIcon = () => {
  const { colorScheme } = useColorScheme();
  return (
    <TouchableOpacity className="bg-bgSecondaryColor dark:bg-darkBgSecondaryColor p-2 rounded-xl inline-block justify-center items-center">
      <IconComponent
        name="setting"
        color={colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint}
        size={20}
      />
    </TouchableOpacity>
  );
};

export default SettingsIcon;
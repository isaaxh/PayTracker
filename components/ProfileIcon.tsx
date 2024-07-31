import { TouchableOpacity } from "react-native";
import IconComponent from "./IconComponent";
import { useColorScheme } from "nativewind";
import Colors from "@/constants/Colors";

const ProfileIcon = () => {
  const { colorScheme } = useColorScheme();
  return (
    <TouchableOpacity className="bg-orange-300 p-2 rounded-full inline-block justify-center items-center">
      <IconComponent
        name="profile"
        /* color={colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint} */
        color={"#ffffff"}
      />
    </TouchableOpacity>
  );
};

export default ProfileIcon;
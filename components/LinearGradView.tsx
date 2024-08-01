import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "@/utils/globalStyles";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

type LinearGradViewProps = {
  children: ReactNode;
  className?: string;
};

const LinearGradView = ({ children }: LinearGradViewProps) => {
  return (
    <LinearGradient
      className="rounded-3xl mb-6"
      style={GlobalStyles.shadow}
      colors={["#2bace3", "#ce68f7", "#f9907f"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.8, y: 1.2 }}
      locations={[0, 0.6, 1]}
    >
      <Link href="/StatsTab" asChild>
        <TouchableOpacity className="py-7 px-4 items-center gap-y-2">
          {children}
        </TouchableOpacity>
      </Link>
    </LinearGradient>
  );
};

export default LinearGradView;

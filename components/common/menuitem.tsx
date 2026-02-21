import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface MenuItemProps {
  icon?: any; // @expo/vector-icons
  desc: string;
  sub_desc?: string;
  onPress?: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  icon = "information-circle-outline",
  desc,
  sub_desc = "",
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View className="px-4 py-2 flex flex-row items-center justify-start">
        <View className="items-center flex justify-center">
          <Ionicons name={icon} color="black" size={24} className="mr-4" />
        </View>
        <View className="flex-1 flex flex-row justify-between relative">
          <Text className="text-base text-black font-bold -top-[0.05rem]">
            {desc}
          </Text>
          <Text className="text-xs text-gray-600">{sub_desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MenuItem;

import React from "react";
import { Image, View } from "react-native";

const Avatar: React.FC<{
  src?: string;
  size?: number;
  className?: string;
}> = ({
  src = "https://bbs.hycdn.cn/asset/avatar/04fd45d25fde55799b8e3df64ead6c29.webp",
  size = 32,
  className = "",
}) => {
  return (
    <View className={className}>
      <Image src={src} height={size} width={size} className="object-cover" />
    </View>
  );
};

export default Avatar;

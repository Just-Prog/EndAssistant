import Avatar from "@/components/common/avatar";
import MenuItem from "@/components/common/menuitem";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AccountTabLayout() {
  // const options = {};
  return (
    <SafeAreaView>
      <View className="flex w-screen h-max min-h-max flex-col">
        {/* 用户信息 */}
        <TouchableOpacity onPress={() => {}}>
          <View className="flex-row flex bg-white py-8 px-8">
            <Avatar size={64} className="mr-5" />
            <View className="flex flex-col justify-center  items-start flex-1">
              <Text className="text-xl font-bold">UserName</Text>
              <Text className="text-lg">UserStatus</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="bg-white flex-col flex">
          <MenuItem
            icon={"enter-outline"}
            desc="登录"
            sub_desc="登录您的 HG 通行证"
            onPress={() => {
              // TODO
            }}
          />
          <MenuItem
            icon={"information-sharp"}
            desc="关于"
            sub_desc="关于 EndAssistant"
            onPress={() => {}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

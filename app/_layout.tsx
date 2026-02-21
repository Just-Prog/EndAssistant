import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { verifyInstallation } from "nativewind";
import { useEffect } from "react";
import "../global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  useEffect(() => {
    // verify nativewind installation
    verifyInstallation();
  }, []);

  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}

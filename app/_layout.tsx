import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      {/* <StatusBar style="light" translucent={true} /> */}
      <Stack screenOptions={{ headerShown: false }} />
    </>
  );
}

import { StatusBar } from 'expo-status-bar';
import fonts from "./config/fonts";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from './navigation';
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded] = useFonts(fonts);

  return !fontsLoaded ? null : (
    <SafeAreaProvider>
      <Navigation />
      <StatusBar style='light' />
    </SafeAreaProvider>
  );
}


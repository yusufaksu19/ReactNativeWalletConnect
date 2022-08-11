import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import MainScreen from './screens/MainScreen';

export default function App() {
  const isLoadingComplete = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <MainScreen />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

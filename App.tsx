import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

import { SplashScreen } from './src/features/Modulo_Autenticacion/presentation/SplashScreen';
import { LoginScreen } from './src/features/Modulo_Autenticacion/presentation/LoginScreen';

export default function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <StatusBar style="light" />
      {isSplashVisible ? (
        <SplashScreen onAnimationFinish={() => setIsSplashVisible(false)} />
      ) : (
        <LoginScreen />
      )}
    </SafeAreaView>
  );
}
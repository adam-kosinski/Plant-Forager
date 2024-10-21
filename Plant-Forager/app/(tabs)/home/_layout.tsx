// app/home/_layout.tsx
import { Stack } from 'expo-router';

export default function HomeStack() {
  return (
    <Stack>
      {/* Main Home Screen */}
      <Stack.Screen
        name="HomeScreen"
        options={{ title: 'Home' }}
      />
      {/* Home Details Screen */}
      <Stack.Screen
        name="PlantDetailWithMap"
        options={{ title: 'Details' }}
      />
    </Stack>
  );
}

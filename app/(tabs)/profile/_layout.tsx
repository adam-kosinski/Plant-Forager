// app/profile/_layout.tsx
import { Stack } from 'expo-router';

export default function ProfileStack() {
  return (
    <Stack>
      {/* Main Profile Screen */}
      <Stack.Screen
        name="ProfileScreen"
        options={{ title: 'Profile' }}
      />
      {/* Edit Profile Screen */}
      <Stack.Screen
        name="Favorites"
        options={{ title: 'Favorites' }}
      />

      <Stack.Screen
        name="SaveForLater"
        options={{ title: 'Save For Later' }}
      />
    </Stack>
  );
}

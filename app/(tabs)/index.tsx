// app/home/HomeScreen.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Home Screen</Text>
      <Button title="Go to Details" onPress={() => router.push('/PlantDetailWithMap')} />
    </View>
  );
}

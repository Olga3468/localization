import { useLanguage } from '@/src/i18n/LanguageContext';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Language() {
  const router = useRouter();
  const { setLanguage } = useLanguage();

  const chooseLanguage = (lang: string) => {
    setLanguage(lang as any);
    router.replace('/(tabs)');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose your language</Text>

      <Pressable style={styles.button} onPress={() => chooseLanguage('en')}>
        <Text style={styles.buttonText}>English</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => chooseLanguage('et')}>
        <Text style={styles.buttonText}>Estonian</Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => chooseLanguage('ru')}>
        <Text style={styles.buttonText}>Russian</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 30,
  },
  button: {
    width: '80%',
    paddingVertical: 14,
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2, // Android shadow
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});

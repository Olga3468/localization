import { StyleSheet } from 'react-native';
import { Text, View } from '@/src/components/app_expo_files/Themed';
import { i18n } from '@/src/i18n';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18n.t('appName')}</Text>
      <Text>{i18n.t('welcome')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

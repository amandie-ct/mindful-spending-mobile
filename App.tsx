import { StyleSheet } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
} from 'react-native-safe-area-context';

import { Text } from './src/components/Text/Text';

function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen} edges={['top', 'right', 'bottom', 'left']}>
        <Text
          preset="headingLarge"
          style={styles.title}
        >
          Mindful spending
        </Text>
        <Text
          preset="headingSmall"
          style={styles.body}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni ex
          asperiores, exercitationem amet fugiat explicabo ut vitae blanditiis
          dolorum vero quidem, provident id, cumque obcaecati? Quia fugiat
          vitae nihil officiis? Autem, molestiae placeat corrupti et recusandae
          tempore praesentium, excepturi fugiat a accusamus, doloribus error
          exercitationem sunt at numquam necessitatibus soluta? Ut, quis? Odit
          quis minus praesentium architecto adipisci numquam veniam.
        </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    marginBottom: 20,
    fontFamily: 'AbrilFatface-Regular',
  },
  body: {
    fontFamily: 'Raleway-Medium-Original',
  },
});

export default App;

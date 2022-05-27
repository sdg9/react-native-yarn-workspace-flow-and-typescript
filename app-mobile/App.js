/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

// Flow compatible
import {hello} from 'util-hello-world';
import {hello as helloFlow} from 'util-hello-world-flow';
import {hello as helloTSCompiled} from 'util-hello-world-ts-compiled';

// No Flow
import {hello as helloNoFlow} from 'util-hello-world-no-flow';
import {hello as helloTS} from 'util-hello-world-ts';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Flow happy imports</Text>
          <Text>Hello: {hello()}</Text>
          <Text>Hello Flow: {helloFlow()}</Text>
          <Text>Hello TS Compiled: {helloTSCompiled()}</Text>
          <View style={styles.buffer}>
            <Text>Flow error imports</Text>
            <Text>Hello TS: {helloTS()}</Text>
            <Text>Hello No Flow: {helloNoFlow()}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  buffer: {
    paddingTop: 10,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

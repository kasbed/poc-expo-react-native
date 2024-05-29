import { Text, View, Button, StyleSheet } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
  } from 'react-native-reanimated';

const TabTreeScreen = () => {
    const insets = useSafeAreaInsets();
    const randomWidth = useSharedValue(10);

    const config = {
        duration: 500,
        easing: Easing.bezier(0.5, 0.01, 0, 1),
    };

    const style = useAnimatedStyle(() => {
        return {
        width: withTiming(randomWidth.value, config),
        };
    });

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1, paddingTop: insets.top }}>
                <Text style={{ fontSize: 28 }}>Content is in safe area.</Text>
            </View>
            <View style={styles.container}>
            <Animated.View style={[styles.box, style]} />
                <Button
                    title="toggle"
                    onPress={() => {
                    randomWidth.value = Math.random() * 350;
                    }}
                />
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 100,
      height: 80,
      backgroundColor: 'red',
      margin: 30,
    },
  });

export default TabTreeScreen;
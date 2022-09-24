import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native';
import HomeScreen from "./HomeScreen";
import Trending from "./Trending";
import Top from "./Top";
import DetailedPage from './DetailedPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='Home' component={HomeScreen} options={{
                    headerStyle: {
                        backgroundColor: '#191970',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'Helvetica',
                    },
                    headerTitleAlign: 'center',
                    tabBarActiveBackgroundColor: '#0492C2',
                    tabBarInactiveBackgroundColor: '#191970',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image 
                                style={{
                                    width: size,
                                    height: size
                                }}
                                source={require("./pictures/home.png")}
                            />                        
                        );
                    }
                }} 
            />

                <Tab.Screen name='Trending' options={{
                    headerStyle: {
                        backgroundColor: '#191970',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'Helvetica',
                    },
                    headerTitleAlign: 'center',
                    tabBarActiveBackgroundColor: '#0492C2',
                    tabBarInactiveBackgroundColor: '#191970',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                    headerTitle: "Trending movies",
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image 
                                style={{
                                    width: size,
                                    height: size
                                }}
                                source={require("./pictures/trending.png")}
                            />                        
                        );
                    }
                }}>
                    {() => (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='Trending movies' component={Trending}></Stack.Screen>
                            <Stack.Screen name='DetailedPage' component={DetailedPage}></Stack.Screen>
                        </Stack.Navigator>
                    )}
                </Tab.Screen>

                <Tab.Screen name='Top' options={{
                    headerStyle: {
                        backgroundColor: '#191970',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontFamily:'Helvetica',
                    },
                    headerTitleAlign: 'center',
                    tabBarActiveBackgroundColor: '#0492C2',
                    tabBarInactiveBackgroundColor: '#191970',
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarLabelStyle: {
                        fontSize: 15,
                    },
                    headerTitle: "Top rated movies",
                    tabBarIcon: ({ size, focused, color }) => {
                        return (
                            <Image 
                                style={{
                                    width: size,
                                    height: size
                                }}
                                source={require("./pictures/toprated.png")}
                            />                        
                        );
                    }
                }}>
                    {() => (
                        <Stack.Navigator screenOptions={{ headerShown: false }}>
                            <Stack.Screen name='Top movies' component={Top}></Stack.Screen>
                            <Stack.Screen name='DetailedPage' component={DetailedPage}></Stack.Screen>
                        </Stack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./HomeScreen";
import Trending from "./Trending";
import New from "./New";

const Tab = createBottomTabNavigator();

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
                        fontSize: '15px',
                    }
                }} />

                <Tab.Screen name='Trending movies' component={Trending} options={{
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
                        fontSize: '15px',
                    }
                }} />

                <Tab.Screen name='New movies' component={New} options={{
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
                        fontSize: '15px',
                    }
                }} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
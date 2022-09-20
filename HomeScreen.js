import { StyleSheet, Text, View } from 'react-native';
import { generalStyles } from './GeneralStyles';

export default function Home() {
    return (
        <View style={styles.home}>
            <h1 style={generalStyles.header1}>TheMovieGuide!</h1>
            <Text style={generalStyles.text}>Use the tab navigation to select movies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center',
        backgroundColor: '#212121',
    },
});

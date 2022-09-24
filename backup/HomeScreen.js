import { StyleSheet, Text, View } from 'react-native';
import { generalStyles } from './GeneralStyles';

export default function Home() {
    return (
        <View style={styles.home}>
            <h1 style={generalStyles.header1}>TheMovieGuide!</h1>
            <Text style={generalStyles.text}>Use the tab navigation to select a desired movie category. {"\n\n"} You can click on pictures to see more informations about a movie</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    home: {
        flex: 1, 
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#212121',
    },
});

import { StyleSheet } from "react-native";
import { COLORS } from '../styles/colors';
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    titleText: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        color: COLORS.raDarker
    },
    titleTextLight: {
        fontFamily: 'roboto-bold',
        fontSize: 18,
        color: COLORS.lightWhite
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
        textAlign: 'justify'
    },
    centerContainerDark: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.raDarker, //zmiana
    },
    centerContainerLight: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#eee'//'#3b3b4c',
    },
    paddingText: {
        padding: 5,
    },
});
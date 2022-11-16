import { StyleSheet } from 'react-native'
import { SIZES, FONTS } from 'theme'

const styles = StyleSheet.create({
    section: {
        flex: 1,
        padding: SIZES.padding, 
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: SIZES.padding,
    },

    logoContainer: {
        alignItems: 'flex-start',
    },
    logo: {
        fontSize: SIZES.large,
        fontFamily: FONTS.bold,
        letterSpacing: 1
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 10,
        paddingHorizontal: SIZES.padding,
    },
    input: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        fontSize: SIZES.font,
        fontFamily: FONTS.regular,
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 50,
    },
    searchIcon: {
        position: 'absolute',
        left: 24,
        top: 32,
        zIndex: 1,
    },
});

export default styles;
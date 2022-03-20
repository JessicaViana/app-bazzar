import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
    //   container: {
    //     flex: 1,
    //     backgroundColor: colors.background,
    //   },
    //   section: {
    //     margin: metrics.doubleBaseMargin,
    //   },
    //   sectionTitle: {
    //     color: colors.text,
    //     fontWeight: 'bold',
    //     fontSize: fonts.regular,
    //     alignSelf: 'center',
    //     marginBottom: metrics.doubleBaseMargin,
    //   },
    pageMargin: {
        marginHorizontal: metrics.baseMargin,
    },
    headerTitle: {
        color: colors.titleActive,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.title,
        marginVertical: metrics.verticalMargin,
        letterSpacing: 4,
        textStroke: 5
        // lineHeight: 140,
    },
    sectionSubTitle: {
        color: colors.titleActive,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.title,
        marginTop: metrics.verticalMargin,
        textTransform: 'uppercase',
        letterSpacing: 4,
        // lineHeight: 140,
    },
    sectionRecommended: {
        color: colors.primary,
        fontFamily: fonts.fontFamilySemiBold,
        fontSize: fonts.recommendedSize,
        marginTop: metrics.verticalMargin
        // lineHeight: 140,
    },
};

export default general;
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
        margin: metrics.baseMargin,
    },
    sectionTitle: {
        color: colors.primary,
        fontFamily: fonts.fontFamilySemiBold,
        fontSize: fonts.titleSize * 1.2,
        marginVertical: metrics.verticalMargin,
        letterSpacing: 4
        // lineHeight: 140,
    },
    sectionSubTitle: {
        color: colors.primary,
        fontFamily: fonts.fontFamilySemiBold,
        fontSize: fonts.subtitleSize,
        marginTop: metrics.verticalMargin,
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
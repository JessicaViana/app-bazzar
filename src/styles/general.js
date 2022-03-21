import metrics from './metrics';
import colors from './colors';
import fonts from './fonts';

const general = {
    pageMargin: {
        marginHorizontal: metrics.baseMargin,
    },
    headerTitle: {
        color: colors.titleActive,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.title,
        marginVertical: metrics.verticalMargin,
        letterSpacing: 4,
        textStroke: 5,
        textTransform: 'uppercase',
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
        color: colors.label,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.recommendedSize,
        marginTop: metrics.verticalMargin *2
        // lineHeight: 140,
    },
};

export default general;
// import React, { useRef, useState,ViewToken } from 'react';
// import { View, StyleSheet, Dimensions, Image, FlatList,} from 'react-native';
// import banners from '../../utils/banner_const'

// const { width } = Dimensions.get('window')

// // const imageIndexProps {
// //     active: boolean
// // }

// const ChangeImageProps = {
//     viewableItens: ViewToken(),
//     changed: ViewToken(),

// }

// const [imageIndex, setImageIndex] = useState(0)

// const indexChanged = useRef(({ viewableItens }) => {
//     setImageIndex(viewableItens[0].index)
// })

// export default function Slider() {
//     return (
//         <View style={style.container}>
//             <View style={style.bannerImageWrapper}>
//                 <FlatList
//                     // horizontal
//                     pagingEnabled
//                     data={banners}
//                     onViewableItemsChanged={indexChanged.current}
//                     keyExtractor={item => item.id}
//                     renderItem={({ item }) =>
//                     (
//                         <View style={style.bannerImageWrapper}>
//                             <Image style={style.bannerImage} source={item.image} />
//                         </View>
//                     )


//                     }
//                 />
//                 <View style={indexChanged === 0 ? style.styleWithFocus : style.styleWithoutFocus} />
//             </View>

//             <View style={style.bannerImageWrapper}>
//                 <Image style={style.bannerImage} source={banners[0].image} />
//             </View>
//         </View>


//     );
// }

// const style = StyleSheet.create({
//     container: {
//         // flex: 1,
//         width: '100%',
//     },
//     imageIndexes: {
//         flexDirection: 'row',
//         alignSelf: 'flex-end',
//         paddingRight: 24,
//     },
//     imageIndex: {
//         width: 6,
//         // height: 6,
//         backgroundColor: 'black', // ${({active}) => active ? 'black' : 'gray'};
//         marginLeft: 8,
//         borderRadius: 3
//     },
//     bannerImageWrapper: {
//         width: '100%', // ${width},
//         // height: 200,
//     },
//     bannerImage: {
//         width: '100%',
//         height: 130
//     },
//     styleWithoutFocus: {},
//     styleWithFocus: {},

// }
// )
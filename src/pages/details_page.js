import React, {useState} from 'react';
import { FlatList, View, Text, Image, StyleSheet, TouchableOpacity,ScrollView } from 'react-native';
import ProductsCard from '../components/cards/products_card';
import { general, metrics, colors, fonts } from '../styles';
import categories from '../utils/categories_const';
import products from '../utils/products_const';
import colection from '../utils/colection_const'


export default function DetailsPage({ route, navigation }) {
    const { itemName, itemPrice, itemImage, itemDescription, itemMaterials, itemReview } = route.params;

    const [tab1Style, setTab1Style] = useState(colors.accentVariation);
    const [tab2Style, setTab2Style] = useState();
    const [tab3Style, setTab3Style] = useState();

    const [text, setText] = useState(itemDescription);


    const settingTab1Style = () => {
        if(tab1Style == colors.accentVariation){
            setTab1Style();
        } else{
            setTab1Style(colors.accentVariation);
            setText(itemDescription)
            setTab2Style();
            setTab3Style();
        }
    }
    const settingTab2Style = () => {
        if(tab2Style == colors.accentVariation){
            setTab2Style();
        } else{
            setTab2Style(colors.accentVariation);
            setText(itemMaterials)
            setTab1Style();
            setTab3Style();
        }
    }
    const settingTab3Style = () => {
        if(tab3Style == colors.accentVariation){
            setTab3Style();
        } else{
            setText(itemReview)
            setTab3Style(colors.accentVariation);
            setTab1Style();
            setTab2Style();
        }
    }

    TabbingStyle = function(color){
        return {
            height: 37,
            borderRadius: 8,
            paddingHorizontal: 20,
            backgroundColor: color,
            justifyContent: 'center',
            margin: 2,
            color: colors.accent,
        }
    }


    return (
        <View style={{ height: '100%', }}>
            <Image style={style.image} source={itemImage} />
            <ScrollView style={style.sheet}>
                <Text style={style.productName}>{itemName}</Text>
                <Text style={style.productPrice}>{itemPrice}</Text>
                <View style={{ margin: metrics.verticalMargin }} />

                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={TabbingStyle(tab1Style)} onPress={settingTab1Style}>
                        <Text style={style.textButtonActive}>Description</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={TabbingStyle(tab2Style)} onPress={settingTab2Style}>
                        <Text style={style.textButtonActive}>Materials</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={TabbingStyle(tab3Style)}onPress={settingTab3Style} >
                        <Text style={style.textButtonActive}>Review</Text>
                    </TouchableOpacity>
                </View>
                <Text>
                    {text}
                </Text>
                <Text style={general.sectionRecommended}>
                    Similar products
                </Text>
                <FlatList
                data={products}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => {
                    return (
                        <ProductsCard
                        name={item.name}
                        price={item.price}
                        image={item.image}
                        onClick={() => navigation.navigate('DetailsPage', {
                            itemName: item.name,
                            itemPrice: item.price,
                            itemImage: item.image,
                            itemDescription: item.description,
                            itemMaterials: item.materials,
                            itemReview: item.review,
                        })} />
                    );
                }} />
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    sheet: {
        backgroundColor: 'white',
        borderRadius: 25,
        zIndex: 1,
        position: 'absolute',
        height: '100%',
        width: '100%',
        marginTop: 290,
        paddingTop: metrics.verticalMargin * 2,
        paddingLeft: metrics.baseMargin

    },
    productName: {
        color: colors.primary,
        fontFamily: fonts.fontFamily,
        fontSize: fonts.subtitleSize
    },
    productPrice: {
        color: colors.accent,
        fontFamily: fonts.fontFamilySemiBold,
        fontSize: fonts.subtitleSize
    },
    image: {
        zIndex: 0,
        width: '100%',
        height: 319,

    },
    
    textButtonActive: {
        color: colors.accent,
        fontFamily: fonts.fontFamilySemiBold,
        fontSize: fonts.buttonsSize
    },
    
})
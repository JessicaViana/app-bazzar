import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import SearchField from '../components/search_field'
import CategoriesSection from '../components/categories_section'
import CategoriesCards from '../components/cards/categories_card'
import Icon from 'react-native-vector-icons/Feather';
import ProductsCard from '../components/cards/products_card';
import categories from '../utils/categories_const';
import products from '../utils/products_const';
import colection from '../utils/colection_const'
import Slider from '../components/slider';


export default function HomePage({ navigation }) {

    [search, setSearch] = useState("");


    return (
        <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} bounces={false}>
            <View style={{ alignItems: 'center', margin:5 }}>
                <Text style={general.sectionTitle}>{`BAZZAR`}</Text>
            </View>
            <Slider/>
            <Image source={require('../../assets/images/banner-1.png')} style={{width: '100%'}} />
            <View style={general.pageMargin} >
            <CategoriesSection title={'Categorias'} />
            
            <CategoriesCards categories={categories} />
            <SearchField />
            <CategoriesSection title={'Mais procurados'} />
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
            <CategoriesSection title={'COLEÇÕES'} subtitle={'textSize'} />
            <Text style={{ fontSize: fonts.textSize, fontFamily: fonts.fontFamily, marginBottom: 10, color: colors.secondary }}>As coleções que fazem sucesso</Text>
            <CategoriesCards categories={colection} />
            </View>

        </ScrollView>

    );
}





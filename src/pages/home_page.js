import 'react-native-gesture-handler'

import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, FlatList, View, Image } from 'react-native';
import { general, fonts, metrics, colors } from '../styles';
import SearchField from '../components/search_field'
import CategoriesSection from '../components/sections/categories_section'
import CategoriesCards from '../components/cards/categories_card'
import ProductsCard from '../components/cards/products_card';
import products from '../utils/products_const';
import newProducts from '../utils/new_products_const';
import colection from '../utils/colection_const'
import Slider from '../components/sliders/slider';
import Header from '../components/header';
import SliderHeader from '../components/sliders/slider_header';
import Divider from '../components/divider';
import ExploreMoreButton from '../components/buttons/explore_more_button';
import BrandSection from '../components/sections/brands_section';
import AboutSection from '../components/sections/about_section';
import SocialSection from '../components/sections/social_section';


export default function HomePage({ navigation }) {

    [search, setSearch] = useState("");


    return (
        <>
            {/* <Slider/> */}
            <Header />
            <ScrollView showsVerticalScrollIndicator={false} alwaysBounceVertical={false} bounces={false}>
                <View>
                    <SliderHeader />

                </View>
                <View>
                    <CategoriesSection title={'New Arrival'} />
                    <Divider />
                    <View style={{ margin: metrics.verticalMargin }} />
                    <View style={general.pageMargin}>

                        <FlatList
                            data={newProducts}
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
                    </View>
                    {/* <CategoriesCards categories={categories} />
                    <SearchField /> */}
                    <ExploreMoreButton />
                    <BrandSection />
                    <View style={{ margin: metrics.verticalMargin }} />
                    <CategoriesSection title={'Collections'} />
                    <View style={{ margin: metrics.verticalMargin }} />

                    <Image source={require('../../assets/images/banner-1.png')} style={{ resizeMode: 'cover', width: '100%' }} />
                    <View style={{ margin: metrics.verticalMargin }} />
                    {/* <Image source={require('../../assets/images/banner-2.png')} style={{ width: '100%' }} /> */}
                    <CategoriesSection title={'Just for You'} />

                    <Divider />
                    <View style={{ margin: metrics.verticalMargin }} />
                    <FlatList
                        horizontal
                        // pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        data={products}
                        keyExtractor={item => item.id}
                        numColumns={1}
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
                    <View style={{ margin: metrics.verticalMargin }} />
                    <CategoriesSection title={'@Trending'} subtitle={'textSize'} />
                    <CategoriesCards categories={colection} />
                    <AboutSection/>
                    <SocialSection/>
                </View>

            </ScrollView>
        </>

    );
}





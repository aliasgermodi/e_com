import React from 'react';
import {View, Text} from 'react-native';
import {RootSafeAreaView, RootView, RootScrollView} from '_styles/RootView';
import {
  Card,
  ImageView,
  Title,
  Description,
  Price,
  Button,
} from '_styles/productDetails';

const ProductDetails = () => {
  return (
    <RootSafeAreaView>
      <RootScrollView>
        <RootView>
          <Card>
            <ImageView
              source={require('_assets/images/shoes.jpg')}
              resizeMode="cover"
            />
          </Card>
          {/* <Conat> */}
          <Title align={'left'}>Shoes</Title>
          <Description>
            Sample Description
          </Description>
          <Price>$200</Price>
          <Button>
            <Title align={'center'} color={'#ffffff'}>
              Buy Now
            </Title>
          </Button>
        </RootView>
      </RootScrollView>
    </RootSafeAreaView>
  );
};

export default ProductDetails;
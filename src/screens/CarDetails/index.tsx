import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider 
          imageUrl={['https://freepngimg.com/thumb/audi/35-red-audi-png-car-image.png']} 
        />
      </CarImages>
      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>BBC</Name>
          </Description>
          <Rent>
            <Period>Ao dia</Period>
            <Price>580</Price>
          </Rent>
        </Details>
        <About> fdfdf</About>
      </Content>
    </Container>
  );
}
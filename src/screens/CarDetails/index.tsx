import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

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
  Accessories,
  About,
  Footer
} from './styles';

export function CarDetails(){
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>
      <CarImages>
        <ImageSlider 
          imagesUrl={['https://freepngimg.com/thumb/audi/35-red-audi-png-car-image.png']} 
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
        <Accessories>
          <Accessory name="380Km/h" icon={speedSvg} />
          <Accessory name="3.2s" icon={accelerationSvg} />
          <Accessory name="800 HP" icon={forceSvg} />
          <Accessory name="Gasolina" icon={gasolineSvg} />
          <Accessory name="Auto" icon={exchangeSvg} />
          <Accessory name="2 pessoas" icon={peopleSvg} />
        </Accessories>
        <About> fdfdf</About>
      </Content>
      <Footer>
        <Button title="Confirmar"/>
      </Footer>
    </Container>
  );
}
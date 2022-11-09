import React, { ReactElement } from 'react';

// Types
import { Card as CardType } from 'types';

// Components
import { MainLayout } from 'components';

const data: CardType[] = [
  {
    title: 'Spider-Man: The Lost Hunt (2022) #1',
    description:
      'The origins of Kraven finally revealed! J.M. Dematteis continues to spin new webs within the past, this time partnered with artist Eder Messias! Revealing secrets and answering mysteries Spidey fans have been waiting for — prepare to explore the depths of what made Kraven the Hunter the powerhouse villain he was! As Peter Parker and Mary Jane prepare for their new lives in Portland, a man from Kraven’s past stalks them. Who is this mystery man, and what does he want with Spider-Man? Find out when we return to the time period after Spider-Man: The Final Adventure when Peter Parker was powerless!',
    imageUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/4/03/63658b25120f5/portrait_uncanny.jpg'
  },
  {
    title: 'Ghost Rider (2022) #8',
    description:
      'Johnny Blaze and Talia Warroad — working together?! As part of a splinter unit within the F.B.I., they will map out the shadow highways that crisscross the country, uncovering the larger design of an underworld conspiracy!',
    imageUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/7/20/63658b3f64f9a/portrait_uncanny.jpg'
  },
  {
    title: 'Star Wars: The High Republic (2022) #2',
    description:
      'Death Strikes On Jedha! A Jedi lies dead in an ancient shrine, another on the trail of the murderer. Who is using ancient Force powers on the streets of the holy city, and why are sacred relics going missing? And why do all roads lead to the Temple of the Whills?',
    imageUrl:
      'https://i.annihil.us/u/prod/marvel/i/mg/a/03/63658b24d9062/portrait_uncanny.jpg'
  }
];

function Comics(): ReactElement {
  return <MainLayout title="Comics" data={data} />;
}

export default Comics;

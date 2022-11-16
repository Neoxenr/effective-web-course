import React, { ReactElement } from 'react';

// Types
import { Card as CardType } from 'types';

// Components
import { MainLayout } from 'components';

const data: CardType[] = [
  {
    title: 'Agent Mobius',
    description:
      'Mobius is an agent for the Time Variance Authority who specializes in the investigations of particularly dangerous time criminals.',
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/1078mob_ons_crd_01.jpg'
  },
  {
    title: 'Ant-Man',
    description:
      'Ex-con Scott Lang finds a new lease on life, and a chance to redeem himself in the eyes of his daughter, after taking over the mantle of Ant-Man.',
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_ons_crd_04.jpg'
  },
  {
    title: 'Moon Knight',
    description:
      'A mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life.',
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/343mkn_com_crd_01.jpg'
  }
];

function Characters(): ReactElement {
  return <MainLayout title="Characters" data={data} />;
}

export default Characters;

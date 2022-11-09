import React, { ReactElement } from 'react';

// Types
import { Card as CardType } from 'types';

// Components
import { MainLayout } from 'components';

const data: CardType[] = [
  {
    title: 'Iron Man 3',
    description:
      "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/ironman3_lob_crd_01_10.jpg'
  },
  {
    title: 'Avengers',
    description:
      "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg'
  },
  {
    title: 'Logan',
    description:
      "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
    imageUrl:
      'https://terrigen-cdn-dev.marvel.com/content/prod/1x/logan_lob_crd_02.jpg'
  }
];

function Series(): ReactElement {
  return <MainLayout title="Series" data={data} />;
}

export default Series;

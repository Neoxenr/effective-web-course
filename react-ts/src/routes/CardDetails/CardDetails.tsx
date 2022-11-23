// React
import React, { ReactElement, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// MUI
import {
  Grid,
  StyledEngineProvider,
  Typography,
  Box,
  Link
} from '@mui/material';

// i18n
import { useTranslation } from 'react-i18next';

// Types
import { CardDetail } from 'types';

// SCSS
import styles from './CardDetails.module.scss';

const data: CardDetail[] = [
  {
    id: '6000dec4-68a9-11ed-9022-0242ac120002',
    title: 'Agent Mobius',
    description:
      'Mobius is an agent for the Time Variance Authority who specializes in the investigations of particularly dangerous time criminals.',
    imageUrl: '/images/mobius.webp',
    appearances: {
      comics: [
        {
          title: 'Murderworld: Avengers (2022) #1',
          link: 'https://www.marvel.com/comics/issue/103829/murderworld_avengers_2022_1'
        },
        {
          title: 'Iron Man (2020) #25',
          link: 'https://www.marvel.com/comics/issue/101541/iron_man_2020_25'
        }
      ],
      series: [
        {
          title: 'Loki | Season 1',
          link: 'https://www.marvel.com/tv-shows/loki/1'
        },
        {
          title: 'Loki | Season 2',
          link: 'https://www.marvel.com/tv-shows/loki/2'
        }
      ]
    }
  },
  {
    id: '71b39094-68a9-11ed-9022-0242ac120002',
    title: 'Ant-Man',
    description:
      'Ex-con Scott Lang finds a new lease on life, and a chance to redeem himself in the eyes of his daughter, after taking over the mantle of Ant-Man.',
    imageUrl: '/images/ant-man.webp',
    appearances: {
      comics: [
        {
          title: 'Wakanda (2022) #2',
          link: 'https://www.marvel.com/comics/issue/100415/wakanda_2022_2'
        },
        {
          title: 'Thunderbolts (2022) #4',
          link: 'https://www.marvel.com/comics/issue/101115/thunderbolts_2022_4'
        }
      ],
      series: [
        {
          title: 'Ant-man And The Wasp Quantumania',
          link: 'https://www.marvel.com/movies/ant-man-and-the-wasp-quantumania'
        },
        {
          title: 'Black Panther Wakanda Forever',
          link: 'https://www.marvel.com/movies/black-panther-wakanda-forever'
        }
      ]
    }
  },
  {
    id: '763ac74a-68a9-11ed-9022-0242ac120002',
    title: 'Moon Knight',
    description:
      'A mild-mannered gift-shop employee, becomes plagued with blackouts and memories of another life.',
    imageUrl: '/images/moon-knight.webp',
    appearances: {
      comics: [
        {
          title: 'The Amazing Spider-Man (2018) #1',
          link: 'https://www.marvel.com/comics/issue/67631/the_amazing_spider-man_2018_1'
        },
        {
          title: 'Spider-Man/Venom (2020) #1',
          link: 'https://www.marvel.com/comics/issue/85661/free_comic_book_day_spider-manvenom_2020_1'
        }
      ],
      series: [
        {
          title: 'Moon Knight | Season 1',
          link: 'https://www.marvel.com/tv-shows/moon-knight/1'
        },
        {
          title: 'Moon Knight | Season 2',
          link: 'https://www.marvel.com/tv-shows/moon-knight/2'
        }
      ]
    }
  },
  {
    id: '99c36bae-68a9-11ed-9022-0242ac120002',
    title: 'Spider-Man: The Lost Hunt (2022) #1',
    description:
      'The origins of Kraven finally revealed! J.M. Dematteis continues to spin new webs within the past, this time partnered with artist Eder Messias! Revealing secrets and answering mysteries Spidey fans have been waiting for — prepare to explore the depths of what made Kraven the Hunter the powerhouse villain he was! As Peter Parker and Mary Jane prepare for their new lives in Portland, a man from Kraven’s past stalks them. Who is this mystery man, and what does he want with Spider-Man? Find out when we return to the time period after Spider-Man: The Final Adventure when Peter Parker was powerless!',
    imageUrl: '/images/spider-man.jpg',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      series: [
        {
          title: 'Moon Knight | Season 1',
          link: 'https://www.marvel.com/tv-shows/moon-knight/1'
        },
        {
          title: 'Moon Knight | Season 2',
          link: 'https://www.marvel.com/tv-shows/moon-knight/2'
        }
      ]
    }
  },
  {
    id: 'a1aebb84-68a9-11ed-9022-0242ac120002',
    title: 'Ghost Rider (2022) #8',
    description:
      'Johnny Blaze and Talia Warroad — working together?! As part of a splinter unit within the F.B.I., they will map out the shadow highways that crisscross the country, uncovering the larger design of an underworld conspiracy!',
    imageUrl: '/images/ghost-rider.jpg',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      series: [
        {
          title: 'Moon Knight | Season 1',
          link: 'https://www.marvel.com/tv-shows/moon-knight/1'
        },
        {
          title: 'Moon Knight | Season 2',
          link: 'https://www.marvel.com/tv-shows/moon-knight/2'
        }
      ]
    }
  },
  {
    id: 'a478c300-68a9-11ed-9022-0242ac120002',
    title: 'Star Wars: The High Republic (2022) #2',
    description:
      'Death Strikes On Jedha! A Jedi lies dead in an ancient shrine, another on the trail of the murderer. Who is using ancient Force powers on the streets of the holy city, and why are sacred relics going missing? And why do all roads lead to the Temple of the Whills?',
    imageUrl: '/images/star-wars.jpg',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      series: [
        {
          title: 'Moon Knight | Season 1',
          link: 'https://www.marvel.com/tv-shows/moon-knight/1'
        },
        {
          title: 'Moon Knight | Season 2',
          link: 'https://www.marvel.com/tv-shows/moon-knight/2'
        }
      ]
    }
  },
  {
    id: '84b51f50-68a9-11ed-9022-0242ac120002',
    title: 'Iron Man 3',
    description:
      "Marvel's 'Iron Man 3' pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy's hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle. With his back against the wall, Stark is left to survive by his own devices, relying on his ingenuity and instincts to protect those closest to him. As he fights his way back, Stark discovers the answer to the question that has secretly haunted him: does the man make the suit or does the suit make the man",
    imageUrl: '/images/iron-man.webp',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      comics: [
        {
          title: 'The Amazing Spider-Man (2018) #1',
          link: 'https://www.marvel.com/comics/issue/67631/the_amazing_spider-man_2018_1'
        },
        {
          title: 'Spider-Man/Venom (2020) #1',
          link: 'https://www.marvel.com/comics/issue/85661/free_comic_book_day_spider-manvenom_2020_1'
        }
      ]
    }
  },
  {
    id: '8974171c-68a9-11ed-9022-0242ac120002',
    title: 'Avengers',
    description:
      "Marvel Studios presents in association with Paramount Pictures 'Marvel's The Avengers'--the super hero team up of a lifetime, featuring iconic Marvel super heroes Iron Man, the Incredible Hulk, Thor, Captain America, Hawkeye and Black Widow. When an unexpected enemy emerges that threatens global safety and security, Nick Fury, Director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    imageUrl: '/images/avengers.jpg',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      comics: [
        {
          title: 'The Amazing Spider-Man (2018) #1',
          link: 'https://www.marvel.com/comics/issue/67631/the_amazing_spider-man_2018_1'
        },
        {
          title: 'Spider-Man/Venom (2020) #1',
          link: 'https://www.marvel.com/comics/issue/85661/free_comic_book_day_spider-manvenom_2020_1'
        }
      ]
    }
  },
  {
    id: '8d2d91d0-68a9-11ed-9022-0242ac120002',
    title: 'Logan',
    description:
      "In the near future, a weary Logan cares for an ailing Professor X in a hide out on the Mexican border. But Logan's attempts to hide from the world and his legacy are up-ended when a young mutant arrives, being pursued by dark forces.",
    imageUrl: '/images/logan.webp',
    appearances: {
      characters: [
        {
          title: 'Agent Mobius',
          link: 'https://www.marvel.com/characters/agent-mobius'
        },
        {
          title: 'Ant-Man',
          link: 'https://www.marvel.com/characters/ant-man-scott-lang'
        }
      ],
      comics: [
        {
          title: 'The Amazing Spider-Man (2018) #1',
          link: 'https://www.marvel.com/comics/issue/67631/the_amazing_spider-man_2018_1'
        },
        {
          title: 'Spider-Man/Venom (2020) #1',
          link: 'https://www.marvel.com/comics/issue/85661/free_comic_book_day_spider-manvenom_2020_1'
        }
      ]
    }
  }
];

function CardDetails(): ReactElement {
  const { id } = useParams<string>();

  const [details, setDetails] = useState<CardDetail | null | undefined>(null);

  const { t } = useTranslation();

  useEffect(() => {
    setDetails(data.find((item) => item.id === id));
  }, [id]);

  return (
    <StyledEngineProvider injectFirst>
      <Box component="main" className={styles.cardDetails}>
        <Box
          component="div"
          className={styles.image}
          sx={{ backgroundImage: `url(${details?.imageUrl})` }}
        />
        <Grid container className={styles.details}>
          <Grid item xs={3} className={styles.description}>
            <Typography variant="h5" className={styles.header}>
              {details?.title}
            </Typography>
            <Typography variant="body1">{details?.description}</Typography>
          </Grid>
          {details?.appearances !== undefined &&
            Object.entries(details.appearances).map(([title, detailLinks]) => (
              <Grid key={title} xs={3} item>
                <Typography variant="h6" className={styles.title}>
                  {t(`header.navigation.${title}`)}
                </Typography>
                <Box component="div" className={styles.linkContainer}>
                  {detailLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.link}
                      rel="noreferrer"
                      target="_blank"
                      className={styles.link}
                    >
                      <Typography>{item.title}</Typography>
                    </Link>
                  ))}
                </Box>
              </Grid>
            ))}
        </Grid>
      </Box>
    </StyledEngineProvider>
  );
}

export default CardDetails;

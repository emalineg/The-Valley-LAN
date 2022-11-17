import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import Autoplay from 'embla-carousel-autoplay';
import { createStyles, Paper, useMantineTheme } from '@mantine/core';
import { useRef } from 'react';

const useStyles = createStyles((theme) => ({
  card: {
    height: 150,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
}));


interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    />
  );
}

export type TeamCarouselProps = {
  teams: { id: number, image: string }[]
}
export default function TeamCarousel({ teams }: TeamCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = teams.map((team) => (
    <Carousel.Slide key={team.id}>
      <Card {...team} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (

    <Carousel
      slideSize="25%"
      breakpoints={[{ maxWidth: 'lg', slideSize: '50%', slideGap: 2 }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 2 : 4}
      loop
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
    >
      {slides}
    </Carousel >
  );
}
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { createStyles, Paper, useMantineTheme } from "@mantine/core";
import { useRef } from "react";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundColor: "transparent",
  },
}));

interface CardProps {
  image: string;
}

function Card({ image }: CardProps) {
  const { classes } = useStyles();

  return (
    <Paper sx={{ backgroundImage: `url(${image})` }} className={classes.card} />
  );
}

export type TeamCarouselProps = {
  teams: { id: number; image: string }[];
};
export default function TeamCarousel({ teams }: TeamCarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = teams.map((team) => (
    <Carousel.Slide key={team.id}>
      <Card {...team} />
    </Carousel.Slide>
  ));
  const autoplay = useRef(Autoplay({ delay: 3500 }));
  return (
    <Carousel
      slideSize="25%"
      breakpoints={[{ slideSize: "25%" }]}
      height={200}
      slideGap="sm"
      align="start"
      slidesToScroll={mobile ? 3 : 3}
      loop
      dragFree
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
    >
      {slides}
    </Carousel>
  );
}

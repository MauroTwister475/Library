import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Card, CardBody, Image, Stack, Grid, GridItem } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";
import { contentCards } from "./Cards";
import ButtonLookMore from "../ButtonLookMore";

export default function Services() {
  const borderCard = `1px solid ${cor.gray_secondary}`;

  return (
    <Flex className="w-full py[6rem] px-[3.5rem] gap-20 py-20 bg-white justify-center flex-col items-center">
      <Box textAlign="center">
        <Heading lineHeight="8rem" className="text-[3rem] md:text-[4.5rem]" color={cor.title}>
          Nossos Serviços
        </Heading>
        <Text className="text-[1.8rem] md:text-[2.5rem]" color={cor.title}>
          Conheça os nossos serviços
        </Text>
      </Box>

      <Grid className="w-full grid gap-14 grid-cols-1 grid-rows-2 md:content-center md:grid-cols-2 md:gap-10 lg:grid-cols-3">
        {contentCards.map((card) => {
          return (
            <GridItem className="w-full flex justify-center" key={card.title}>
              <Card maxW="50rem" border={borderCard} borderRadius="1rem">
                <CardBody>
                  <Image
                    w="100%"
                    src={card.image.src}
                    alt={card.image.alt}
                    borderRadius="1rem 1rem 0 0"
                  />
                  <Stack className="text-justify py-[1.2rem] px-[1rem] md:px-[2rem] md:py-[2rem]">
                    <Heading className="text-[2rem] md:text-[2.5rem]">{card.title}</Heading>
                    <Text className="text-[1.3rem] md:text-[1.8rem]">{card.description}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </GridItem>
          );
        })}
      </Grid>
      <Box className="w-full px-[3.4rem] md:w-[80%]">
        <ButtonLookMore text="ver mais" />
      </Box>
    </Flex>
  );
}
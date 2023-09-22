import { Image, Flex, Box, Heading, Text } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";
import aboutIcon from "../../Images/icons/aboutUs3.svg";
import ButtonLookMore from "../ButtonLookMore";

const content = {
  image: {
    src: aboutIcon,
    alt: "About",
  },
  description: `
    A Buy Dr.Barros é especializada na 
    venda e entrega de livros, é o melhor
    que há no nosso mercado. Trazemos até sí o 
    mais rápido possível e em boas condições.
  `,
};

export default function AboutUs() {
  return (
    <Flex
      bgColor={cor.input}
      className="md:px-[8rem] py-[8rem] px-[4rem] w-full gap-[4.5rem] flex flex-col justify-center items-center"
    >
      <Box textAlign="center">
        <Heading lineHeight="8rem" className="text-[3rem] md:text-[4.5rem]" color={cor.title}>
          Sobre nós
        </Heading>
        <Text className="text-[1.6rem] md:text-[2.3rem] text-justify" color={cor.title}>
          {content.description}
        </Text>
      </Box>
      <Box w='100%'>
        <Image w='100%' src={content.image.src} alt={content.image.alt} />
      </Box>
      <Box className="w-full px-[3.4rem] md:w-[80%]">
        <ButtonLookMore text="ver mais" />
      </Box>
    </Flex>
  );
}

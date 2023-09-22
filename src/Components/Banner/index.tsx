import { Flex, Image, Stack, Text } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";
import fundo from "../../Images/global_images/fundoLibrary3.jpg";
import whatsAppIcon from "../../Images/icons/whatsapp.svg";
import EssencialButton from "./Button";

export default function Banner() {
  const backgroundBanner = `url(${fundo}) no-repeat center`;
  const borderButton = `2px solid ${cor.green_primary}`;

  return (
    <Flex
      w="100vw"
      h="60rem"
      flexDirection="column"
      gap="10rem"
      background={backgroundBanner}
      bgSize="cover"
    >
      <Stack className="text-center flex flex-col items-center mt-[16rem] gap-[4rem]">
        <Text fontSize="3.5rem" color={cor.white}>
          Encomende seu livro
        </Text>
        <Text fontSize="2rem" color={cor.white}>
          Aqui encontrará o seu livro
        </Text>
      </Stack>
      <Stack
        mt="2rem"
        direction="row"
        gap="1.5rem"
        align="center"
        justify="center"
      >
        <EssencialButton text="Contactar" bgColor={cor.green_primary}>
          <Image src={whatsAppIcon} alt="WhatsApp" />
        </EssencialButton>
        <EssencialButton
          text="Encomendar"
          border={borderButton}
          bgColor="transparent"
        />
      </Stack>
    </Flex>
  );
}

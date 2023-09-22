import { Box, Flex, Heading, UnorderedList } from "@chakra-ui/react";
import { Text, Button, Grid } from "@chakra-ui/react";
import { Phone } from "@phosphor-icons/react";
import { MailIcon } from "lucide-react";

import { colors as cor } from "../../styles/global";
import MenuLink from "../MenuLink";
import Form from "../Formulario";
import SectionFooter from "./SectionFooter";
import NewsLetter from "./NewsLetter";

const data = {
  description: "Talking about this topic I can saytha.".repeat(5),
  phoneNumber: "931190888",
  emailCompany: "SmadCode@gmail.com",
};

export default function Footer() {
  return (
    <Flex
      bgColor={cor.primary}
      padding="8rem 3.5rem 4.5rem 3.5rem"
      className="flex-col w-full justify-center items-center"
    >
      <Box textAlign="center">
        <Heading lineHeight="8rem" fontSize="3rem" color={cor.white}>
          Online Library
        </Heading>
      </Box>
      <Form />

      <Grid className="w-full lg:grid-cols-4 grid grid-cols-1 grid-rows-4 md:w-[80%]">
        <SectionFooter title="Online Library">
            <Text>{data.description}</Text>
        </SectionFooter>

        <SectionFooter title="Links do Menu">
          <UnorderedList
            listStyleType="none"
            className="flex items-center justify-center flex-col mt-4 gap-4"
          >
            <MenuLink />
          </UnorderedList>
        </SectionFooter>

        <SectionFooter title="Nossos contactos">
          <Button as='a' href="" 
            leftIcon={<Phone weight='bold' size={18}/>}
          >
            {data.phoneNumber}
          </Button>
          <Button as='a' href="" leftIcon={<MailIcon size={18}/>}
          >
            {data.emailCompany}
          </Button>
        </SectionFooter>
        <SectionFooter title="NewsLetter">
          <NewsLetter />
        </SectionFooter>
      </Grid>
    </Flex>
  );
}
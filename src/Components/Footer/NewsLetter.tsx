import { Flex, FormControl } from "@chakra-ui/react";
import { InputField } from "../Formulario/Input";
import { colors as cor } from "../../styles/global";
import ButtonSubmit from "../ButtonLookMore";
import SocialMedias from "./SocialMedias";

export default function NewsLetter() {
  return (
    <Flex w="100%" color={cor.gray_primary} className="justify-center">
      <FormControl className=" w-full flex flex-col gap-8">
        <InputField type="email" id="email" placeholder="Endereço de email" />
        <ButtonSubmit text="Subscrever" />
        <SocialMedias />
      </FormControl>
    </Flex>
  );
}
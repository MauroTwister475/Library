import { Flex, UnorderedList } from "@chakra-ui/react";
import { X } from "@phosphor-icons/react";
import MenuLink from "../MenuLink";
import { colors as cor } from "../../styles/global";

interface MenuDownProps {
  OnsetMenuHide: (type: boolean) => void;
}

export default function MenuDown({ OnsetMenuHide }: MenuDownProps) {

  return (
    <Flex
      bgColor={cor.primary}
      className="w-full h-full fixed z-10 flex items-center flex-col justify-start gap-[15rem]"
    >
      <Flex w='100%' padding='2.5rem' justify='end'>
        <X color={cor.white} weight="bold" size={28} onClick={() => OnsetMenuHide(false)}/>
      </Flex>
      <UnorderedList
        listStyleType='none'
        className="flex flex-col text-center gap-[6rem] md:gap-[12rem] md:text-[2rem] md:bold"
      >
        <MenuLink />
      </UnorderedList>
    </Flex>
  )
}
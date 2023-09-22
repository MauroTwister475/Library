import { Container, Flex, Link, Text } from "@chakra-ui/react";
import { AlignRight, LibraryIcon, Search } from "lucide-react";
import { colors as cor } from "../../styles/global";

interface HeaderContentProps {
  onActiveSearch: (active: boolean) => void;
  onSetMenuHide: (active: boolean) => void;
}

export function HeaderContent({ onSetMenuHide, onActiveSearch }: HeaderContentProps){
 
  return(
    <Container className="top-0 fixed"w="100vw" zIndex={1}>
    <Flex
      boxShadow='0 0 2rem'
      className="bg-white py-[1.4rem] px-[2rem] items-center justify-between md:py-[2rem] md:px-[4rem]"
    >
      <Link href='/'className="flex items-center">
        <LibraryIcon color={cor.black} size={30}/>
        <Text as='a' className="text-[1.8rem] md:text-[2.5rem]" color={cor.black}>
          Library
        </Text>
      </Link>
      <Flex className="flex items-center gap-[1.4rem]">
        <Search 
          color={cor.gray_secondary}   
          cursor='pointer' size={25} 
          onClick={() => onActiveSearch(true)}
        />
        <AlignRight color={cor.gray_secondary} size={25}
          onClick={() => onSetMenuHide(true)}
        />
      </Flex>
    </Flex>
  </Container>
  )
} 
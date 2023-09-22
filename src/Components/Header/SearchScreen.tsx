import { ChangeEvent, useState } from "react";
import { Container, Flex, Input, Stack, IconButton } from "@chakra-ui/react";
import { Search } from "lucide-react";
import { X, /*CircleNotch*/Spinner } from "@phosphor-icons/react";
import { colors as cor, componentProps as props } from "../../styles/global";

interface SearchScreenProps {
  onSearchActive: (active: boolean) => void;
}

export default function SearchScreen({ onSearchActive }: SearchScreenProps) {
  const [inputValue, setInputValue] = useState<string>("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  return (
    <Container h="100vh" className="w-full max-w-full fixed z-10 bg-white">
      <Stack direction="row" w="100%" padding="1.5rem">
        <Flex border={props.borderInput} w="100%" borderRadius={6} padding={2}>
          <IconButton
            w="5rem"
            cursor={ inputValue.length === 0 ? 'pointer':'none'}
            aria-label="search docs"
            bg={cor.input}
            icon={
              inputValue?.length === 0 ? (
                <Search color={cor.input_border} />
              ) : (
                <Spinner
                  color={cor.input_border}
                  size={25}
                  className="animate-spin"
                />
              )
            }
          />
          <Input
            type="text"
            id="search"
            bgColor={cor.input}
            color={cor.gray_primary}
            placeholder="Search docs"
            fontSize="1.8rem"
            onChange={handleInputChange}
            className="w-[90%] text-[1.8rem] py-[1.2rem] px-[1rem]"
          />
          <IconButton
            aria-label="close-search"
            bgColor={cor.input_border}
            className="w-[14%] md:w-[10%]"
            borderRadius={4}
            icon={<X size={22} weight="bold" color="white" />}
            onClick={() => onSearchActive(false)}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

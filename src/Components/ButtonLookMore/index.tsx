import { Button, Stack } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";

interface ButtonSendProps {
  text: string;
}

export default function ButtonLookMore({ text }: ButtonSendProps) {
  return (
    <Stack w='100%'align='center' >
      <Button
        fontSize='1.8rem'
        borderRadius={5}
        bgColor={cor.green_primary}
        color={cor.white}
        transition='background 0.4s ease'
       _hover={{
          // bgColor:{cor.green_secondary},
       }}
       className="w-full py-[0.8rem] px-[1rem] outline-none cursor-pointer"
      >
        {text}
      </Button>
    </Stack>
  );
}

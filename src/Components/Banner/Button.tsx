import { Button } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";

interface EssencialButtonProps {
  text: string,
  children?: any,
  border?: string,
  bgColor: any,
}

export default function EssencialButton({ bgColor, text, children, border }:EssencialButtonProps) {
  return (
    <Button
      border={border}
      bgColor={bgColor}
      color={cor.white}
      borderRadius={50}
      fontSize='1.5rem'
      transition='background 0.4s ease'
      _hover={{
        bgColor:`${ bgColor === cor.green_primary ? cor.green_secondary:cor.white }`,
        color: `${ bgColor === cor.green_primary ? cor.white:cor.black }`,
        border: `2px solid ${cor.white}`
      }}
      className="w-[16rem] h-[4.5rem] flex justify-center gap-[0.6rem] py-4 cursor-pointer"
    >
      {children}
      {text}
    </Button>
  );
}

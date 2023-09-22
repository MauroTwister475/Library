import { Stack, GridItem } from "@chakra-ui/react";
// import { colors as cor } from "../../styles/global";
import TitleSection from "./TitleSection";

interface SectionFooterProps {
  children: any,
  title: string,
}

export default function SectionFooter({ children, title }: SectionFooterProps) {
  return (
    <GridItem className="w-full bg={cor.primary}">
      <Stack 
        fontSize='1.6rem'
        className="h-full flex items-center justify-center flex-col text-justify text-white px-8"
      >
        <TitleSection title={title} />
        {children}
      </Stack>
    </GridItem>
  );
}
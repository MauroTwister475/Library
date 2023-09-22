import { Heading } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";

interface TitleSectioProps {
  title: string,
}

export default function TitleSection({ title }: TitleSectioProps) {
  return (
    <Heading className="text-[2.6rem] md:text-[3rem]" color={cor.white}>
      {title}
    </Heading>
  );
}

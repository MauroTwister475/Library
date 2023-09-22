import { ListItem, Link } from "@chakra-ui/react";
import { colors as cor } from "../../styles/global";

interface LinkProps {
  to: string,
}

export const HtmlLink:React.FC<LinkProps> = ({ to }) => {
  return (
    <Link 
      href="/" 
      color={cor.white}
      fontSize='2rem'
      transition='all 0.4s ease'
      _hover={{ opacity: '0.8'}}
    >
      {to}
    </Link>
  )
}

export default function MenuLink() {
  return (
    <>
      <ListItem>
        <HtmlLink to='Home' />
      </ListItem >
      <ListItem>
        <HtmlLink to='Services' />  
      </ListItem >
      <ListItem>
        <HtmlLink to='Contacts' />
      </ListItem >
      <ListItem>
        <HtmlLink to='About' />
      </ListItem >
    </>
  )
}
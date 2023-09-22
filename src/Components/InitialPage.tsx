import { Container, Flex } from "@chakra-ui/react";
import Header from "./Header";
import Banner from "./Banner";
import Services from "./Servicos";
import AboutUs from "./About";
import Footer from "./Footer";

export default function InitialPage() {
  return (
    <Container
      minH='100vh'
      display='flex'
      flexDirection='column'
      border='0px solid red'
    >
      <Flex w='100%' flexDirection='column'>
        <Header />
        <Banner /> 
        <Services />
        <AboutUs />
        <Footer />
      </Flex>
    </Container>
  )
}
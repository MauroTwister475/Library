import { ListItem, Link, UnorderedList, Image, Flex } from "@chakra-ui/react";
import facebookIcon from "../../images/icons/facebook.svg";
import twitterIcon from "../../images/icons/twitter.svg";
import linkedinIcon from "../../images/icons/linkedin.svg";
import youtubeIcon from "../../images/icons/youtube.svg";

const socialMediaData = [
  {
    image: {
      url: facebookIcon,
      alt: "Facebook",
    },
    url: "www.fcebook.com",
  },
  {
    image: {
      url: twitterIcon,
      alt: "twitter",
    },
    url: "www.twitter.com",
  },
  {
    image: {
      url: linkedinIcon,
      alt: "Linkedin",
    },
    url: "www.linkedin.com",
  },
  {
    image: {
      url: youtubeIcon,
      alt: "youtube",
    },
    url: "www.youtube.com",
  },
];

export default function SocialMedias() {
  return (
    <Flex justify='center'mt='1rem'>
      <UnorderedList className="w-full flex items-center justify-center ml-0 gap-6" >
        {socialMediaData.map((site) => {
          return (
            <ListItem key={site.url} className="list-none w-[3rem] h-[3rem]" >
              <Link href={site.url}>
                <Image src={site.image.url} alt={site.image.alt} />  
              </Link>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
}

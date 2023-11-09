import styles from '../styles/Footer.module.css';
import { useColorModeValue, Container, Image, Link, Wrap } from '@chakra-ui/react';
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  TumblrShareButton,
  TumblrIcon,
  TwitterShareButton,
  TwitterIcon,
  WeiboShareButton,
  WeiboIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon
} from 'next-share';

const text = {
  'website': 'https://www.probability-simulator.com/',
  'shareMsg': 'Use this tool to generate random numbers based on custom probabilities!',
  'shareTag': '#randomgenerator',
  'tumblrTags': ['probability simulator', 'random number generator', 'discrete probability', 'continuous probability'],
};

const Footer = () => {
  const bgColor = useColorModeValue('#fdfdf9', '#212838');
  return (
    <footer className={styles.footer} style={{ backgroundColor: bgColor }}>
      <Container
        maxW='var(--max-content-width)'
        display={{ base: 'block', lg: 'flex' }}
        justifyContent='space-between'
        alignItems='center'
        px={{ base: '2rem', lg: '1.6rem' }}
      >
        <Wrap justify='center' alignItems='center' pb='0.2rem' w='fit-content' mx={{ base: 'auto', lg: '0' }}>
          <FacebookShareButton
            url={text['website']}
            quote={text['shareMsg']}
            hashtag={text['shareTag']}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton
            url={text['website']}
            title={text['shareMsg']}
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <PinterestShareButton
            url={text['website']}
            media={text['shareMsg']}
          >
            <PinterestIcon size={32} round />
          </PinterestShareButton>
          <TumblrShareButton
            url={text['website']}
            tags={text['tumblrTags']}
            caption={text['shareMsg']}
          >
            <TumblrIcon size={32} round />
          </TumblrShareButton>
          <RedditShareButton
            url={text['website']}
            title={text['shareMsg']}
          >
            <RedditIcon size={32} round />
          </RedditShareButton>
          <LinkedinShareButton
            url={text['website']}
            summary={text['shareMsg']}
          >
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>
          <WhatsappShareButton
            url={text['website']}
            title={text['shareMsg']}
            separator=" - "
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
          <TelegramShareButton
            url={text['website']}
            title={text['shareMsg']}
          >
            <TelegramIcon size={32} round />
          </TelegramShareButton>
          <LineShareButton
            url={text['website']}
            title={text['shareMsg']}
          >
            <LineIcon size={32} round />
          </LineShareButton>
          <WeiboShareButton
            url={text['website']}
            title={text['shareMsg']}
          >
            <WeiboIcon size={32} round />
          </WeiboShareButton>
        </Wrap>
        <Container
          align='center'
          w='fit-content'
          display={'flex'}
          alignItems={'center'}
          px='0'
          mx={{ base: 'auto', lg: '0' }}
          mt={{ base: '1rem', lg: '0' }}
        >
          © 2022 Powered by
          <Image
            src="/aws.svg"
            alt="AWS Logo"
            borderRadius='full'
            w='3rem'
            h='fit-content'
            px='0.15rem'
            ml='0.5rem'
            mr='1.5rem'
            backgroundColor='#fdfdf9'
          />
          |
          <Link
            href='https://www.freeprivacypolicy.com/live/4213453c-fe11-4306-be9c-4c97dfcbb7a3'
            ml='1.5rem'
          >
            Privacy Policy
          </Link>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
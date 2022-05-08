import React from 'react'
import { animateScroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
		animateScroll.scrollToTop();
	}

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                About us
              </FooterLinkTitle>
              <FooterLink to='/signin'>
                How it works
              </FooterLink>
              <FooterLink to='/signin'>
                Testimonials
              </FooterLink>
              <FooterLink to='/signin'>
                Careers
              </FooterLink>
              <FooterLink to='/signin'>
                Investors
              </FooterLink>
              <FooterLink to='/signin'>
                Terms of Service
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Contact us
              </FooterLinkTitle>
              <FooterLink to='/signin'>
                Contact
              </FooterLink>
              <FooterLink to='/signin'>
                Support
              </FooterLink>
              <FooterLink to='/signin'>
                Address
              </FooterLink>
              <FooterLink to='/signin'>
                Sponsorships
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>
                Videos
              </FooterLinkTitle>
              <FooterLink to='/signin'>
                Submit Video
              </FooterLink>
              <FooterLink to='/signin'>
                Ambassadors
              </FooterLink>
              <FooterLink to='/signin'>
                Agency
              </FooterLink>
              <FooterLink to='/signin'>
                Influencer
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>
                Social Media
              </FooterLinkTitle>
              <FooterLink to='/signin'>
                Facebook
              </FooterLink>
              <FooterLink to='/signin'>
                Instagram
              </FooterLink>
              <FooterLink to='/signin'>
                Youtube
              </FooterLink>
              <FooterLink to='/signin'>
                Twitter
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              dolla
            </SocialLogo>
            <WebsiteRights>
              dolla © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.fb.com/" target="_blank" aria-label="Facebook">
                <FaFacebook/>
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/" target="_blank" aria-label="Instagram">
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href="//www.youtube.com/" target="_blank" aria-label="Youtube">
                <FaYoutube/>
              </SocialIconLink>
              <SocialIconLink href="//www.twitter.com/" target="_blank" aria-label="Twitter">
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href="//www.linkedin.com/" target="_blank" aria-label="Linkedin">
                <FaLinkedin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
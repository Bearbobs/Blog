import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import useSiteMetadata from '../hooks/use-site-config'
import {SOCIAL_LINKS} from './Social.js';

const SocialWrapper = styled.span`
> a {
  &:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const AccessibleText = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 1;
`;

const FooterWrapper = styled.footer`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      flex-direction: column;
      padding-right: 1em;
    }
  }

  & a {
    color: var(--color-white);
    font-weight: bold;

    &:hover {
      color: var(--color-grey200);
    }
  }

  .footer-col > p {
    margin: 0;
  }

  .footer-title {
    font-size: 0.83em;
    margin: 0 0 1rem;
  }

  .footer-item {
    color: var(--color-white);

    & a {
      padding: 0.25rem 0;
      display: block;
    }
  }

  .footer-heart {
    color: var(--color-red);
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: var(--color-white);
  }

  .footer-item-icon {
    padding: 0.6rem 0;
    color: var(--color-white);
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }

  .footer-column-items {
    grid-template-columns: 1fr;
    display: grid;
  }

  @media (max-width: 564px) {
    .footer-col:first-child {
      width: 100%;
    }
  }
`

const Footer = () => {
  const { authorName, websiteHost, footerLinks } = useSiteMetadata()

  return (
    <FooterWrapper>
      <nav>
        <div className="footer-col">
          <p className="footer-item-text">
            Ready to take the next step and work together?.
          </p>
          <p className="footer-item-text">
            {' '}
            <a
              className="footer-link"
              href="mailto:kapoor.anuj0@gmail.com"
            >
              Contact me : <b>kapoor.anuj0@gmail.com</b>
            </a>
            .
          </p>
          <p className="footer-item-icon">
            <SocialWrapper>
                {SOCIAL_LINKS.map(({ url, text, Icon }) => (
                  <a href={url} key={url}>
                    <Icon size={28} />
                    <AccessibleText>{text}</AccessibleText>
                  </a>
                ))}
            </SocialWrapper>
          </p>
          <p className="footer-item-text">
          ____________________________________________
          </p>
          <h3 className="footer-item-text">
            {authorName} © {new Date().getFullYear()}
          </h3>
        </div>
      </nav>
    </FooterWrapper>
  )
}

export default Footer
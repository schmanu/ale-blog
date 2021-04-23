import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import { colors } from '../styles/colors';
import { graphql } from 'gatsby';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }

  @media (prefers-color-scheme: dark) {
    .site-main {
      /* background: var(--darkmode); */
      background: ${colors.darkmode};
    }
  }
`;

interface AboutTemplateProps {
  data: {
    ale: {
      childImageSharp: {
        fixed: {
          src: string;
        }
      }
    },     
    paAle: {
      childImageSharp: {
        fixed: {
          src: string;
        }
      }
    };
  };
}

const About: React.FC<AboutTemplateProps> = (props) => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isHome={false} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">About Ale</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content">
              <div className="post-content">
              <img style={{float: "none"}} src={props.data.ale.childImageSharp.fixed.src} />
                <h5>
                ¡Hola!
                </h5>
                <p>
                I am Alejandra Santamaría, a Colombian journalist currently living in Berlin and studying the Digital Journalism Master’s at HMKW – University of Applied Sciences.                </p>
                <p>
                I am profoundly interested in investigative journalism, cultural and viral phenomena, creative writing and, content creation.</p>
                <p>
                My professional experience has been mainly in the field of cultural journalism, collaborating with media like El Espectador, one of Colombia’s oldest and most recognized newspapers, Cromos Magazine and Trampolín Magazine. I also have experience writing content for the press of movies and movie festivals, creating digital strategies to promote theatre spectacles, and as a community manager.                </p>  
                <p>
                <img style={{float: "none"}} src={props.data.paAle.childImageSharp.fixed.src} />
                 Here is a pic of me and my dad that defines me pretty well: always curious and always wondering.
                </p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export const pageQuery = graphql`
  query pageQuery {
    ale: file(relativePath: {eq: "img/ale.jpg"}) {
      childImageSharp {
        fixed(grayscale: true) {
          src
        }
      }
    }
    paAle: file(relativePath: {eq: "img/PaAle.png"}) {
      childImageSharp {
        fixed {
          src
        }
      }
    }
  }`

export default About;

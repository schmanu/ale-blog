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
                  Who am I?
                </h5>
                <p>
                  ¡Hola! I am Alejandra Santamaría, a Colombian journalist currently living in Berlin and studying the Convergent Journalism Master’s in HMKW – University of Applied Sciences. 
                </p>
                <p>
                  I am profoundly interested in cultural phenomena, particularly its intersection with social initiatives, and viral contents. My professional experience has been in the fields of cultural journalism and content and digital strategy creation, for movies and theater. 
                </p>
                <p>
                  I love everything cute, memes, cool t-shirts, dancing reggaeton, coffee, beer and laughing loudly. I am also a yoga and running enthusiast, and you can see me almost always writing
                </p>  
                <p>
                <img style={{float: "none"}} src={props.data.paAle.childImageSharp.fixed.src} />
                 Here is a pic of me and my dad that defines me pretty well: always curious, always wondering, always trying.
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

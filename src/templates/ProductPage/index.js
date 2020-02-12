import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Header from "~/components/header"
import Footer from "~/components/footer"
import {Container, Row, Col, Media, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption} from 'reactstrap';
import SEO from '~/components/seo'
import ProductForm from '~/components/ProductForm'
import {Img} from '~/utils/styles'
import {ProductDescription} from './styles'
import icon1 from "~/assets/img/ic1.png"
import icon2 from "~/assets/img/ic2.png"
import icon3 from "~/assets/img/ic3.png"
import icon4 from "~/assets/img/ic4.png"
import us from "~/assets/img/us.png"
import eco from "~/assets/img/eco.png"
import confidence from "~/assets/img/confidence.png"


const ProductPage = ({ data }) => {
  const product = data.shopifyProduct

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === product.images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? product.images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = product.images.map(image => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={product.images}
      >
        <Img
            fluid={image.localFile.childImageSharp.fluid}
            key={image.id}
            alt={product.title}
          />
      </CarouselItem>
    );
  });
  
  return (
    <>
      <SEO title={product.title} description={product.description} />
      <Header />
      
      <section className="mt-4 mb py-5" style={{backgroundColor:'#fff'}}>
      <Container>
        <Row className="no-gutters pb-2 pb-sm-5">
          <Col sm="6" className="single-product-img">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
          >
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
          {product.images.map(image => (
                <Img
                  fluid={image.localFile.childImageSharp.fluid}
                  key={image.id}
                  alt={product.title}

                  activeIndex={activeIndex} onClickHandler={goToIndex}
                />
              ))}
                  
          </Col>
          <Col sm="6" className="pl-lg-5 pl-0 pt-0 pt-sm-0 color-primary single-product-desc">  
             <h3 className="erbaum-bold pb-3 color-primary">{product.title}</h3>
              <ProductDescription className="filson-pro-reg space-1 mt-0"
                dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
              />
              <ProductForm product={product} />
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <div className="py-4 py-sm-5 feature bg-image">
        <div className="card-layer"></div>
        <Container>
          <Row className="pt-sm-5 pt-3">
            <div style={{width:'100%'}}>
              <h4 className="lead-text-font text-white erbaum-bold display-5 position-relative text-center pb-5 d-none">ONDIMENTUM QUISBIBENDUM SED</h4>
            </div>
            <Col sm="6">
              <Media className="px-sm-5 px-0 pb-3 pb-sm-5">
                  <Media left middle>
                    <img src={icon1} alt="icon1" width="85px"/>
                  </Media>
                  <Media body middle className="pl-3 text-white">
                    <h4 className="erbaum-bold" style={{fontSize:'18px'}}>BACKED BY SCIENCE</h4>
                    <p className="proxima-r space-1" style={{fontSize:'14px'}}>Created by experts after testing it with data by the Sleep To Live Institute whose research is based on profiling over 10m people. Recommended by Chiropractors based on key elements of conformity, support, alignment, pressure relief and comfort.</p>
                  </Media>
              </Media>
            </Col>
            <Col sm="6">
              <Media className="px-sm-5 px-0 pb-3 pb-sm-5">
                  <Media left middle>
                    <img src={icon2} alt="icon2" width="85px"/>
                  </Media>
                  <Media body middle className="pl-3 text-white">
                    <h4 className="erbaum-bold" style={{fontSize:'18px'}}>COMFORT GUARANTEED</h4>
                    <p className="proxima-r space-1" style={{fontSize:'14px'}}>Made with the highest quality materials and designed to help you get a better night’s sleep.  Our 97% customer satisfaction rate speaks for itself.</p>
                  </Media>
              </Media>
            </Col>
            <Col sm="6">
              <Media className="px-sm-5 px-0 pb-3 pb-sm-5">
                  <Media left middle>
                    <img src={icon4} alt="icon4" width="85px"/>
                  </Media>
                  <Media body middle className="pl-3 text-white">
                    <h4 className="erbaum-bold" style={{fontSize:'18px'}}>5 KEY FEATURES</h4>
                    <p className="proxima-r space-1" style={{fontSize:'14px'}}>Designed by mattress experts with 5 key features that consumers voted most important for a comfortable sleep experience.</p>
                  </Media>
              </Media>
            </Col>
            <Col sm="6">
              <Media className="px-sm-5 px-0 pb-3 pb-sm-5">
                  <Media left middle>
                    <img src={icon3} alt="icon3" width="85px"/>
                  </Media>
                  <Media body middle className="pl-3 text-white">
                    <h4 className="erbaum-bold" style={{fontSize:'18px'}}>FREE EXPRESS DELIVERY & EASY RETURNS </h4>
                    <p className="proxima-r space-1" style={{fontSize:'14px'}}>Delivered to your door free of charge, and you may return it within 100 nights if you are not 100% satisfied with full money back.</p>
                  </Media>
              </Media>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    <section>
      <Container>
        <Row className="py-5 my-sm-5 my-0">
          <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
              <Media left middle>
              <h4 className="lead-text-font color-primary erbaum-bold display-5 d-none">HEADING</h4>
              <p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>CertiPUR-US® approved foams are made without ozone depleters, made without PBDE flame retardants made without mercury, lead and other heavy metals, made without formaldehyde. </p> 
              </Media>
              <Media body middle className="pl-sm-4 pl-0 pb-3">
                <img src={us} alt="us" width="150px"/>
              </Media>
          </Media>
          <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
              <Media left middle>
              <p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>Eco institut tested for emission analysis in the test chamber according to ISO 16000. compound analyses for heavy metals. AOX/EOX, biocides, phthalates, flame retatdants etc... odour testing according to VDA, toxicological and ecological expertise.</p>  
              </Media>
              <Media body middle className="pl-sm-4 pl-0 pb-3">
                <img src={eco} alt="eco" width="150px"/>
              </Media>
          </Media>
          <Media className="px-3 px-sm-5 mb-1 d-block d-sm-flex">
              <Media left middle>
              <p className="color-primary proxima-r space-1" style={{paddingTop:'30px', lineHeight:'30px'}}>Confidence In Textile Oeko-Tex® standard 100 certified provide extensive testing on the fabrics to ensure that no substances are present that could be harmful to human. Oeko-Tex® standard 100 is an international certification that set limits for over 100 harmful chemicals, substances, and emissions in textiles.</p>  
              </Media>
              <Media body middle className="pl-sm-4 pl-0 pb-3">
                <img src={confidence} alt="confidence" width="150px"/>
              </Media>
          </Media>
        </Row>
      </Container>
    </section>
    <section className="mt-4 py-5 max-support bg-image">
      <Container>
        <Row className="">
          <Col sm="4">
            <h2 className="display-3 erbaum-bold text-white">MAX SUPPORT MAX RESULTS</h2>
            <p className="cta mt-0 mt-sm-3 pt-sm-4 pt-lg-4 pt-xl-4 mb-sm-2 pl-0">
              <a href="/faq/" className="btn-cta text-white erbaum-bold space-1">CALL TO ACTION</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <Footer />
    </>
  )
}


export const query = graphql`
  query($handle: String!) {
    shopifyProduct(handle: { eq: $handle }) {
      id
      title
      handle
      productType
      description
      descriptionHtml
      shopifyId
      options {
        id
        name
        values
      }
      variants {
        id
        title
        price
        availableForSale
        shopifyId
        selectedOptions {
          name
          value
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
      images {
        originalSrc
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default ProductPage

import { graphql } from "gatsby"
import React from "react"
import HeroExpert from "../components/sections/hero-expert"
import Reviews from "../components/sections/reviews"

export function Head({ data: { wpEkspert: { seo } } }) {

  const canonical = 'https://splatapozyczek.pl' + seo.canonical

  return <>
    <meta charSet="utf-8" />
    <meta name="robots" content="noindex" />
    <meta property="og:site_name" content={seo.opengraphSiteName} />
    <meta name="google-site-verification" content="M2kghTKPmXOB2ezGLw7ShbO3sdW6rMn_uhsSVbHCt7I" />

    <script type="application/ld+json">
      {JSON.stringify(
        { "@context": "https://schema.org", "@graph": [{ "@type": "Organization", "@id": "https://splatapozyczek.pl/#organization", "name": "Splatapozyczek.pl", "url": "https://splatapozyczek.pl/", "sameAs": ["https://www.facebook.com/splatapozyczek", "https://www.instagram.com/splatapozyczek.pl/", "https://www.youtube.com/channel/UCdpboPGWbJy_e8Je_Xw9i9Q"], "logo": { "@type": "ImageObject", "@id": "https://splatapozyczek.pl/#logo", "inLanguage": "pl-PL", "url": "https://splatapozyczek.pl/wp-content/uploads/2019/01/splatapozyczek-logo-x2.png", "width": 262, "height": 120, "caption": "Splatapozyczek.pl" }, "image": { "@id": "https://splatapozyczek.pl/#logo" } }, { "@type": "WebSite", "@id": "https://splatapozyczek.pl/#website", "url": "https://splatapozyczek.pl/", "name": "Splatapozyczek.pl", "description": "SplataPozyczek.pl \u2013 \u2705 kredyty got\u00f3wkowe, kredyt dla firm, po\u017cyczka konsolidacyjna, odd\u0142u\u017canie.", "publisher": { "@id": "https://splatapozyczek.pl/#organization" }, "potentialAction": [{ "@type": "SearchAction", "target": "https://splatapozyczek.pl/?s={search_term_string}", "query-input": "required name=search_term_string" }], "inLanguage": "pl-PL" }, { "@type": "WebPage", "@id": "https://splatapozyczek.pl/#webpage", "url": "https://splatapozyczek.pl/", "name": "Z nami uzyskasz nawet najtrudniejszy kredyt - Splatapozyczek.pl", "isPartOf": { "@id": "https://splatapozyczek.pl/#website" }, "about": { "@id": "https://splatapozyczek.pl/#organization" }, "datePublished": "2015-11-18T08:37:53+00:00", "dateModified": "2022-07-20T09:58:31+00:00", "description": "Niestandardowa umowa pracownicza? Brak zdolno\u015bci kredytowej? Inne zobowi\u0105zania? Mo\u017cemy uzyska\u0107 kredyt dla Ciebie nawet w 24 H.", "inLanguage": "pl-PL", "potentialAction": [{ "@type": "ReadAction", "target": ["https://splatapozyczek.pl/"] }] }] }
      )}
    </script>

    {canonical
      ? (
        <>
          <link rel="canonical" href={canonical} />
          <meta property="og:url" content={canonical} />
        </>
      )
      : null}

    {seo?.title
      ? (
        <>
          <title>{seo.title}</title>
          <meta property="twitter:title" content={seo.title} />
          <meta property="og:title" content={seo.title} />
        </>
      )
      : null}

    {seo?.metaDesc
      ? (
        <>
          <meta name="description" content={seo.metaDesc} />
          <meta property="twitter:description" content={seo.metaDesc} />
          <meta property="og:description" content={seo.metaDesc} />
        </>
      )
      : null}

    {seo.opengraphImage?.localFile?.publicURL
      ? (
        <>
          <meta property="og:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
          <meta property="twitter:image" content={'https://splatapozyczek.pl' + seo.opengraphImage.localFile.publicURL} />
        </>
      )
      : null}

  </>
}

export default function Expert({ data, pageContext }) {

  return (
    <main>
      <HeroExpert data={data} pageContext={pageContext} />
      {data.wpEkspert.comments.nodes.length > 0
        ? <Reviews expert={true} comments={data.wpEkspert.comments.nodes} data={{ title: 'Sprawdź opinię na temat <span style="color: #3b5ba9;">współpracy</span>.' }} />
        : null}
    </main>
  )
}

export const query = graphql`
    query expert($id: String!) {
        wpEkspert(id: {eq: $id}){
            id
            title
            seo {
              canonical
              metaDesc
              opengraphSiteName
              title
              opengraphImage {
                localFile {
                  publicURL
                }
              }
            }
            comments {
              nodes {
                id
                  author {
                    node {
                      name
                    }
                  }
                  content
              }
            }
            ekspert {
              facebook
              workWithProducts
              twitter
              pinterest
              role
              numerTelefonu
              emailAdres
              addInform {
                title
                text
                subTitle
                subText
              }
              image {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
              imageSmall {
                altText
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
        }
    }
`
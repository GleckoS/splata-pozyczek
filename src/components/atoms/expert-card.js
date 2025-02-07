import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import styled from "styled-components"
import { Button } from "./buttons"

export default function ExpertCard({ el }) {
    const phone = el.ekspert.numerTelefonu && el.ekspert.numerTelefonu.toString().replace(/^(.{3})(.{3})(.{3})(.*)$/, "$1 $2 $3");
    return (
        <Item >
            <Link aria-label={el.title} className="link" to={'/zespol/' + el.slug + '/'} />
            {el.ekspert.image
                ? <GatsbyImage className="image" image={el.ekspert.image.localFile.childImageSharp.gatsbyImageData} alt={el.ekspert.image.altText} />
                : null}
            <div className="text">
                <p className="body1">{el.title}</p>
                <p className="body3">
                    {el.ekspert.workWithProducts}
                </p>
                { el.ekspert.numerTelefonu && <Button url={'tel:' + el.ekspert.numerTelefonu} text={phone} className='phone' /> }
                <Button url={'mailto:' + el.ekspert.emailAdres} text={el.ekspert.emailAdres} className='mail' />
            </div>
        </Item>
    )
}

const Item = styled.div`
    border-radius: 4px;
    box-shadow: var(--shadow);
    max-width: 344px;
    width: 100%;
    position: relative;

    .link{
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 1;
    }
    
    a{
        text-decoration: none;
        position: relative;
        z-index: 1;
    }

    .text{
        padding: 12px;
    }

    .image{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        aspect-ratio: 1/1.2;
    }

    .body1{
        color: #050505;
    }

    .body3{
        margin-bottom: 16px;
        margin-top: 2px;
    }

    .phone{
        margin-bottom: 8px;
        color: #3B5BA9;
        text-decoration: none;
        font-size: 16px;
    }

    .mail{
        color: #6F6F71;
        text-decoration: none;
        font-size: 16px;
        svg{
            rect{
                fill: #6F6F71;
            }
        }
    }

    a{

    }
`
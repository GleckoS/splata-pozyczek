import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { Container } from "../atoms/container"
import { textParser } from './../../helpers/wysiwyg-modification'

export default function StepsToCredit({ data: { title, text, kroki } }) {
    return (
        <Wrapper>
            <Container>
                {text
                    ? (
                        <TopBox>
                            <BoxContent>
                                <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                                <p className="body1" dangerouslySetInnerHTML={{ __html: textParser(text) }} />
                            </BoxContent>
                        </TopBox>
                    ) : (
                        <Title>
                            <h2 className="h4 arsenal" dangerouslySetInnerHTML={{ __html: textParser(title) }} />
                        </Title>
                    )}
                <Grid>
                    {kroki.map((el, index) => (
                        <Item key={el.text} >
                            <span className="h4">{index + 1}</span>
                            <p>{el.text}</p>
                        </Item>
                    ))}
                </Grid>
            </Container>
        </Wrapper>
    )
}

export const query = graphql`
  fragment stepsToCredit on WpPage_PageBuilder_Sections_StepsToCredit {
    stepsToCredit {
      title
      text
      kroki {
        text
      }
    }
  }
`

const Title = styled.div`
    max-width: 600px;
    margin-bottom: clamp(16px, ${24 / 768 * 100}vw, 32px);
`

const Wrapper = styled.section`
    margin-top: var(--section-spacing);

    .body1{
        color: #6F6F71;

        strong{
            color: #050505;
        }
    }
`

const TopBox = styled.div`
    padding: 32px 0;
    border-radius: 4px;
    box-shadow: var(--shadow);
    margin-bottom: 32px;
    background-color: var(--color-light);

    @media (max-width: 640px) {
        padding: 24px 0;
        grid-template-columns: 1fr;
        width: calc(100% + 32px);
        transform: translateX(-16px);
    }
`

const BoxContent = styled.div`
    max-width: 940px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding: 0 24px;
    box-sizing: content-box;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-gap: 16px;
        padding: 0 16px;

        .h4{
            font-size: clamp(28px, 4.296875vw, 38px);
        }
    }
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: clamp(16px, ${24 / 768 * 100}vw, 32px);

    @media (max-width: 792px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`

const Item = styled.div`
    padding: 24px 10px;
    border-radius: 4px;
    box-shadow: var(--shadow);
    background-color: var(--color-light);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 480px){
        padding: 16px 10px;
    }

    span{
        width: clamp(56px, ${56 / 768 * 100}vw, 76px);
        height: clamp(56px, ${56 / 768 * 100}vw, 76px);
        border-radius: 50%;
        background-color: var(--color-light);
        color: var(--color-medium);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow);
        margin-bottom: 12px;
        
        font-family: 'Arsenal', sans-serif;
    }

    &:first-child{
        background-color: var(--color-medium);

        p{
            color: #FEF5F5;
        }

        span{
            background-color: var(--color-dark);
            color: #8AA9FC;
        }
    }
`
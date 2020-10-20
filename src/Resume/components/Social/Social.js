import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function Social(props) {
  const { social } = props
  return (
    <Container>
      <Subtitle title='Social' withoutBackground />
      <ContainerSocial>
        {social.map(so => {
          const { media, description, link, srcImg } = so
          return (
            <ItemContainer key={Math.random()}>
              <Link href={link}>
                <ImgMedia src={srcImg} alt={`${media} ${description}`} />
                <span>{description}</span>
              </Link>
            </ItemContainer>
          )
        })}
      </ContainerSocial>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const ImgMedia = styled.img`
  width: 2rem;
`

const ItemContainer = styled.div`
  margin: 0 1rem;
  display: inline-block;

  a {
    color: #333;
    text-decoration: none;
    display: flex;
  }
`

const ContainerSocial = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: column wrap;
`

const Link = styled.a`
  display: flex;
  margin-bottom: 20px;
  /* flex-direction: column;
  flex-flow: column wrap; */
  /* align-items: center; */
  span {
    margin-left: 15px;
  }
`

export default Social

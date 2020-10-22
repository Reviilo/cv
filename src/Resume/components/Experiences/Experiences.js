import React from 'react'
import styled from 'styled-components'
import { Subtitle } from '../common'

function Experiences(props) {
  const { title, items } = props.experiences

  return (
    <Container>
      <Subtitle title={title} withoutBackground />
      <>
        {items.map(experience => {
          const { title, date, company, description } = experience

          const descrip = description.split(/\r\n|\r|\n/) || []

          return (
            <ExperienceContainer key={Math.random()}>
              <SpanStyled>{company}</SpanStyled>
              <ContainerTitleDescription>
                <span>{title}</span>
                <span>{date}</span>
              </ContainerTitleDescription>
              {descrip.map(text => (
                <p>{text}</p>
              ))}
            </ExperienceContainer>
          )
        })}
      </>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

const ExperienceContainer = styled.div`
  margin: 10px 10px 20px;
  padding-top: 10px;
  border-bottom: 1px solid #6bdfdc;

  &:last-child {
    border-bottom: none;
  }

  span {
    margin-right: 20px;
  }
`

const SpanStyled = styled.span`
  text-transform: uppercase;
  /* font-style: italic; */
  font-weight: 600;
`

const ContainerTitleDescription = styled.div`
  margin: 0.5rem 0 2rem;
  display: flex;
`

export default Experiences

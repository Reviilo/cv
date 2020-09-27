import React from 'react'
import styled from 'styled-components'
import { default as data } from '../data/resume.json'
import Loader from '../components/Loader'

const Head = React.lazy(() => import('../components/Head'))
const HowIAm = React.lazy(() => import('../components/HowIAm'))
const Skills = React.lazy(() => import('../components/Skills'))
const Experiences = React.lazy(() => import('../components/Experiences'))
const Educations = React.lazy(() => import('../components/Educations'))
const Social = React.lazy(() => import('../components/Social'))
const Projects = React.lazy(() => import('../components/Projects'))
const Footer = React.lazy(() => import('../components/Footer'))

function Resume() {
  const { head, card, howIAm, skills, experiences, educations, projects, social } = data

  return (
    <React.Suspense fallback={<Loader />}>
      <BackgroundContainer>
        <Container>
          <Head head={head} card={card} />
          <Separator>
            <div>
              <HowIAm howIAm={howIAm} />
              <Experiences experiences={experiences} />
              <Educations educations={educations} />
            </div>
            <div>
              <Projects projects={projects} />
            </div>
            <ContainerSectionTwo>
              <Skills skills={skills} />
              <Social social={social} />
            </ContainerSectionTwo>
          </Separator>
          <Footer />
        </Container>
      </BackgroundContainer>
    </React.Suspense>
  )
}

const BackgroundContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
`

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  box-shadow: 0 1px 2px rgba(107, 223, 220, 0.07), 0 2px 4px rgba(107, 223, 220, 0.07),
    0 4px 8px rgba(107, 223, 220, 0.07), 0 8px 16px rgba(107, 223, 220, 0.07),
    0 16px 32px rgba(107, 223, 220, 0.07), 0 32px 64px rgba(107, 223, 220, 0.07);

  padding-bottom: 4rem;

  @media (max-width: 800px) {
    width: 100%;
  }
`

const Separator = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const ContainerSectionTwo = styled.div`
  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'a0 c0' 'b0';

    > div::first-child {
      grid-area: a0 / a0 / a0 / a0;
    }

    > div::nth-child(1) {
      grid-area: b0 / b0 / b0 / b0;
    }

    > div::last-child {
      grid-area: c0 / c0 / c0 / c0;
    }
  }
`

export default Resume

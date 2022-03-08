import { BodyText, PageSubtitle, PageTitle } from './styling/TextStyles'

export const HomePage = ({ sanity_text }) => {
  return <>
    <PageTitle>{sanity_text.title}</PageTitle>
    <PageSubtitle>{sanity_text.subtitle}</PageSubtitle>
    <BodyText>
      {sanity_text.about_me}
    </BodyText>
    <div>
      {/* What I'm good at section */}
    </div>

    <div>
      {/* What I'm excited about */}
    </div>

    <div>
      {/* Interested in my CV */}
    </div>
  </>
}
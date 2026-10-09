import { typography } from '../styles/token'
import { LogosAndIntroExample, LogosAndIntroFrame } from '../pages/design-system/LogosAndIntroExamples'
import { HeadlineSectionsExample, HeadlineSectionsFrame } from '../pages/design-system/HeadlineSectionsExamples'
import { DesignSystemPage } from '../pages/design-system/DesignSystemPage'
import { ImageParallaxComparison } from '../pages/design-system/ImageParallaxExamples'
import { GrainHeroExample } from '../pages/design-system/GrainExamples'
import { TextUtilityComparison } from '../pages/design-system/TextUtilityExamples'
import { ProjectCardComparison } from '../pages/design-system/ProjectCardExamples'
import { ServiceCardComparison } from '../pages/design-system/ServiceCardExamples'
import { ServicesDesktopTrackControls, ServicesDesktopTrackFrame } from '../pages/design-system/ServicesDesktopTrackExamples'
import { StatsComparison, StatsFrame } from '../pages/design-system/StatsExamples'
import { TheStoryTrackControls, TheStoryTrackFrame } from '../pages/design-system/TheStoryTrackExamples'
import { FAQSectionControlsExample, FAQSectionFrameComparison } from '../pages/design-system/FAQSectionExamples'
import { EventTestimonialExample, CmsCollectionsExample } from '../pages/design-system/SessionFinalExamples'
import './App.css'
import { TestimonialsControlsExample, TestimonialsFrameComparison } from '../pages/design-system/TestimonialsSectionExamples'

export function App() {
  const fixture = new URLSearchParams(window.location.search).get('fixture')
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'logos-and-intro') return <LogosAndIntroExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'logos-and-intro-frame') return <LogosAndIntroFrame />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'headline-sections') return <HeadlineSectionsExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'headline-sections-frame') return <HeadlineSectionsFrame />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'event-testimonial') return <EventTestimonialExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && fixture === 'cms-collections') return <CmsCollectionsExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'stats-frame') return <StatsFrame />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'stats') return <StatsComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'the-story-track-frame') return <TheStoryTrackFrame />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'the-story-track') return <TheStoryTrackControls comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'services-track-frame') return <ServicesDesktopTrackFrame />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'services-track') return <ServicesDesktopTrackControls comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'testimonials-frame') return <TestimonialsFrameComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'testimonials') return <TestimonialsControlsExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'faq-section-frame') return <FAQSectionFrameComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'faq-section') return <FAQSectionControlsExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'service-card') return <ServiceCardComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'project-card') return <ProjectCardComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'text-utilities') return <TextUtilityComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'grain') return <GrainHeroExample comparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system' && new URLSearchParams(window.location.search).get('fixture') === 'image-parallax') return <ImageParallaxComparison />
  if (window.location.pathname.replace(/\/$/, '') === '/design-system') return <DesignSystemPage />
  return (
    <main className="development-status">
      <h1 className={typography.headline32.className}>Loruni</h1>
      <p className={typography.text20.className}>Token e stili di base Framer importati.</p>
      <p className={typography.text20.className}>La conversione delle pagine non è ancora iniziata.</p>
      <a className="development-catalog-link" href="/design-system">Apri il design system</a>
    </main>
  )
}

import { useContext, useRef } from 'react'
import { ScrollContext } from '../ScrollObserver'

function opacityForBlock(sectionProgress: number, blockNumber: number) {
  const progress = sectionProgress - blockNumber

  if (progress >= 0 && progress < 1) {
    return 1
  }

  return 0.2
}

export default function Intro() {
  const { scrollY } = useContext(ScrollContext)
  const refContainer = useRef<HTMLDivElement>(null)

  const numOfPages = 3
  let progress = 0
  const { current: elContainer } = refContainer

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer
    const screenH = window.innerHeight
    const halfH = screenH / 2

    const percentY =
      Math.min(clientHeight + halfH, Math.max(-screenH, scrollY - offsetTop) + halfH) / clientHeight

    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages))
  }

  return (
    <div
      ref={refContainer}
      className="relative z-10 bg-black dark:bg-white text-white  dark:text-black"
      id="intro"
    >
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-24 md:py-28 lg:py-3 flex flex-col justify-center items-center text-4xl md:text-6xl lg:text-7xl tracking-tight font-semibold">
        <div className="leading-[1.15]">
          <div className="introText" style={{ opacity: opacityForBlock(progress, 0) }}>
            French Is A Dead Language
          </div>
          <span
            className="introText inline-block after:content-['_']"
            style={{ opacity: opacityForBlock(progress, 1) }}
          >
            Moroccans Are Forced To Use French As The Main Business, Administrative And Academic Language
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 2) }}
          >
            We Are Freedom Fighters, Our Ancestors Faught The French Who Enslaved, Killed, Prisoned, Raped, Stole, Exploited And Destroyed Our Country, It's Our Duty To Finish The Job By CLeaning Our COuntry From The Artifacts Of Imperialism
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
            We DEMAND Our Rightful Independence From The Cultural French Shackles, For Us And Future Generations To Truly Be Able To Be One With The World, And Not Be Forced To Have France As A proxy For Our International Relations And Opportunities
          </span>
          <span
            className="introText inline-block"
            style={{ opacity: opacityForBlock(progress, 3) }}
          >
The Optimal Solution Is To Put English As The First Foreign Language And Teach It In The Elementary School Instead Of The Rotten Corps Of The Dead Language; French          </span>
        </div>
      </div>
    </div>
  )
}

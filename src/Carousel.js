import React, { useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import './Styles/carousel.css'

// export const CarouselItem = ({ children, width }) => {
//   return (
//     <div className='carousl-item' style={{ width: width }}>
//       {children}
//     </div>
//   )
// }

const Carousel = ({ children,no }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const nom = React.Children.count(children)/no;

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = nom - 1
    } else if (newIndex >= nom) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1)
      }
    }, 3000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  })

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div
      {...handlers}
      className='carousel'
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      
      <div
        className='inner'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
       
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: '100%' })
          })}
        
      </div>
      <div className='indicators'>
        <button
          onClick={() => {
            updateIndex(activeIndex - 1)
          }}
        >
          Prev
        </button>
        {/* {React.Children.map(children, (child, index) => {
          return (
            <button
              className={`${index === activeIndex ? 'active' : ''}`}
              onClick={() => {
                updateIndex(index)
              }}
            >
              {index + 1}
            </button>
          )
        })} */}
        <button
          onClick={() => {
            updateIndex(activeIndex + 1)
          }}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Carousel

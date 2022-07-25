import React, { useEffect, useState } from 'react'
import './index.css'

export function Carousel() {

  const [currentItem, setCurrentItem] = useState(0)

  function clickArrowLeft() {
    const items = document.querySelectorAll('.items')
    const maxItems = items.length

    if(currentItem == 0) {
      setCurrentItem(maxItems - 1)
    }else {
    setCurrentItem(currentItem - 1)
  }
  console.log(currentItem)
}
function clickArrowRight() {
  const items = document.querySelectorAll('.items')
  const maxItems = items.length
  
  if(currentItem == maxItems - 1) {
    setCurrentItem(0)
  }else{
    setCurrentItem(currentItem + 1)
    }
    console.log(currentItem)
  }

  useEffect(()=>{
    function updateCurrentItem () {
      const items = document.querySelectorAll('.items')
      items.forEach(item => {
        item.classList.remove('current-item')
      })
      items[currentItem].scrollIntoView({
        inline: 'center',
        behavior: 'smooth'
      })
      items[currentItem].classList.add('current-item')
    }
    updateCurrentItem()

  }, [currentItem])
  
  return (
    <div className='Carousel-container'>
      <button onClick={clickArrowLeft} className='control arrow-left'>{'<'}</button>
        <div className='wrapper'>
            <ul>
                <img className='items current-item' src='https://picsum.photos/seed/1/200' />
                <img className='items' src='https://picsum.photos/seed/2/400/200' />
                <img className='items' src='https://picsum.photos/seed/3/400/200' />
                <img className='items' src='https://picsum.photos/seed/4/400/200' />
                <img className='items' src='https://picsum.photos/seed/5/400/200' />
                <img className='items' src='https://picsum.photos/seed/6/400/200' />
                <img className='items' src='https://picsum.photos/seed/7/400/200' />
                <img className='items' src='https://picsum.photos/seed/8/400/200' />
                <img className='items' src='https://picsum.photos/seed/9/400/200' />
                <img className='items' src='https://picsum.photos/seed/10/400/200' />
            </ul>
        </div>
      <button onClick={clickArrowRight} className='control'>{'>'}</button>
    </div>
  )
}

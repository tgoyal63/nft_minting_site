import React from 'react'

import about1 from '../../image/about1.png'
import about2 from '../../image/about2.png'
import about4 from '../../image/about4.png'

import { ReactComponent as About3 } from '../../icons/About3.svg'

import './about.css'

const About = () => {
  return (
    <div className='componentFirst aboutBC'>
      <div className='componentSecond'>
        <div className='about'>
          <div className='aboutLeft'>
            <div className='aboutBox'>
              <img src={about1} alt='' className='aboutBoxIMG' />
            </div>
          </div>
          <div className='aboutRight'>
            <div className='aboutRightTop'>
              <div className='aboutBox'>
                {/* <img src={about2} alt='' className='aboutBoxIMG' /> */}
              </div>
            </div>
            <div className='aboutRightBottom'>
              <div className='aboutRightBottomLeft'>
                <div className='aboutBox'>
                  <About3 style={{ width: '100%', height: 'auto' }} />
                </div>
              </div>
              <div className='aboutRightBottomRight'>
                <div className='aboutBox aboutBoxLast'>
                  <img src={about4} alt='' className='aboutBoxIMG' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='aboutTextContainer'>
          <div className='aboutText'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

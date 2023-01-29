import React from 'react'

import { ReactComponent as Roadmap1SVG } from '../../icons/Roadmap1.svg'
import { ReactComponent as Roadmap2SVG } from '../../icons/Roadmap2.svg'
import { ReactComponent as Roadmap3SVG } from '../../icons/Roadmap3.svg'
import { ReactComponent as Roadmap4SVG } from '../../icons/Roadmap4.svg'

import './roadmap.css'

const Roadmap = () => {
  return (
    <div className='componentFirst roadmapBC'>
      <div className='componentSecond'>
        <div className='roadmap'>
          <div className='roadmapTitle textHighlight'>Steps to Mint</div>
          <div className='roadmapSubTitle'>Our NFT's are free for everyone to collect !</div>

          <div className='roadmapList'>
            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap1SVG />
              </div>
              <div className='roadmapText'>Click on 'Connect' to connect your wallet.</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>Make sure to choose your correct account!</div>
              <div className='roadmapIcon'>
                <Roadmap2SVG />
              </div>
            </div>

            <div className='roadmapItemLeft'>
              <div className='roadmapIcon'>
                <Roadmap3SVG />
              </div>
              <div className='roadmapText'>After you connect your wallet, click on "Mint".</div>
            </div>

            <div className='roadmapItemRight'>
              <div className='roadmapText'>Confirm your transaction and there.. you have your NFT !</div>
              <div className='roadmapIcon'>
                <Roadmap4SVG />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Roadmap

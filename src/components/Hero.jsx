import React from 'react'
import { GITHUB_REPO_URL } from '../lib/constants'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
        <nav className='flex justify-between py-3 items-center w-full mb-6'>
            <img src="/assets/logo.svg" alt='Resumimelo AI' className='w-28 object-contain' />

            <button 
                type='button' 
                className='black_btn'
                onClick={() => window.open(GITHUB_REPO_URL, '_blank')}>Github
            </button>
        </nav>

        <h1 className='head_text'>Resume cualquier artículo con <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span></h1>

        <h2 className='desc'>Simplifique su lectura con Resumimelo AI, un resumidor de artículos de código abierto que transforma artículos extensos en resúmenes claros y concisos.</h2>
    </header>
  )
}

export default Hero
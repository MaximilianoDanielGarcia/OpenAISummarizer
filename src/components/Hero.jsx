import React from 'react'

const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
        <nav className='flex justify-between py-3 items-center w-full'>
            <img src="/assets/logo.svg" alt='sumz-logo' className='w-28 object-contain' />

            <button 
                type='button' 
                className='black_btn'
                onClick={() => window.open(GITHUB_REPO_URL, '_blank')}>Github
            </button>
        </nav>

        <h1 className='head_text'>Summarize Articles with <br className='max-md:hidden'/>
        <span className='orange_gradient'>OpenAI GPT-4</span></h1>

        <h2 className='desc'>Simplify your reading with Summarize, an open-source article summarizer that transforms lengthy articles into clear an concise summaries</h2>
    </header>
  )
}

export default Hero
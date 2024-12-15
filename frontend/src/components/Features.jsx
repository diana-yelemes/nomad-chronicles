import React from 'react'
import ai from '../assets/features/ai.png'
import filter from '../assets/features/filter.png'
import history from '../assets/features/history.png'
import quiz from '../assets/features/quiz.png'

const Features = () => {
  return (
    <section className='max-padd-container py-16'>
        <div className='max-padd-container grid grid-cols-2 md:grid-cols-2
        lg:grid-cols-4 gap-5 gap-y-12'>
            <div className='flexCenter flex-col gap-3'>
                <img src={ai} alt='aiIcon' height={44} width={44} />
                <div className='flexCenter flex-col gap-3'>
                    <h5 className='h5'>AI-chatbot implementation</h5>
                    <hr className='w-8 bg-secondary h-1 rounded-full
                    border-none'/>
                </div>
                <p className='text-center'>Use AI chatbots that mimic
                    a historical figure's knowledge base to learn interactively!
                </p>
            </div>
            <div className='flexCenter flex-col gap-3'>
                <img src={filter} alt='aiIcon' height={44} width={44} />
                <div className='flexCenter flex-col gap-3'>
                    <h5 className='h5'>Search filters</h5>
                    <hr className='w-8 bg-secondary h-1 rounded-full
                    border-none'/>
                </div>
                <p className='text-center'>Effortlessly search for a particular
                    figure from our database by occupation.
                </p>
            </div>
            <div className='flexCenter flex-col gap-3'>
                <img src={history} alt='aiIcon' height={44} width={44} />
                <div className='flexCenter flex-col gap-3'>
                    <h5 className='h5'>History learning</h5>
                    <hr className='w-8 bg-secondary h-1 rounded-full
                    border-none'/>
                </div>
                <p className='text-center'>History made interesting with interaction.
                </p>
            </div>
                        <div className='flexCenter flex-col gap-3'>
                <img src={quiz} alt='aiIcon' height={44} width={44} />
                <div className='flexCenter flex-col gap-3'>
                    <h5 className='h5'>Quizzes</h5>
                    <hr className='w-8 bg-secondary h-1 rounded-full
                    border-none'/>
                </div>
                <p className='text-center'>Check your knowledge by taking quizzes.
                </p>
            </div> 
        </div>
    </section>
  )
}

export default Features
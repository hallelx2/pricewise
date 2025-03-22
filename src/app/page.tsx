import  ProductCarousel  from '@/components/product-carousel'
import SearchBar from '@/components/search-bar'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <>
        <section className='px-6 md:px-20 py-24'>
            <div className='flex max-xl:flex-col gap-16'>
                <div className='flex flex-col justify-center'>
                    <p className='small-text'>
                        Smart Shopping Starts Here:
                        <ArrowRightIcon size={24} className='text-red-700' />
                    </p>

                    <h1 className='head-text'>
                        Find the best deals on the products you love with
                        <br />
                        <span className='text-primary'>Marketeer</span>
                     </h1>

                     <p className='mt-6'>
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain
                     </p>
                     <SearchBar />
                </div>
                <ProductCarousel />
            </div>
        </section>
        <section className='trending-section'>
            <h1 className='section-text'>Trending</h1>
            <div className='flex flex-wrap gap-x-8 gap-y-16'>
                {["Apple Iphone", "Book", "Sneakers"].map((product) => (<div>{product}</div>))}
            </div>
        </section>
    </>
  )
}

export default Home

'use client'
import React, { useState, useEffect } from 'react'
import {
  useProviders,
  signIn,
  signOut,
  useSession,
  getProviders,
} from 'next-auth/react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  const [providers, setProviders] = useState(null)
  const isUserLoggedIn = true

  useEffect(() => {
    const setProviders = async () => {
      const response = getProviders()

      setProviders(response)
    }
    setProviders()
  }, [])
  return (
    <nav className=' flex flex-between w-full mb-16 pt-3'>
      <Link className='flex gap-2 flex-center' href='/'>
        <Image
          height={30}
          width={30}
          alt='Promptopia logo'
          className='object-contain'
          src='/assets/images/logo.svg'
        />
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* desktop navigation */}
      <div className='sm:flex hidden'>
        {isUserLoggedIn ? (
          <div className='flex gap-3 md:gap-5'>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>
            <button className='outline_btn' type='button' onClick={signOut}>
              Sign out
            </button>
            <Link href='/profile'>
              <Image
                className='rounded-full'
                alt='profile'
                width={37}
                height={37}
                src='/assets/images/logo.svg'
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type='button'
                  className='black_btn'
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
      {/* mobile navigation */}
      <div className='sm:hidden flex-relative'>
        {isUserLoggedIn ? (
          <div className='flex'>
            <Image
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              src='/assets/images/logo.svg'
              onClick={() => {}}
            />
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  type='button'
                  className='black_btn'
                  onClick={() => signIn(provider.id)}
                >
                  Sign In
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  )
}

export default Nav

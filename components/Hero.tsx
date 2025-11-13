"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroHeader(props: { avatarUrl: string; displayName: string }) {
  const { avatarUrl, displayName } = props
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
      >
        {displayName}
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-purple-300 to-indigo-300">Engineer ? Builder ? Open Source</span>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="relative w-40 h-40 md:w-52 md:h-52 rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04]"
      >
        <Image
          src={avatarUrl}
          alt={displayName}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 10rem, 13rem"
          priority
        />
        <div className="absolute inset-0 bg-glow opacity-20 mix-blend-overlay" />
      </motion.div>
    </>
  )
}

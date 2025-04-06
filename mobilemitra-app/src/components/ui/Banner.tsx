'use client';

import Link from 'next/link';
import Image from 'next/image';

interface BannerProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  backgroundColor?: string;
  textColor?: string;
  position?: 'left' | 'right' | 'center';
}

export default function Banner({
  title,
  description,
  buttonText,
  buttonLink = '/products',
  imageSrc,
  backgroundColor = 'bg-teal-600',
  textColor = 'text-white',
  position = 'left',
}: BannerProps) {
  return (
    <div className={`${backgroundColor || 'bg-[#a83250]'} rounded-lg overflow-hidden shadow-md relative`}>
      <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
      <div className="relative p-6 md:p-8 flex flex-col md:flex-row items-center">
        <div className={`${position === 'right' ? 'md:order-2 md:text-right' : ''} flex-1 mb-6 md:mb-0`}>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 animate-glow">{title}</h3>
          <p className="text-white text-opacity-90 mb-4">{description}</p>
          {buttonText && buttonLink && (
            <Link 
              href={buttonLink} 
              className="inline-block bg-white text-[#a83250] dark:bg-gray-100 px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              {buttonText}
            </Link>
          )}
        </div>
          
          {/* Image - only show if imageSrc is provided and position is not center */}
          {imageSrc && position !== 'center' && (
            <div className={`md:w-1/2 mt-6 md:mt-0 ${position === 'right' ? 'md:order-1' : ''}`}>
              <div className="relative h-48 md:h-64">
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>
          )}
        </div>
      </div>
  );
}
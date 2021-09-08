import Image from "next/image";
import { useState } from "react"

export default function ImageWrapper({ priority, layout, src, alt, className, width, height }) {
  const [imageIsLoaded, setImageIsLoaded] = useState(false)

  
  return (
    <Image
      priority={priority}
      layout={layout}
      src={src}
      { ...( width && { width: width } ) }
      { ...( height && { height: height } ) }
      alt={alt}
      quality={90}
      className={`${className} ${imageIsLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 ease-in-out`}
      onLoad={event => {
        const target = event.target;
        if (target.src.indexOf('data:image/gif;base64') < 0) {
          setImageIsLoaded(true)
        }
      }}
    />
  )
}
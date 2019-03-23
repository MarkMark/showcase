import React from 'react'

export default function Img({
  src,
  fallback,
  classes,
  alt = 'mshowcase image'
}) {
  let _img = null
  let i = 0

  return (
    <img
      src={src}
      className={classes}
      ref={img => (_img = img)}
      onError={() => !i && !!fallback && (_img.src = fallback) + i++}
      alt={alt}
    />
  )
}

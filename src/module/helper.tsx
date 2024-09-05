export const getWindowDimensions = (): { width: number; height: number } => {
  if (typeof window == 'undefined') return { width: 0, height: 0 }

  const { innerWidth: width, innerHeight: height } = window

  return {
    width,
    height,
  }
}

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

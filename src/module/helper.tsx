import { customConfig } from '../../config'

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

export const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement('div')
  wrapperElement.setAttribute('id', wrapperId)
  document.body.appendChild(wrapperElement)

  return wrapperElement
}

export const imagePath = (id: string, name: string, collectionName: string) => {
  if (name == '') return null

  return `${customConfig.POCKETBASE_FILE_URL}/${collectionName}/${id}/${name}`
}

export const getRandomElement = (array: any) => {
  if (Array.isArray(array) && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
  }
  return null
}

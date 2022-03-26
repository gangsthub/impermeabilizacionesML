import glob from 'glob-all'
import { slugify } from './slugify'

const cleanSlug = (string) => string.replace(/(^\.\/|\.json$)/gi, '')

// Webpack way: used in Vue pages
// ****************************************************************************************
export const getServices = () => {
  const context = require.context(`~/content/static/services`, false, /\.json$/)
  const services = getServicesFromContext(context)
  return services
}

const getServicesFromContext = (context) => {
  return context
    .keys()
    .filter((t) => t !== './page_texts.json') // filter page texts out
    .reduce((acc, curr) => {
      const slug = cleanSlug(curr)
      const obj = context(curr)
      return [
        ...acc,
        {
          ...obj,
          slug,
        },
      ]
    }, [])
}

export const getMoreServices = () => {
  const context = require.context(
    `~/content/static/more_services`,
    false,
    /\.json$/
  )
  const services = getServicesFromContext(context)
  return services
}

export const getWorks = () => {
  const context = require.context('~/content/blog/posts', false, /\.json$/)
  const works = context.keys().map(context)
  return works
}

const mapFilePathToRoute = (string, path, route) => {
  return (
    String(string)
      // .replace('./content/static/services', 'servicios')
      .replace(path, route)
      .replace(/\.json$/, '')
  )
}

// FS way: used only in the Nuxt config
// ****************************************************************************************
export const getServicesStatic = () =>
  glob
    .sync(['./content/static/services/**'])
    .filter(
      (f) =>
        String(f).includes('.json') && !String(f).includes('page_texts.json')
    )
    .map((f) => mapFilePathToRoute(f, './content/static/services', 'servicios'))

const getPlaces = () => {
  const files = glob
    .sync(['./content/blog/posts/**'])
    .filter((f) => String(f).endsWith('.json'))

  const places = new Set()

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const data = require('.' + file)
    const place = data.place
    places.add(place)
  }
  return Array.from(places)
}

export const getPlacesStatic = () => {
  return getPlaces().map((p) => `/impermeabilizaciones/${slugify(p)}`)
}

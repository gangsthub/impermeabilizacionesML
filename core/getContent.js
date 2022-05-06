import glob from 'glob-all'
import { slugify } from './slugify'

const cleanSlug = (string) => string.replace(/(^\.\/|\.json$)/gi, '')

// Webpack way: used in Vue pages, to fetch the content
// and pass it to the list and detail components
// ****************************************************************************************

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

export const getServices = () => {
  const context = require.context(`~/content/static/services`, false, /\.json$/)
  const services = getServicesFromContext(context)
  return services
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

export const getEcoServices = () => {
  const context = require.context(
    `~/content/static/ecoServices`,
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

// FS way: used only in the Nuxt config, to generate pages
// ****************************************************************************************
export const getServicesStatic = () =>
  glob
    .sync(['./content/static/services/**'])
    .filter(
      (f) =>
        String(f).includes('.json') && !String(f).includes('page_texts.json')
    )
    .map((f) => mapFilePathToRoute(f, './content/static/services', 'servicios'))

const getFieldCollection = (globSource, key) => {
  const files = glob
    .sync([globSource])
    .filter((f) => String(f).endsWith('.json'))

  const collection = new Set()

  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const data = require('.' + file)
    const place = data[key]
    collection.add(place)
  }
  return Array.from(collection)
}
const getPlaces = () => getFieldCollection('./content/blog/posts/**', 'place')

export const getPlacesStatic = () => {
  return getPlaces().map((p) => `/impermeabilizaciones/${slugify(p)}`)
}

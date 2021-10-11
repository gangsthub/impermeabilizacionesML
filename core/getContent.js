const cleanSlug = (string) => string.replace(/(^\.\/|\.json$)/gi, '')

const getServicesFromContext = (context) => {
  return context
    .keys()
    .filter((t) => t !== './page_texts.json') // filter page texts out
    .reduce((acc, curr) => {
      const slug = cleanSlug(curr)
      const obj = context(curr)
      return {
        ...acc,
        [slug]: {
          ...obj,
          slug,
        },
      }
    }, {})
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

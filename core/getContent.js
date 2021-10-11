const cleanSlug = (string) => string.replace(/(^\.\/|\.json$)/gi, '')

export const getServices = () => {
  const context = require.context('~/content/static/services', false, /\.json$/)
  const services = context
    .keys()
    .filter((t) => t !== './page_texts.json') // filter page texts out
    .reduce((acc, curr) => {
      const slug = cleanSlug(curr)
      return {
        ...acc,
        [slug]: {
          ...context(curr),
          slug,
        },
      }
    }, {})
  return services
}

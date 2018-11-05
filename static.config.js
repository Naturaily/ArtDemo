const React = require('react')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const axios = require('axios')
const fs = require('fs')
const klaw = require('klaw')
const path = require('path')
const matter = require('gray-matter')


function getPosts () {
  const items = []
  // Walk ("klaw") through blog directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if blog directory exists //
    if (fs.existsSync('./src/blog')) {
      klaw('./src/blog')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Create slug for URL //
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // events = items for below routes //
          resolve(items)
        })
    } else {
      // If src/events directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

function getEvents () {
  const items = []
  // Walk ("klaw") through events directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if events directory exists //
    if (fs.existsSync('./src/blog/events')) {
      klaw('./src/blog/events')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // events = items for below routes //
          resolve(items)
        })
    } else {
      // If src/events directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

function getFairs () {
  const items = []
  // Walk ("klaw") through fairs directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if fairs directory exists //
    if (fs.existsSync('./src/blog/fairs')) {
      klaw('./src/blog/fairs')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // fairs = items for below routes //
          resolve(items)
        })
    } else {
      // If src/fairs directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

function getInformations () {
  const items = []
  // Walk ("klaw") through informations directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if informations directory exists //
    if (fs.existsSync('./src/blog/informations')) {
      klaw('./src/blog/informations')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // informations = items for below routes //
          resolve(items)
        })
    } else {
      // If src/informations directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

function getReports () {
  const items = []
  // Walk ("klaw") through reports directory and push file paths into items array //
  const getFiles = () => new Promise(resolve => {
    // Check if reports directory exists //
    if (fs.existsSync('./src/blog/reports')) {
      klaw('./src/blog/reports')
        .on('data', item => {
          // Filter function to retrieve .md files //
          if (path.extname(item.path) === '.md') {
            // If markdown file, read contents //
            const data = fs.readFileSync(item.path, 'utf8')
            // Convert to frontmatter object and markdown content //
            const dataObj = matter(data)
            // Remove unused key //
            delete dataObj.orig
            // Push object into items array //
            items.push(dataObj)
          }
        })
        .on('error', e => {
          console.log(e)
        })
        .on('end', () => {
          // Resolve promise for async getRoutes request //
          // reports = items for below routes //
          resolve(items)
        })
    } else {
      // If src/reports directory doesn't exist, return items as empty array //
      resolve(items)
    }
  })
  return getFiles()
}

function getLanding () {
  const items = []
  const getFiles = () => new Promise(resolve => {

  klaw('./src/landing')
    .on('data', item => {
      if (path.extname(item.path) === '.md') {
        const data = fs.readFileSync(item.path, 'utf8')
        const dataObj = matter(data)

        delete dataObj.orig

        items.push(dataObj)
      }
    })
    .on('error', e => {
      console.log(e)
    })
    .on('end', () => {
      resolve(items[0])
    })
  })
  return getFiles()
}

export default {

  getSiteData: () => ({
    title: 'React Static with Netlify CMS',
  }),
  getRoutes: async () => {
    const posts = await getPosts()
    const events = await getEvents()
    const fairs = await getFairs()
    const informations = await getInformations()
    const reports = await getReports()
    const landing = await getLanding()

    return [
      {
        path: '/',
        component: 'src/containers/Landing',
        getData: () => ({
          landing,
          posts,
        }),
      },
      {
        path: '/aktualnosci',
        component: 'src/containers/Blog',
        getData: () => ({
          posts,
        }),
      },
      {
        path: `/wydarzenia`,
        component: 'src/containers/Events',
        getData: () => ({
          events,
        }),
        children:
          events.map(singleEvent => ({
            path: `/${singleEvent.data.slug}`,
            component: 'src/containers/SingleEvent',
            getData: () => ({
              singleEvent,
            }),
          })),
      },

      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <title>Title Land</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="hehe descriptionezz" />
        <meta name="google-site-verification" content="vDMlfF8AyuuZSYxkC4GcaZFIiSzSq1yHqj5MxsEbWok" />
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
  webpack: (config, { defaultLoaders, stage }) => {
    let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
          },
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
  },
}

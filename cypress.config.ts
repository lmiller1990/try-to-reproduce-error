import { defineConfig } from 'cypress'
import webpackConfig from './webpack.config.js'

export default defineConfig({
  projectId: '11sg1m',
  retries: {
    runMode: 1,
    openMode: 0
  },
  component: {
    supportFile: false,
    devServer: {
      framework: 'react',
      bundler: 'webpack',
      webpackConfig
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    setupNodeEvents(on, config) {},
    video: false,
    specPattern: 'src/**/*spec.cy.{js,jsx,ts,tsx}'
  }
})

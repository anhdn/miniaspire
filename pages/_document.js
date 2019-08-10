import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Helmet from 'react-helmet'

export default class extends Document {
  static async getInitialProps (ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const documentProps = await Document.getInitialProps(ctx)
      return {
        ...documentProps,
        helmet: Helmet.renderStatic(),
        styles: (
          <>
            {documentProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  get helmetHtmlAttrComponents () {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  get helmetBodyAttrComponents () {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  get helmetHeadComponents () {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx () {
    let title = 'weaspire'
    return (
      <Helmet>
        <title>{title}</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta property='og:title' content={title} />

      </Helmet>
    )
  }

  render () {
    return (
      <html {...this.helmetHtmlAttrComponents}>
        <Head>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          />
          { this.helmetJsx }
          { this.helmetHeadComponents }
          <style type='text/css'>{`button:focus { outline: none !important }`}</style>
        </Head>
        {/* <body {...this.helmetBodyAttrComponents}></body> */}
        <Main />
        <NextScript />

      </html>
    )
  }
}

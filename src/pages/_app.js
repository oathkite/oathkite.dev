import 'modern-css-reset/dist/reset.min.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <Component
      { ...pageProps }
    />
  )
}

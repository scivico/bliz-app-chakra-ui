import { useColorMode } from "@chakra-ui/color-mode"
import { NextSeo } from "next-seo"
import { ReactNode } from "react"

type LayoutProps = {
  title?: string
  children: ReactNode
}

const Layout = ({ title, children }: LayoutProps) => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <NextSeo title={title} />
      {children}
    </>
  )
}

export default Layout

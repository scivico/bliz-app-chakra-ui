import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Divider,
  HStack,
  SimpleGrid,
  Switch,
  Text,
  useColorMode,
  VStack,
} from "@chakra-ui/react"
import logout from "app/auth/mutations/logout"
import { PageContainer } from "app/core/components/PageContainer"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import Layout from "app/core/layouts/Layout"
import FeatureThreeColumns from "app/core/layouts/Sections/FeatureThreeColumns"
import { HeaderMenu } from "app/core/layouts/Sections/HeaderMenu"
import { Hero } from "app/core/layouts/Sections/Hero"
import ThreeTierPricing from "app/core/layouts/Sections/PriceWrapper"
import SmallCenteredFooter from "app/core/layouts/Sections/SmallCenteredFooter"
import WithSpeechBubblesTestimonials from "app/core/layouts/Sections/WithSpeechBubblesTestimonials"
import { BlitzPage, Link, Routes, useMutation } from "blitz"
import React, { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <VStack align="stretch">
        <HStack spacing={3}>
          <Text>
            User id: <span>{currentUser.id}</span>
          </Text>
          <Text>
            User role: <span>{currentUser.role}</span>
          </Text>
        </HStack>
        <Button
          colorScheme="brand"
          size="md"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </Button>
      </VStack>
    )
  } else {
    return (
      <SimpleGrid columns={2} columnGap={3}>
        <Link href={Routes.SignupPage()}>
          <Button size="lg" colorScheme="brand">
            Sign Up
          </Button>
        </Link>

        <Link href={Routes.LoginPage()}>
          <Button size="lg" colorScheme="purple">
            Login
          </Button>
        </Link>
      </SimpleGrid>
    )
  }
}

const Home: BlitzPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <PageContainer>
      <Container>
        <VStack as="main" align="stretch" spacing={5} py={10}>
          <Box>
            <HStack>
              <HeaderMenu />
              <SunIcon />
              <Switch isChecked={colorMode === "dark"} onChange={(e) => toggleColorMode()} />
              <MoonIcon />
            </HStack>
          </Box>
          <Hero />
          <FeatureThreeColumns />
          <ThreeTierPricing />
          <WithSpeechBubblesTestimonials />
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
          <Divider />
          <SmallCenteredFooter />
        </VStack>
      </Container>
    </PageContainer>
  )
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Inicio">{page}</Layout>

export default Home

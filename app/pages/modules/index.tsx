import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { Box, Container, HStack, Switch, useColorMode, VStack } from "@chakra-ui/react"
import { Card } from "app/core/components/Card"
import { PageContainer } from "app/core/components/PageContainer"
import Layout from "app/core/layouts/Layout"
import CommonFooterModules from "app/modules/commons/components/CommonFooterModules"
import { HeaderCommons } from "app/modules/commons/components/HeaderCommos"
import { ModuleCard } from "app/modules/commons/components/ModuleCard"
import { BlitzPage } from "blitz"
import React from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */
const Modules: BlitzPage = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <PageContainer>
      <Container>
        <VStack as="main" align="stretch" spacing={5} py={10}>
          <Box>
            <HStack>
              <HeaderCommons />
              <SunIcon />
              <Switch isChecked={colorMode === "dark"} onChange={(e) => toggleColorMode()} />
              <MoonIcon />
            </HStack>
          </Box>
          <VStack as="main" spacing={5} py={10}>
            <h3>Modulos disponibles</h3>
            <HStack>
              <ModuleCard />
              <ModuleCard />
            </HStack>
            <HStack>
              <ModuleCard />
              <ModuleCard />
            </HStack>
          </VStack>
          <CommonFooterModules />
        </VStack>
      </Container>
    </PageContainer>
  )
}

Modules.suppressFirstRenderFlicker = true
Modules.getLayout = (page) => <Layout title="Inicio">{page}</Layout>

export default Modules

import React, { ReactChild, Suspense } from "react"
import { Box, Flex, Text, Button, SimpleGrid, HStack, VStack } from "@chakra-ui/react"
import Logo from "app/core/layouts/ui/Logo"
import { Link, Routes, useMutation } from "blitz"
import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"

interface MenuItemProps {
  children: ReactChild
  isLast?: boolean
  to?: string
}

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <VStack align="stretch" paddingTop="0">
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
const MenuItem = (props: MenuItemProps, { ...rest }) => {
  const { children, to = "/", isLast } = props
  return (
    <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} {...rest}>
      <Link href={to}>{children}</Link>
    </Text>
  )
}

export const HeaderCommons = (props: any) => {
  return (
    <Flex as="nav" align="center" justify="space-between" wrap="wrap" w="100%" pr={5} {...props}>
      <Flex align="left">
        <Logo w="300px" color={["primary.500", "primary.600"]} />
      </Flex>
      <Box display={{ base: "block", md: "block" }} flexBasis={{ base: "auto", md: "auto" }}>
        <Flex
          align="center"
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <Suspense fallback="Loading...">
            <UserInfo />
          </Suspense>
        </Flex>
      </Box>
    </Flex>
  )
}

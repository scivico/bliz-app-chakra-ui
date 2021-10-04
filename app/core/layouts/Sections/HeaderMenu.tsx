import React, { ReactChild } from "react"
import { Box, Flex, Text, Button, Link } from "@chakra-ui/react"
import Logo from "../ui/Logo"

interface MenuItemProps {
  children: ReactChild
  isLast?: boolean
  to?: string
}
const MenuItem = (props: MenuItemProps, { ...rest }) => {
  const { children, to = "/", isLast } = props
  return (
    <Text mb={{ base: isLast ? 0 : 8, sm: 0 }} mr={{ base: 0, sm: isLast ? 0 : 8 }} {...rest}>
      <Link href={to}>{children}</Link>
    </Text>
  )
}

export const HeaderMenu = (props: any) => {
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
          <MenuItem to={"/"}>Inicio</MenuItem>
          <MenuItem to={"/how"}>Cómo funciona</MenuItem>
          <MenuItem to={"/faetures"}>Productos </MenuItem>
          <MenuItem to={"/pricing"}>Precios </MenuItem>
          <MenuItem to={"/signup"}>
            <Button
              size="sm"
              rounded="md"
              color={["secondary.100", "primary.400"]}
              bg={["brand.500", "brand.300"]}
              _hover={{
                bg: ["primary.100", "primary.200", "primary.600", "primary.600"],
              }}
            >
              Registrarse
            </Button>
          </MenuItem>
          <MenuItem to="/login" isLast={true}>
            <Button
              size="sm"
              rounded="md"
              color={["primary.100", "primary.400"]}
              bg={["secondary.200", "primary.500"]}
              _hover={{
                bg: ["primary.100", "primary.200", "primary.600", "primary.600"],
              }}
            >
              Ingresar
            </Button>
          </MenuItem>
        </Flex>
      </Box>
    </Flex>
  )
}

import { Box, Button, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react"
import React from "react"
export const Hero = ({ ...rest }: any) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          Avent OnCode Medical System de Argentina
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          En Avent OnCode Medical Systen tenemos como propósito fundamental mejorar la vida de los
          pacientes desde el apoyo a la organización clínica.
        </Heading>
        <Link href={"/signup"} color={"brand.400"}>
          <Button
            size="sm"
            rounded="md"
            color={["secondary.100", "primary.400"]}
            bg={["brand.500", "brand.300"]}
            _hover={{
              bg: ["primary.100", "primary.200", "primary.600", "primary.600"],
            }}
          >
            Regístrese ahora mismo
          </Button>
        </Link>
        <Text fontSize="xs" mt={2} textAlign="center" color="primary.800" opacity="0.6">
          No se requiere trajeta de crédito.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src="https://source.unsplash.com/640x480/?clinic" size="100%" rounded="1rem" />
      </Box>
    </Flex>
  )
}

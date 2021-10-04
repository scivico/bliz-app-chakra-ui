import React from "react"
import { Box, Text, Image } from "@chakra-ui/react"

export default function Logo(props: any) {
  return (
    <Box {...props}>
      <Image src="/logo.png" alt="Logo" size="100%" />
    </Box>
  )
}

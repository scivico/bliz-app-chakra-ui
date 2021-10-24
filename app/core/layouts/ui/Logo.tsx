import { Image, LinkBox, LinkOverlay } from "@chakra-ui/react"
import { Routes } from "blitz"
import React from "react"

export default function Logo(props: any) {
  return (
    <LinkBox as="landing" {...props}>
      <LinkOverlay href="/landing">
        <Image src="/logo.png" alt="Logo" size="100%" />
      </LinkOverlay>
    </LinkBox>
  )
}

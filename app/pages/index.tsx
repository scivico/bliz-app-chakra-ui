import Layout from "app/core/layouts/Layout"
import { BlitzPage } from "blitz"
import React from "react"
import Landing from "./landing"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home: BlitzPage = () => {
  return <Landing />
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Inicio">{page}</Layout>

export default Home

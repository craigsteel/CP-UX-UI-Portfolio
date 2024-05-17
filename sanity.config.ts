/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { StudioNavbar, defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { muxInput } from 'sanity-plugin-mux-input'
import { media, mediaAssetSource } from "sanity-plugin-media";
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId, muxTokenID, muxTokenSecret} from './sanity/env'
import {schemaTypes} from './sanity/schema'
import { myTheme } from './theme'
import Logo from './app/components/Logo'
import { getDefaultDocumentNode } from './structure';

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  muxTokenID,
  muxTokenSecret,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
      types: schemaTypes,
  },
  plugins: [
    deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
    muxInput({ mp4_support: 'standard' }),
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: previousAssetSources => {
        return previousAssetSources.filter(assetSource => assetSource !== mediaAssetSource)
      }
    }
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,
    }
  },
  // theme: myTheme,
})

import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  srcDir: 'src',
  noPublicDir: true,
  imports: {
    dts: './.nitro/types/nitro.d.ts',
    dirs: [
      './src/utils/**',
    ],
  },
})

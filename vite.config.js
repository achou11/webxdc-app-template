import { buildXDC, eruda, mockWebxdc } from '@webxdc/vite-plugins'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [buildXDC(), eruda(), mockWebxdc()],
})

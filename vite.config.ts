import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: 'src/index.ts',
      name: 'oriddle-design-system',
      fileName: 'index'
    },
    rollupOptions:{
      external: ['react', 'react-dom'],
      output:{
        globals:{
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
    commonjsOptions: {
      esmExternals: ['react','react-dom'],
    }
  },
  plugins: [react(),dts({ rollupTypes: true})],
})

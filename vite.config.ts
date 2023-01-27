import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

//=> Vite config
export default defineConfig({
	//=> 插件
	plugins: [
		tsconfigPaths(),
		react({
			include: ['*.tsx', '*.ts']
		}),
		svgr()
	],
	server: {
		open: true,
		port: 1024 //=> Dev 监听端口 | '一般在 3000 绑定失败时设置'
	},
	build: {
		rollupOptions: {
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
			}
		}
	}
})

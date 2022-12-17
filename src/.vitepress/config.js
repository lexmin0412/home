import { defineConfig } from 'vitepress'

/**
 * @type {import('vitepress').UserConfig}
 */
export default defineConfig({
	lang: "zh-CN",
	title: "Lexmin 的随笔",
	description: "do valuable things.",
	base: "/blog",
	lastUpdated: false,
	themeConfig: {
		footer: {
			message: "Created and maintained by Lexmin0412.",
		},
		siteTitle: "Lexmin 的随笔",
		outlineTitle: '当前目录',
		logo: "https://via.placeholder.com/1500/ffffff/45aafa/?text=FEX",
		nav: [
			{
				text: "Github",
				link: "https://github.com/lexmin0412/blog",
			},
			// {
			// 	text: "More Tools",
			// 	// items: [
			// 	// 	{
			// 	// 		text: "Confluence",
			// 	// 		link: "https://confluence.myscrm.cn/",
			// 	// 	},
			// 	// 	{
			// 	// 		text: "Mars",
			// 	// 		link: "https://mars.myscrm.cn/",
			// 	// 	},
			// 	// 	{
			// 	// 		text: "Jarvis",
			// 	// 		link: "https://jarvis.myscrm.cn/",
			// 	// 	},
			// 	// ],
			// },
			{
				text: "Find me",
				items: [
					{
						text: "Github",
						link: "https://github.com/lexmin0412",
					},
				],
			},
		],
		sidebar: [
			{
				text: "前端工程化",
				items: [
					{
						text: "无界微前端实践",
						link: "/前端工程化/无界微前端实践",
					},
					{
						text: "Lerna管理Monorepo实践",
						link: "/前端工程化/Lerna管理Monorepo实践",
					},
				],
			},
			{
				text: "包管理",
				items: [
					{
						text: "Corepack 实践",
						link: "/npm相关/corepack实践",
					},
					{
						text: "yarn workspace 实践",
						link: "/前端工程化/yarn-workspace实践",
					},
				],
			},
			{
				text: "头脑风暴",
				items: [
					{
						text: "电商需求体系",
						link: "/brainstorming/e-commerce-pr-system",
					},
				],
			},
			{
				text: "Nestjs",
				items: [
					{
						text: "初始化应用",
						link: "/nestjs/init-project",
					},
					{
						text: "搭建接口文档",
						link: "/nestjs/build-api-docs",
					},
				],
			},
			{
				text: "码砖🧱",
				items: [
					{
						text: "搭建基于vite的react技术栈应用",
						link: "/construct/搭建基于vite的react技术栈应用",
					},
				],
			},
			{
				text: "others",
				items: [
					{
						text: "coming soon",
						link: "/plan/coming-soon",
					},
				],
			},
		],
		// lastUpdatedText: "Last Updated",
		editLink: {
			pattern:
				"https://github.com/lexmin0412/blog/edit/master/src/:path",
			text: "Edit this page on Gitlab",
		},
	},
});

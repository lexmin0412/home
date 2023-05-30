import { defineConfig } from 'vitepress'

/**
 * @type {import('vitepress').UserConfig}
 */
export default defineConfig({
	lang: "zh-CN",
	title: "Lexmin 的主页",
	description: "do valuable things.",
	base: "/home",
	lastUpdated: false,
	themeConfig: {
		footer: {
			message: "Created and maintained by Lexmin0412.",
		},
		siteTitle: "Lexmin 的主页",
		outlineTitle: '当前目录',
		socialLinks: [
			{ icon: "github", link: "https://github.com/lexmin0412" }
		],
		logo: 'https://lexmin.oss-cn-hangzhou.aliyuncs.com/statics/common/24385370.jpeg?x-oss-process=image/resize,w_100,circle,r_100',
		nav: [
			{
				text: "blog",
				link: "/blog/guide",
			},
			{
				text: "tools",
				link: "/tools/tools",
			},
			// {
			// 	text: "Find me",
			// 	items: [
			// 		{
			// 			text: "Github",
			// 			link: "https://github.com/lexmin0412",
			// 		},
			// 	],
			// },
		],
		sidebar: {
			'/blog/': [
				{
					text: "前端工程化",
					items: [
						{
							text: "无界微前端实践",
							link: "/blog/前端工程化/无界微前端实践",
						},
						{
							text: "Lerna管理Monorepo实践",
							link: "/blog/前端工程化/Lerna管理Monorepo实践",
						},
					],
				},
				{
					text: "包管理",
					items: [
						{
							text: "Corepack 实践",
							link: "/blog/npm相关/corepack实践",
						},
						{
							text: "yarn workspace 实践",
							link: "/blog/前端工程化/yarn-workspace实践",
						},
					],
				},
				{
					text: "头脑风暴",
					items: [
						{
							text: "电商系统功能",
							link: "/blog/brainstorming/e-commerce-pr-system",
						},
					],
				},
				{
					text: "Nestjs",
					items: [
						{
							text: "初始化应用",
							link: "/blog/nestjs/init-project",
						},
						{
							text: "搭建接口文档",
							link: "/blog/nestjs/build-api-docs",
						},
					],
				},
				{
					text: "码砖🧱",
					items: [
						{
							text: "搭建基于vite的react技术栈应用",
							link: "/blog/construct/搭建基于vite的react技术栈应用",
						},
					],
				},
				{
					text: "others",
					items: [
						{
							text: "coming soon",
							link: "/blog/plan/coming-soon",
						},
					],
				},
			],
			'/tools/': [
				{
					text: 'gcm',
					items: [
						{
							text: '使用文档',
							link: '/tools/gcm'
						}
					]
				},
				{
					text: 'make-pkg-manager',
					items: [
						{
							text: '使用文档',
							link: '/tools/mpp'
						}
					]
				},
				// {
				// 	text: 'gcm',
				// 	link: '/tools/gcm'
				// }
			]
		},
		// lastUpdatedText: "Last Updated",
		editLink: {
			pattern:
				"https://github.com/lexmin0412/blog/edit/master/src/:path",
			text: "Edit this page on Gitlab",
		},
	},
});

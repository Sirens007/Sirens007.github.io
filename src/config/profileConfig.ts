import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/" 开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "assets/images/avatar.avif",

	// 名字
<<<<<<< HEAD
	name: "Sirens",

	// 个人签名
	bio: "永遠相信，美好的事情即將發生",
=======
	name: "Firefly",

	// 个人签名
	bio: "Hello, I'm Firefly.",
>>>>>>> upstream/master

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
<<<<<<< HEAD
			name: "CSDN",
			icon: "simple-icons:csdn",
			url: "https://blog.csdn.net/2402_87978990",
=======
			name: "qq",
			icon: "fa7-brands:qq",
			url: "https://qm.qq.com/q/ZGsFa8qX2G",
>>>>>>> upstream/master
			showName: false,
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
<<<<<<< HEAD
			url: "https://github.com/Sirens007",
			showName: false,
		},
		{
			name: "Gitee",
			icon: "mdi:git",
			url: "https://gitee.com/Sirens007",
=======
			url: "https://github.com/CuteLeaf",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:xiaye@msn.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
>>>>>>> upstream/master
			showName: false,
		},
	],
};

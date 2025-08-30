// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
		// {
	// 	id: 'current-work',
	// 	title: '全栈开发工程师',
	// 	description: '负责Web应用的前后端开发，参与产品架构设计和技术选型，带领团队完成多个重要项目。',
	// 	type: 'work',
	// 	startDate: '2023-06-01',
	// 	location: '北京',
	// 	organization: 'TechCorp Inc.',
	// 	position: 'Senior Full Stack Developer',
	// 	skills: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS'],
	// 	achievements: [
	// 		'主导开发了公司核心产品的前端架构重构',
	// 		'优化系统性能，页面加载速度提升40%',
	// 		'建立了完善的代码审查和测试流程'
	// 	],
	// 	icon: 'material-symbols:work',
	// 	color: '#2563EB',
	// 	featured: true
	// },
	// {
	// 	id: "summer-internship-2024",
	// 	title: "前端开发实习生",
	// 	description: "暑期在一家互联网公司实习，参与Web应用的前端开发工作。",
	// 	type: "work",
	// 	startDate: "2024-07-01",
	// 	endDate: "2024-08-31",
	// 	location: "北京",
	// 	organization: "TechStart科技有限公司",
	// 	position: "Frontend Development Intern",
	// 	skills: ["React", "JavaScript", "CSS3", "Git", "Figma"],
	// 	achievements: [
	// 		"完成了用户界面组件的开发",
	// 		"学习了团队协作和代码规范",
	// 		"获得了实习优秀表现证明",
	// 	],
	// 	icon: "material-symbols:work",
	// 	color: "#DC2626",
	// 	featured: true,
	// },
		// {
	// 	id: "web-development-course",
	// 	title: "Web开发在线课程完成",
	// 	description: "完成了全栈Web开发的在线课程，系统学习了前后端开发技术。",
	// 	type: "achievement",
	// 	startDate: "2024-01-15",
	// 	endDate: "2024-05-30",
	// 	organization: "慕课网",
	// 	skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
	// 	achievements: [
	// 		"获得了课程完成证书",
	// 		"完成了5个实战项目",
	// 		"掌握了全栈开发基础",
	// 	],
	// 	links: [
	// 		{
	// 			name: "Course Certificate",
	// 			url: "https://certificates.example.com/web-dev",
	// 			type: "certificate",
	// 		},
	// 	],
	// 	icon: "material-symbols:verified",
	// 	color: "#059669",
	// },
		// {
	// 	id: "programming-contest",
	// 	title: "校内程序设计竞赛",
	// 	description: "参加了学校举办的程序设计竞赛，提升了算法和编程能力。",
	// 	type: "achievement",
	// 	startDate: "2023-10-20",
	// 	location: "北京理工大学",
	// 	organization: "计算机学院",
	// 	skills: ["C++", "算法", "数据结构"],
	// 	achievements: [
	// 		"获得了校内竞赛三等奖",
	// 		"提升了算法思维能力",
	// 		"加强了编程基础技能",
	// 	],
	// 	icon: "material-symbols:emoji-events",
	// 	color: "#7C3AED",
	// },
		// {
	// 	id: "part-time-tutor",
	// 	title: "编程家教兼职",
	// 	description: "为高中生提供编程入门辅导，帮助他们学习Python基础。",
	// 	type: "work",
	// 	startDate: "2023-09-01",
	// 	endDate: "2024-01-31",
	// 	position: "编程辅导老师",
	// 	skills: ["Python", "教学", "沟通"],
	// 	achievements: [
	// 		"帮助3名学生掌握了Python基础",
	// 		"提升了表达和沟通能力",
	// 		"获得了教学经验",
	// 	],
	// 	icon: "material-symbols:school",
	// 	color: "#059669",
	// },
	{
		id: 'mizuki-project',
		title: 'Mizuki博客主题开源项目',
		description: '基于Astro框架开发的现代化博客主题，在此基础上不断优化。',
		type: 'project',
		startDate: '2025-06-27',
		endDate: '2025-08-27',
		skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'Svelte'],
		achievements: [
			'GitHub获得500+ Stars',
			'支持多语言和主题切换',
			'完善的文档和示例'
		],
		links: [
			{
				name: 'GitHub Repository',
				url: 'https://github.com/Sirens007/MyStorage',
				type: 'project'
			},
			{
				name: 'Live Demo',
				url: 'https://sirens007.github.io/',
				type: 'website'
			}
		],
		icon: 'material-symbols:code',
		color: '#36223bff',
		featured: true
	},
	{
		id: 'computer-science-degree',
		title: '计算机科学与技术学士学位(在学)',
		description: '系统学习计算机科学基础理论，包括数据结构、算法、操作系统、数据库等核心课程。',
		type: 'education',
		startDate: '2024-09-01',
		location: '长春',
		organization: '长春理工大学',
		skills: ['Java', 'C++', 'Python', 'MySQL', 'Linux'],
		achievements: [
			'GPA: 3.14/5.0',
			'获得校级优秀学生奖学金',
			'参与多个课程项目和实习'
		],
		icon: 'material-symbols:school',
		color: '#eaec64ff',
		featured: true
	},
	{
		id: 'information-security-competition',
		title: '全国大学生信息安全竞赛',
		description: '负责Web方向题目的flag获取。',
		type: 'achievement',
		startDate: '2025-05-01',
		endDate: '2025-07-02',
		location: '长春',
		organization: '北京理工大学',
		position: 'Web direction.',
		skills: ['PHP反序列化', 'Python', 'C++', 'MySQL', '图片上传'],
		achievements: [
			'调试脚本与分析源码',
			'积累了信息搜集、加密算法绕过与身份认证测试',
			'带领团队拿到web方向题目的flag'
		],
		icon: 'material-symbols:work',
		color: '#2563EB',
		featured: true
	},
	{
		id: 'programming-start',
		title: '开始编程学习',
		description: '第一次接触编程，从C语言和C++开始，逐步学习Java和其他技术。',
		type: 'education',
		startDate: '2024-07-01',
		skills: ['C语言', 'C++', 'Java'],
		achievements: [
			'完成了第一个编程语法学习',
			'掌握了C/C++基本语法',
			'培养了对编程的兴趣'
		],
		icon: 'material-symbols:code',
		color: '#7C3AED'
	},
	{
		id: "english-certificate",
		title: "英语四级证书",
		description: "通过了大学英语四级考试，具备了基本的英语读写能力。",
		type: "achievement",
		startDate: '2024-06-27',
		endDate: '2024-12-27',
		organization: "全国大学英语四、六级考试委员会",
		achievements: [
			"四级成绩：470分",
			"提升了英语技术文档阅读能力",
			"为后续学习国外技术资料打下基础",
		],
		links: [
			{
				name: "CET-4 Certificate",
				url: "https://certificates.example.com/cet4",
				type: "certificate",
			},
		],
		icon: "material-symbols:translate",
		color: "#f57490ff",
	},
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};

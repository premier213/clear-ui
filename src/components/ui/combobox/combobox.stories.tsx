import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "./index";

const meta: Meta<typeof Combobox> = {
	title: "UI/Combobox",
	component: Combobox,
	tags: ["autodocs"],
	argTypes: {
		value: { control: "text" },
		onValueChange: { action: "changed" },
		placeholder: { control: "text" },
		searchPlaceholder: { control: "text" },
		emptyText: { control: "text" },
		className: { control: "text" },
		triggerClassName: { control: "text" },
		contentClassName: { control: "text" },
	},
};

export default meta;
type Story = StoryObj<typeof Combobox>;

const defaultOptions = [
	{ value: "next", label: "Next.js" },
	{ value: "sveltekit", label: "SvelteKit" },
	{ value: "nuxt", label: "Nuxt.js" },
	{ value: "remix", label: "Remix" },
	{ value: "astro", label: "Astro" },
];

export const Default: Story = {
	args: {
		options: defaultOptions,
		placeholder: "Select framework...",
		searchPlaceholder: "Search frameworks...",
		emptyText: "No frameworks found.",
	},
};

export const WithValue: Story = {
	args: {
		...Default.args,
		value: "next",
	},
};

export const CustomStyling: Story = {
	args: {
		...Default.args,
		className: "bg-slate-100",
		triggerClassName: "bg-blue-100 hover:bg-blue-200",
		contentClassName: "bg-blue-50",
	},
};

export const LongOptions: Story = {
	args: {
		options: [
			{
				value: "react",
				label: "React - A JavaScript library for building user interfaces",
			},
			{ value: "vue", label: "Vue.js - The Progressive JavaScript Framework" },
			{
				value: "angular",
				label:
					"Angular - Platform for building mobile & desktop web applications",
			},
			{ value: "svelte", label: "Svelte - Cybernetically enhanced web apps" },
		],
		placeholder: "Select framework...",
	},
};

export const EmptyOptions: Story = {
	args: {
		options: [],
		placeholder: "Select framework...",
		emptyText: "No options available.",
	},
};

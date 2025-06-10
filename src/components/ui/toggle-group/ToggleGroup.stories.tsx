import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "UI/ToggleGroup",
	component: ToggleGroup,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof ToggleGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		type: "single",
		defaultValue: "bold",
		"aria-label": "Text formatting",
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="19" y1="4" x2="10" y2="4" />
					<line x1="14" y1="20" x2="5" y2="20" />
					<line x1="15" y1="4" x2="9" y2="20" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
					<line x1="4" y1="21" x2="20" y2="21" />
				</svg>
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const Multiple: Story = {
	args: {
		type: "multiple",
		"aria-label": "Text formatting",
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="19" y1="4" x2="10" y2="4" />
					<line x1="14" y1="20" x2="5" y2="20" />
					<line x1="15" y1="4" x2="9" y2="20" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
					<line x1="4" y1="21" x2="20" y2="21" />
				</svg>
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const WithText: Story = {
	args: {
		type: "single",
		defaultValue: "left",
		"aria-label": "Text alignment",
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<ToggleGroupItem value="left" aria-label="Align left">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="3" y1="12" x2="15" y2="12" />
					<line x1="3" y1="18" x2="18" y2="18" />
				</svg>
				Left
			</ToggleGroupItem>
			<ToggleGroupItem value="center" aria-label="Align center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="6" y1="12" x2="18" y2="12" />
					<line x1="3" y1="18" x2="21" y2="18" />
				</svg>
				Center
			</ToggleGroupItem>
			<ToggleGroupItem value="right" aria-label="Align right">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="3" y1="6" x2="21" y2="6" />
					<line x1="9" y1="12" x2="21" y2="12" />
					<line x1="6" y1="18" x2="21" y2="18" />
				</svg>
				Right
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const Outline: Story = {
	args: {
		type: "single",
		defaultValue: "bold",
		variant: "outline",
		"aria-label": "Text formatting",
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="19" y1="4" x2="10" y2="4" />
					<line x1="14" y1="20" x2="5" y2="20" />
					<line x1="15" y1="4" x2="9" y2="20" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
					<line x1="4" y1="21" x2="20" y2="21" />
				</svg>
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

export const Sizes: Story = {
	args: {
		type: "single",
		defaultValue: "bold",
		"aria-label": "Text formatting",
	},
	render: (args) => (
		<div className="flex flex-col gap-4">
			<ToggleGroup {...args} size="sm">
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
						<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					</svg>
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<line x1="19" y1="4" x2="10" y2="4" />
						<line x1="14" y1="20" x2="5" y2="20" />
						<line x1="15" y1="4" x2="9" y2="20" />
					</svg>
				</ToggleGroupItem>
			</ToggleGroup>

			<ToggleGroup {...args} size="default">
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
						<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					</svg>
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<line x1="19" y1="4" x2="10" y2="4" />
						<line x1="14" y1="20" x2="5" y2="20" />
						<line x1="15" y1="4" x2="9" y2="20" />
					</svg>
				</ToggleGroupItem>
			</ToggleGroup>

			<ToggleGroup {...args} size="lg">
				<ToggleGroupItem value="bold" aria-label="Toggle bold">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
						<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					</svg>
				</ToggleGroupItem>
				<ToggleGroupItem value="italic" aria-label="Toggle italic">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<line x1="19" y1="4" x2="10" y2="4" />
						<line x1="14" y1="20" x2="5" y2="20" />
						<line x1="15" y1="4" x2="9" y2="20" />
					</svg>
				</ToggleGroupItem>
			</ToggleGroup>
		</div>
	),
};

export const Disabled: Story = {
	args: {
		type: "single",
		defaultValue: "bold",
		disabled: true,
		"aria-label": "Text formatting",
	},
	render: (args) => (
		<ToggleGroup {...args}>
			<ToggleGroupItem value="bold" aria-label="Toggle bold">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
					<path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="italic" aria-label="Toggle italic">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<line x1="19" y1="4" x2="10" y2="4" />
					<line x1="14" y1="20" x2="5" y2="20" />
					<line x1="15" y1="4" x2="9" y2="20" />
				</svg>
			</ToggleGroupItem>
			<ToggleGroupItem value="underline" aria-label="Toggle underline">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					aria-hidden="true"
				>
					<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
					<line x1="4" y1="21" x2="20" y2="21" />
				</svg>
			</ToggleGroupItem>
		</ToggleGroup>
	),
};

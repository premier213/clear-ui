import { Toggle } from "@/components/ui/toggle";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
	title: "UI/Toggle",
	component: Toggle,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => (
		<Toggle aria-label="Toggle bold">
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
		</Toggle>
	),
};

export const WithText: Story = {
	render: () => (
		<Toggle aria-label="Toggle italic">
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
			Italic
		</Toggle>
	),
};

export const Outline: Story = {
	render: () => (
		<Toggle variant="outline" aria-label="Toggle underline">
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
			Underline
		</Toggle>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Toggle size="sm" aria-label="Small toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
			</Toggle>

			<Toggle size="default" aria-label="Default toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
			</Toggle>

			<Toggle size="lg" aria-label="Large toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
			</Toggle>
		</div>
	),
};

export const Disabled: Story = {
	render: () => (
		<div className="flex items-center gap-4">
			<Toggle disabled aria-label="Disabled toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
			</Toggle>

			<Toggle disabled variant="outline" aria-label="Disabled outline toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
			</Toggle>
		</div>
	),
};

export const WithStates: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<Toggle pressed aria-label="Pressed toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
				Pressed
			</Toggle>

			<Toggle aria-label="Unpressed toggle">
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
					<path d="M12 2v20M2 12h20" />
				</svg>
				Unpressed
			</Toggle>
		</div>
	),
};

import type { Meta, StoryObj } from "@storybook/react";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from ".";

const meta: Meta<typeof Select> = {
	title: "UI/Select",
	component: Select,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a fruit" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Fruits</SelectLabel>
					<SelectItem value="apple">Apple</SelectItem>
					<SelectItem value="banana">Banana</SelectItem>
					<SelectItem value="blueberry">Blueberry</SelectItem>
					<SelectItem value="grapes">Grapes</SelectItem>
					<SelectItem value="pineapple">Pineapple</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithGroups: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a framework" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Frontend</SelectLabel>
					<SelectItem value="react">React</SelectItem>
					<SelectItem value="vue">Vue</SelectItem>
					<SelectItem value="angular">Angular</SelectItem>
				</SelectGroup>
				<SelectGroup>
					<SelectLabel>Backend</SelectLabel>
					<SelectItem value="node">Node.js</SelectItem>
					<SelectItem value="django">Django</SelectItem>
					<SelectItem value="rails">Ruby on Rails</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const WithIcons: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select a language" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Languages</SelectLabel>
					<SelectItem value="typescript">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-4 w-4"
							aria-hidden="true"
						>
							<title>TypeScript</title>
							<path d="M5 3l14 9-14 9V3z" />
							<path d="M19 3l-14 9 14 9V3z" />
						</svg>
						TypeScript
					</SelectItem>
					<SelectItem value="javascript">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-4 w-4"
							aria-hidden="true"
						>
							<title>JavaScript</title>
							<path d="M12 2L2 7l10 5 10-5-10-5z" />
							<path d="M2 17l10 5 10-5" />
							<path d="M2 12l10 5 10-5" />
						</svg>
						JavaScript
					</SelectItem>
					<SelectItem value="python">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-4 w-4"
							aria-hidden="true"
						>
							<title>Python</title>
							<path d="M12 2L2 7l10 5 10-5-10-5z" />
							<path d="M2 17l10 5 10-5" />
							<path d="M2 12l10 5 10-5" />
						</svg>
						Python
					</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const Small: Story = {
	render: () => (
		<Select>
			<SelectTrigger className="w-[180px]" size="sm">
				<SelectValue placeholder="Select a size" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Sizes</SelectLabel>
					<SelectItem value="xs">Extra Small</SelectItem>
					<SelectItem value="sm">Small</SelectItem>
					<SelectItem value="md">Medium</SelectItem>
					<SelectItem value="lg">Large</SelectItem>
					<SelectItem value="xl">Extra Large</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

export const Disabled: Story = {
	render: () => (
		<Select disabled>
			<SelectTrigger className="w-[180px]">
				<SelectValue placeholder="Select an option" />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectLabel>Options</SelectLabel>
					<SelectItem value="option1">Option 1</SelectItem>
					<SelectItem value="option2">Option 2</SelectItem>
					<SelectItem value="option3">Option 3</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	),
};

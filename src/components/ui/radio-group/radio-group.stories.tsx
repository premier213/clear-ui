import type { Meta, StoryObj } from "@storybook/react";
import { RadioGroup, RadioGroupItem } from ".";

const meta: Meta<typeof RadioGroup> = {
	title: "UI/RadioGroup",
	component: RadioGroup,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-1" id="option-1" />
				<label
					htmlFor="option-1"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Option 1
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-2" id="option-2" />
				<label
					htmlFor="option-2"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Option 2
				</label>
			</div>
		</RadioGroup>
	),
};

export const WithDescription: Story = {
	render: () => (
		<RadioGroup defaultValue="card" className="grid gap-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="card" id="card" />
				<label
					htmlFor="card"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Card Payment
				</label>
			</div>
			<div className="ml-6 text-muted-foreground text-sm">
				Pay with your credit card
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="paypal" id="paypal" />
				<label
					htmlFor="paypal"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					PayPal
				</label>
			</div>
			<div className="ml-6 text-muted-foreground text-sm">
				Pay with your PayPal account
			</div>
		</RadioGroup>
	),
};

export const WithIcons: Story = {
	render: () => (
		<RadioGroup defaultValue="light" className="grid gap-4">
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="light" id="light" />
				<label
					htmlFor="light"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<div className="flex items-center gap-2">
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
							className="h-4 w-4"
							aria-hidden="true"
						>
							<title>Light Mode</title>
							<circle cx="12" cy="12" r="4" />
							<path d="M12 2v2" />
							<path d="M12 20v2" />
							<path d="m4.93 4.93 1.41 1.41" />
							<path d="m17.66 17.66 1.41 1.41" />
							<path d="M2 12h2" />
							<path d="M20 12h2" />
							<path d="m6.34 17.66-1.41 1.41" />
							<path d="m19.07 4.93-1.41 1.41" />
						</svg>
						Light
					</div>
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="dark" id="dark" />
				<label
					htmlFor="dark"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					<div className="flex items-center gap-2">
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
							className="h-4 w-4"
							aria-hidden="true"
						>
							<title>Dark Mode</title>
							<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
						</svg>
						Dark
					</div>
				</label>
			</div>
		</RadioGroup>
	),
};

export const Disabled: Story = {
	render: () => (
		<RadioGroup defaultValue="option-1" disabled>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-1" id="disabled-1" />
				<label
					htmlFor="disabled-1"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Option 1
				</label>
			</div>
			<div className="flex items-center space-x-2">
				<RadioGroupItem value="option-2" id="disabled-2" />
				<label
					htmlFor="disabled-2"
					className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Option 2
				</label>
			</div>
		</RadioGroup>
	),
};

export const InCard: Story = {
	render: () => (
		<div className="w-[350px] rounded-lg border p-4">
			<h4 className="mb-4 font-medium text-sm leading-none">Notifications</h4>
			<RadioGroup defaultValue="all" className="grid gap-4">
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="all" id="all" />
					<label
						htmlFor="all"
						className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						All notifications
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="mentions" id="mentions" />
					<label
						htmlFor="mentions"
						className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						Mentions only
					</label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem value="none" id="none" />
					<label
						htmlFor="none"
						className="font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
					>
						None
					</label>
				</div>
			</RadioGroup>
		</div>
	),
};

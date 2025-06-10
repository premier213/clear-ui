import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from ".";

const meta: Meta<typeof Tabs> = {
	title: "UI/Tabs",
	component: Tabs,
	tags: ["autodocs"],
	argTypes: {
		defaultValue: {
			control: "text",
			description:
				"The value of the tab that should be active when initially rendered",
		},
		value: {
			control: "text",
			description: "The controlled value of the tab to activate",
		},
		onValueChange: {
			action: "onValueChange",
			description: "Callback fired when the value changes",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	render: (args) => (
		<Tabs {...args}>
			<TabsList>
				<TabsTrigger value="account">Account</TabsTrigger>
				<TabsTrigger value="password">Password</TabsTrigger>
				<TabsTrigger value="settings">Settings</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<div className="p-4">Account settings content goes here.</div>
			</TabsContent>
			<TabsContent value="password">
				<div className="p-4">Password settings content goes here.</div>
			</TabsContent>
			<TabsContent value="settings">
				<div className="p-4">General settings content goes here.</div>
			</TabsContent>
		</Tabs>
	),
	args: {
		defaultValue: "account",
	},
};

export const WithIcons: Story = {
	render: (args) => (
		<Tabs {...args}>
			<TabsList>
				<TabsTrigger value="account">
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
						aria-hidden="true"
					>
						<title>User Account</title>
						<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
						<circle cx="12" cy="7" r="4" />
					</svg>
					Account
				</TabsTrigger>
				<TabsTrigger value="password">
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
						aria-hidden="true"
					>
						<title>Password Lock</title>
						<rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
						<path d="M7 11V7a5 5 0 0 1 10 0v4" />
					</svg>
					Password
				</TabsTrigger>
			</TabsList>
			<TabsContent value="account">
				<div className="p-4">Account settings content goes here.</div>
			</TabsContent>
			<TabsContent value="password">
				<div className="p-4">Password settings content goes here.</div>
			</TabsContent>
		</Tabs>
	),
	args: {
		defaultValue: "account",
	},
};

export const Disabled: Story = {
	render: (args) => (
		<Tabs {...args}>
			<TabsList>
				<TabsTrigger value="active">Active</TabsTrigger>
				<TabsTrigger value="disabled" disabled>
					Disabled
				</TabsTrigger>
			</TabsList>
			<TabsContent value="active">
				<div className="p-4">This tab is active and enabled.</div>
			</TabsContent>
			<TabsContent value="disabled">
				<div className="p-4">
					This content won't be visible because the tab is disabled.
				</div>
			</TabsContent>
		</Tabs>
	),
	args: {
		defaultValue: "active",
	},
};

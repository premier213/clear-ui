import type { Meta, StoryObj } from "@storybook/react";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from ".";

const meta: Meta<typeof Alert> = {
	title: "UI/Alert",
	component: Alert,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
	render: () => (
		<Alert>
			<AlertTitle>Heads up!</AlertTitle>
			<AlertDescription>
				You can add components and dependencies to your app using the cli.
			</AlertDescription>
		</Alert>
	),
};

export const WithIcon: Story = {
	render: () => (
		<Alert>
			<Info className="h-4 w-4" />
			<AlertTitle>Information</AlertTitle>
			<AlertDescription>
				This is an informational alert with an icon. You can use any Lucide
				icon.
			</AlertDescription>
		</Alert>
	),
};

export const Destructive: Story = {
	render: () => (
		<Alert variant="destructive">
			<AlertCircle className="h-4 w-4" />
			<AlertTitle>Error</AlertTitle>
			<AlertDescription>
				Your session has expired. Please log in again to continue.
			</AlertDescription>
		</Alert>
	),
};

export const ComplexContent: Story = {
	render: () => (
		<Alert>
			<Info className="h-4 w-4" />
			<AlertTitle>System Update</AlertTitle>
			<AlertDescription>
				<p>
					A new version is available. Please update your system to get the
					latest features and security patches.
				</p>
				<p className="mt-2">Estimated time: 5 minutes</p>
			</AlertDescription>
		</Alert>
	),
};

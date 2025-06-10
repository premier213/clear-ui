import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./index";

const meta: Meta<typeof Card> = {
	title: "UI/Card",
	component: Card,
	tags: ["autodocs"],
	argTypes: {
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the card",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	render: (args) => (
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This is the main content of the card.</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline">Cancel</Button>
				<Button>Submit</Button>
			</CardFooter>
		</Card>
	),
};

export const WithAction: Story = {
	render: (args) => (
		<Card {...args}>
			<CardHeader>
				<CardTitle>Card with Action</CardTitle>
				<CardDescription>
					This card has an action button in the header
				</CardDescription>
				<CardAction>
					<Button variant="ghost" size="sm">
						Action
					</Button>
				</CardAction>
			</CardHeader>
			<CardContent>
				<p>
					This card demonstrates the use of CardAction component in the header.
				</p>
			</CardContent>
		</Card>
	),
};

export const Bordered: Story = {
	render: (args) => (
		<Card {...args} className="border-2">
			<CardHeader className="border-b">
				<CardTitle>Bordered Card</CardTitle>
				<CardDescription>This card has a thicker border</CardDescription>
			</CardHeader>
			<CardContent>
				<p>This card demonstrates the use of borders and border utilities.</p>
			</CardContent>
			<CardFooter className="border-t">
				<Button>Learn More</Button>
			</CardFooter>
		</Card>
	),
};

export const Compact: Story = {
	render: (args) => (
		<Card {...args} className="py-4">
			<CardHeader className="px-4">
				<CardTitle>Compact Card</CardTitle>
				<CardDescription>A more compact version of the card</CardDescription>
			</CardHeader>
			<CardContent className="px-4">
				<p>This card has reduced padding for a more compact look.</p>
			</CardContent>
		</Card>
	),
};

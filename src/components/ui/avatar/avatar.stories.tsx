import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from ".";

const meta: Meta<typeof Avatar> = {
	title: "UI/Avatar",
	component: Avatar,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const WithFallback: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="/broken-image.jpg" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const CustomSize: Story = {
	render: () => (
		<Avatar className="size-16">
			<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	),
};

export const CustomFallback: Story = {
	render: () => (
		<Avatar>
			<AvatarImage src="/broken-image.jpg" alt="@shadcn" />
			<AvatarFallback className="bg-primary text-primary-foreground">
				JD
			</AvatarFallback>
		</Avatar>
	),
};

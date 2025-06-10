import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
	title: "UI/Button",
	component: Button,
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
			description: "The visual style of the button",
		},
		size: {
			control: "select",
			options: ["default", "sm", "lg", "icon"],
			description: "The size of the button",
		},
		block: {
			control: "boolean",
			description:
				"Whether the button should take up the full width of its container",
		},
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled",
		},
		className: {
			control: "text",
			description: "Additional CSS classes to apply to the button",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "Button",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "Secondary",
	},
};

export const Destructive: Story = {
	args: {
		variant: "destructive",
		children: "Destructive",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "Outline",
	},
};

export const Ghost: Story = {
	args: {
		variant: "ghost",
		children: "Ghost",
	},
};

export const Link: Story = {
	args: {
		variant: "link",
		children: "Link",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "Small",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "Large",
	},
};

export const Icon: Story = {
	args: {
		size: "icon",
		children: "🔍",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled",
	},
};

export const WithIcon: Story = {
	render: (args) => (
		<Button {...args}>
			<span className="mr-2">🔍</span>
			Search
		</Button>
	),
};

export const Loading: Story = {
	args: {
		disabled: true,
		children: "Loading...",
	},
};

export const Block: Story = {
	args: {
		block: true,
		children: "Block Button",
	},
};

export const BlockSecondary: Story = {
	args: {
		block: true,
		variant: "secondary",
		children: "Block Secondary Button",
	},
};

export const BlockWithIcon: Story = {
	render: (args) => (
		<Button {...args} block>
			<span className="mr-2">🔍</span>
			Full Width Search Button
		</Button>
	),
};

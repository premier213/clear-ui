import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Toaster } from ".";

const meta: Meta<typeof Toaster> = {
	title: "UI/Toaster",
	component: Toaster,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
	render: () => {
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						toast("Event has been created", {
							description: "Sunday, December 03, 2023 at 9:00 AM",
						});
					}}
				>
					Show Toast
				</button>
				<Toaster />
			</div>
		);
	},
};

export const WithDifferentTypes: Story = {
	render: () => {
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						toast.success("Successfully saved!");
						toast.error("Something went wrong");
						toast.warning("Please review your changes");
						toast.info("New update available");
					}}
				>
					Show Different Toasts
				</button>
				<Toaster />
			</div>
		);
	},
};

export const WithCustomDuration: Story = {
	render: () => {
		return (
			<div>
				<button
					type="button"
					onClick={() => {
						toast("This toast will stay longer", {
							duration: 5000, // 5 seconds
						});
					}}
				>
					Show Long Toast
				</button>
				<Toaster />
			</div>
		);
	},
};

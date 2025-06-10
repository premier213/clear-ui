import { Button } from "@/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from ".";

const meta: Meta<typeof Sheet> = {
	title: "UI/Sheet",
	component: Sheet,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Sheet>;

export const Right: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Right Sheet</Button>
			</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you're done.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="name" className="text-right">
							Name
						</label>
						<input
							id="name"
							defaultValue="Pedro Duarte"
							className="col-span-3"
						/>
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<label htmlFor="username" className="text-right">
							Username
						</label>
						<input
							id="username"
							defaultValue="@peduarte"
							className="col-span-3"
						/>
					</div>
				</div>
				<SheetFooter>
					<Button type="submit">Save changes</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	),
};

export const Left: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Left Sheet</Button>
			</SheetTrigger>
			<SheetContent side="left">
				<SheetHeader>
					<SheetTitle>Navigation</SheetTitle>
					<SheetDescription>
						Browse through the different sections of the application.
					</SheetDescription>
				</SheetHeader>
				<nav className="grid gap-4 py-4">
					<a href="/dashboard" className="font-medium text-sm">
						Dashboard
					</a>
					<a href="/settings" className="font-medium text-sm">
						Settings
					</a>
					<a href="/profile" className="font-medium text-sm">
						Profile
					</a>
				</nav>
			</SheetContent>
		</Sheet>
	),
};

export const Top: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Top Sheet</Button>
			</SheetTrigger>
			<SheetContent side="top">
				<SheetHeader>
					<SheetTitle>Notifications</SheetTitle>
					<SheetDescription>
						View your recent notifications and alerts.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="flex items-center gap-4">
						<div className="h-2 w-2 rounded-full bg-blue-500" />
						<p className="text-sm">New message from John</p>
					</div>
					<div className="flex items-center gap-4">
						<div className="h-2 w-2 rounded-full bg-green-500" />
						<p className="text-sm">Task completed: Update documentation</p>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	),
};

export const Bottom: Story = {
	render: () => (
		<Sheet>
			<SheetTrigger asChild>
				<Button variant="outline">Open Bottom Sheet</Button>
			</SheetTrigger>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>Share</SheetTitle>
					<SheetDescription>
						Share this content with your friends and colleagues.
					</SheetDescription>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="flex items-center gap-4">
						<Button variant="outline" className="w-full">
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
								<title>Facebook Icon</title>
								<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
							</svg>
							Facebook
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<Button variant="outline" className="w-full">
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
								<title>Twitter Icon</title>
								<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
							</svg>
							Twitter
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	),
};

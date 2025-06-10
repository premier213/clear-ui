import type { Meta, StoryObj } from "@storybook/react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from ".";
import { Button } from "../button";

const meta: Meta<typeof Drawer> = {
	title: "UI/Drawer",
	component: Drawer,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Drawer</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Edit Profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you're done.
					</DrawerDescription>
				</DrawerHeader>
				<div className="p-4">
					<p>Drawer content goes here.</p>
				</div>
				<DrawerFooter>
					<Button>Save changes</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};

export const WithForm: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Settings</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Settings</DrawerTitle>
					<DrawerDescription>
						Configure your application settings.
					</DrawerDescription>
				</DrawerHeader>
				<div className="space-y-4 p-4">
					<div className="space-y-2">
						<label htmlFor="theme" className="font-medium text-sm">
							Theme
						</label>
						<select id="theme" className="w-full rounded-md border p-2">
							<option>Light</option>
							<option>Dark</option>
							<option>System</option>
						</select>
					</div>
					<div className="space-y-2">
						<label htmlFor="language" className="font-medium text-sm">
							Language
						</label>
						<select id="language" className="w-full rounded-md border p-2">
							<option>English</option>
							<option>Spanish</option>
							<option>French</option>
						</select>
					</div>
				</div>
				<DrawerFooter>
					<Button>Save changes</Button>
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};

export const WithList: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">Open Menu</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Navigation</DrawerTitle>
					<DrawerDescription>Browse through the application.</DrawerDescription>
				</DrawerHeader>
				<div className="p-4">
					<nav className="space-y-2">
						<a
							href="/dashboard"
							className="block rounded-md px-4 py-2 text-sm hover:bg-accent"
						>
							Dashboard
						</a>
						<a
							href="/profile"
							className="block rounded-md px-4 py-2 text-sm hover:bg-accent"
						>
							Profile
						</a>
						<a
							href="/settings"
							className="block rounded-md px-4 py-2 text-sm hover:bg-accent"
						>
							Settings
						</a>
						<a
							href="/help"
							className="block rounded-md px-4 py-2 text-sm hover:bg-accent"
						>
							Help
						</a>
					</nav>
				</div>
				<DrawerFooter>
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};

export const WithNotifications: Story = {
	render: () => (
		<Drawer>
			<DrawerTrigger asChild>
				<Button variant="outline">View Notifications</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Notifications</DrawerTitle>
					<DrawerDescription>
						You have 3 unread notifications.
					</DrawerDescription>
				</DrawerHeader>
				<div className="space-y-4 p-4">
					<div className="rounded-lg border p-4">
						<h4 className="font-medium">New message</h4>
						<p className="text-muted-foreground text-sm">
							You have received a new message from John.
						</p>
						<p className="mt-2 text-muted-foreground text-xs">2 hours ago</p>
					</div>
					<div className="rounded-lg border p-4">
						<h4 className="font-medium">Task completed</h4>
						<p className="text-muted-foreground text-sm">
							Your task "Update documentation" has been completed.
						</p>
						<p className="mt-2 text-muted-foreground text-xs">5 hours ago</p>
					</div>
					<div className="rounded-lg border p-4">
						<h4 className="font-medium">System update</h4>
						<p className="text-muted-foreground text-sm">
							A new system update is available.
						</p>
						<p className="mt-2 text-muted-foreground text-xs">1 day ago</p>
					</div>
				</div>
				<DrawerFooter>
					<Button>Mark all as read</Button>
					<DrawerClose asChild>
						<Button variant="outline">Close</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	),
};

import type { Meta, StoryObj } from "@storybook/react";
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from ".";

const meta: Meta<typeof DropdownMenu> = {
	title: "UI/DropdownMenu",
	component: DropdownMenu,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					Profile
					<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Billing
					<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Settings
					<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
				</DropdownMenuItem>
				<DropdownMenuItem>
					Keyboard shortcuts
					<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithSubMenu: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Back</DropdownMenuItem>
				<DropdownMenuItem disabled>Forward</DropdownMenuItem>
				<DropdownMenuItem>Reload</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuSub>
					<DropdownMenuSubTrigger>More Tools</DropdownMenuSubTrigger>
					<DropdownMenuSubContent>
						<DropdownMenuItem>Save Page As...</DropdownMenuItem>
						<DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
						<DropdownMenuItem>Name Window...</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Developer Tools</DropdownMenuItem>
					</DropdownMenuSubContent>
				</DropdownMenuSub>
				<DropdownMenuSeparator />
				<DropdownMenuCheckboxItem checked>
					Show Bookmarks Bar
				</DropdownMenuCheckboxItem>
				<DropdownMenuCheckboxItem>Show Full URLs</DropdownMenuCheckboxItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithRadioGroup: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Appearance</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value="system">
					<DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value="system">System</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithGroups: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuGroup>
					<DropdownMenuLabel>File</DropdownMenuLabel>
					<DropdownMenuItem>New File</DropdownMenuItem>
					<DropdownMenuItem>New Window</DropdownMenuItem>
					<DropdownMenuItem>Open...</DropdownMenuItem>
					<DropdownMenuItem>Save</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuLabel>Edit</DropdownMenuLabel>
					<DropdownMenuItem>Undo</DropdownMenuItem>
					<DropdownMenuItem>Redo</DropdownMenuItem>
					<DropdownMenuItem>Cut</DropdownMenuItem>
					<DropdownMenuItem>Copy</DropdownMenuItem>
					<DropdownMenuItem>Paste</DropdownMenuItem>
				</DropdownMenuGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

export const WithDestructiveItems: Story = {
	render: () => (
		<DropdownMenu>
			<DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>Edit</DropdownMenuItem>
				<DropdownMenuItem>Share</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	),
};

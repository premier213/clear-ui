import type { Meta, StoryObj } from "@storybook/react";
import { HomeIcon, SettingsIcon, UsersIcon } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarHeader,
	SidebarInput,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuBadge,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubButton,
	SidebarMenuSubItem,
	SidebarProvider,
	SidebarSeparator,
	SidebarTrigger,
} from "./index";

const meta = {
	title: "UI/Sidebar",
	component: Sidebar,
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => (
			<SidebarProvider>
				<div className="flex h-screen">
					<Story />
					<main className="flex-1 p-4">
						<h1 className="font-bold text-2xl">Main Content</h1>
						<p>This is the main content area.</p>
					</main>
				</div>
			</SidebarProvider>
		),
	],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultContent = () => (
	<>
		<SidebarHeader>
			<SidebarInput placeholder="Search..." />
		</SidebarHeader>
		<SidebarContent>
			<SidebarGroup>
				<SidebarGroupLabel>Navigation</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton isActive>
								<HomeIcon />
								<span>Home</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<UsersIcon />
								<span>Users</span>
								<SidebarMenuBadge>3</SidebarMenuBadge>
							</SidebarMenuButton>
							<SidebarMenuAction>+</SidebarMenuAction>
						</SidebarMenuItem>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<SettingsIcon />
								<span>Settings</span>
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
			<SidebarSeparator />
			<SidebarGroup>
				<SidebarGroupLabel>Projects</SidebarGroupLabel>
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem>
							<SidebarMenuButton>
								<span>Project A</span>
							</SidebarMenuButton>
							<SidebarMenuSub>
								<SidebarMenuSubItem>
									<SidebarMenuSubButton>Overview</SidebarMenuSubButton>
								</SidebarMenuSubItem>
								<SidebarMenuSubItem>
									<SidebarMenuSubButton>Tasks</SidebarMenuSubButton>
								</SidebarMenuSubItem>
							</SidebarMenuSub>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
			</SidebarGroup>
		</SidebarContent>
		<SidebarFooter>
			<SidebarTrigger />
		</SidebarFooter>
	</>
);

export const Default: Story = {
	args: {
		children: <DefaultContent />,
	},
};

export const Collapsed: Story = {
	args: {
		children: <DefaultContent />,
	},
	parameters: {
		docs: {
			description: {
				story: "Sidebar in collapsed state",
			},
		},
	},
	decorators: [
		(Story) => (
			<SidebarProvider defaultOpen={false}>
				<div className="flex h-screen">
					<Story />
					<main className="flex-1 p-4">
						<h1 className="font-bold text-2xl">Main Content</h1>
						<p>This is the main content area.</p>
					</main>
				</div>
			</SidebarProvider>
		),
	],
};

export const Floating: Story = {
	args: {
		variant: "floating",
		children: <DefaultContent />,
	},
};

export const Inset: Story = {
	args: {
		variant: "inset",
		children: <DefaultContent />,
	},
};

export const RightSide: Story = {
	args: {
		side: "right",
		children: <DefaultContent />,
	},
};

export const IconCollapsible: Story = {
	args: {
		collapsible: "icon",
		children: <DefaultContent />,
	},
};

export const OffcanvasCollapsible: Story = {
	args: {
		collapsible: "offcanvas",
		children: <DefaultContent />,
	},
};

export const NonCollapsible: Story = {
	args: {
		collapsible: "none",
		children: <DefaultContent />,
	},
};

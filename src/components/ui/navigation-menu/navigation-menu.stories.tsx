import type { Meta, StoryObj } from "@storybook/react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from ".";

const meta: Meta<typeof NavigationMenu> = {
	title: "UI/NavigationMenu",
	component: NavigationMenu,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof NavigationMenu>;

export const Default: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/"
									>
										<div className="mt-4 mb-2 font-medium text-lg">
											shadcn/ui
										</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Beautifully designed components built with Radix UI and
											Tailwind CSS.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/docs"
									>
										<div className="font-medium text-sm leading-none">
											Documentation
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Learn how to use shadcn/ui components in your project.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/components"
									>
										<div className="font-medium text-sm leading-none">
											Components
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Explore the collection of beautiful components.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/examples"
									>
										<div className="font-medium text-sm leading-none">
											Examples
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Check out some examples of shadcn/ui in action.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Components</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/components/accordion"
									>
										<div className="font-medium text-sm leading-none">
											Accordion
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											A vertically stacked set of interactive headings that each
											reveal a section of content.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/components/alert-dialog"
									>
										<div className="font-medium text-sm leading-none">
											Alert Dialog
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											A modal dialog that interrupts the user with important
											content and expects a response.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Resources</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
							<li className="row-span-3">
								<NavigationMenuLink asChild>
									<a
										className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
										href="/resources"
									>
										<div className="mt-4 mb-2 font-medium text-lg">
											Resources
										</div>
										<p className="text-muted-foreground text-sm leading-tight">
											Learn more about shadcn/ui and how to use it in your
											project.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/blog"
									>
										<div className="font-medium text-sm leading-none">Blog</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Read the latest news and updates about shadcn/ui.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/community"
									>
										<div className="font-medium text-sm leading-none">
											Community
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Join our community and get help from other developers.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

export const Simple: Story = {
	render: () => (
		<NavigationMenu>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Products</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/products/analytics"
									>
										<div className="font-medium text-sm leading-none">
											Analytics
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Get insights into your business performance.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/products/marketing"
									>
										<div className="font-medium text-sm leading-none">
											Marketing
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Grow your business with our marketing tools.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/solutions/enterprise"
									>
										<div className="font-medium text-sm leading-none">
											Enterprise
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Solutions for large organizations.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/solutions/small-business"
									>
										<div className="font-medium text-sm leading-none">
											Small Business
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Solutions for small businesses.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

export const WithoutViewport: Story = {
	render: () => (
		<NavigationMenu viewport={false}>
			<NavigationMenuList>
				<NavigationMenuItem>
					<NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<li>
								<NavigationMenuLink asChild>
									<a
										className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
										href="/docs"
									>
										<div className="font-medium text-sm leading-none">
											Documentation
										</div>
										<p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
											Learn how to use our components in your project.
										</p>
									</a>
								</NavigationMenuLink>
							</li>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	),
};

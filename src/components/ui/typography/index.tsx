import { cn } from "@/lib/utils";

export function TypographyH1({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-balance text-center font-extrabold text-4xl tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

export function TypographyH2({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 font-semibold text-3xl tracking-tight first:mt-0",
				className,
			)}
			{...props}
		/>
	);
}

export function TypographyH3({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h3
			className={cn(
				"scroll-m-20 font-semibold text-2xl tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

export function TypographyH4({
	className,
	...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
	return (
		<h4
			className={cn(
				"scroll-m-20 font-semibold text-xl tracking-tight",
				className,
			)}
			{...props}
		/>
	);
}

export function TypographyP({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p
			className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
			{...props}
		/>
	);
}

export function TypographyBlockquote({
	className,
	...props
}: React.HTMLAttributes<HTMLQuoteElement>) {
	return (
		<blockquote
			className={cn("mt-6 border-l-2 pl-6 italic", className)}
			{...props}
		/>
	);
}

export function TypographyTable({
	className,
	...props
}: React.HTMLAttributes<HTMLTableElement>) {
	return (
		<div className="my-6 w-full overflow-y-auto">
			<table className={cn("w-full", className)} {...props} />
		</div>
	);
}

export function TypographyList({
	className,
	...props
}: React.HTMLAttributes<HTMLUListElement>) {
	return (
		<ul
			className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}
			{...props}
		/>
	);
}

export function TypographyInlineCode({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<code
			className={cn(
				"relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
				className,
			)}
			{...props}
		/>
	);
}

export function TypographyLead({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn("text-muted-foreground text-xl", className)} {...props} />
	);
}

export function TypographyLarge({
	className,
	...props
}: React.HTMLAttributes<HTMLDivElement>) {
	return <div className={cn("font-semibold text-lg", className)} {...props} />;
}

export function TypographySmall({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) {
	return (
		<small
			className={cn("font-medium text-sm leading-none", className)}
			{...props}
		/>
	);
}

export function TypographyMuted({
	className,
	...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
	return (
		<p className={cn("text-muted-foreground text-sm", className)} {...props} />
	);
}

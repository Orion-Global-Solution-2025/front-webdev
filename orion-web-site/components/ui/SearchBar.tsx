import React from 'react';

const SearchIcon = (props) => (
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
		className="h-5 w-5 text-gray-400"
		{...props}
	>
		<circle cx="11" cy="11" r="8"></circle>
		<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
	</svg>
);


const inputBaseClasses = `
	flex h-10 w-full rounded-md border border-input bg-background py-2 text-base 
	ring-offset-background file:border-0 file:bg-transparent 
	file:text-sm file:font-medium file:text-foreground 
	placeholder:text-muted-foreground 
	focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring 
	focus-visible:ring-offset-2 disabled:cursor-not-allowed 
	disabled:opacity-50 md:text-sm
`;

const SearchBar = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
	({ className, type, ...props }, ref) => {
		return (
			<div className="relative w-full">
				<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
					<SearchIcon />
				</div>

				<input
					type={type || "search"}
					className={`
						${inputBaseClasses}
						pl-10 pr-3
						${className || ''}
					`.replace(/\s+/g, ' ').trim()}
					ref={ref}
					{...props}
				/>
			</div>
		);
	},
);
SearchBar.displayName = "SearchBar";

export { SearchBar };


export type ReactPropsWithChildren<P> = P & {
	children: React.ReactNode;
};

export const assertDefined = <T>(value: T) => {
	if (value == null) {
		throw new Error(`Error: "${value}" is not defined`);
	}

	return value;
};

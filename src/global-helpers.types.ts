// type NonNullable<T> = T extends null | undefined ? never : T;

type ReactNode = Exclude<React.ReactNode, React.ReactFragment>;

export type WithChildren<TProps = NonNullable<unknown>> = TProps & {
	children: React.ReactNode;
};

export type WithChildrenOptional<TProps> = TProps & {
	children?: ReactNode;
};

export const assertDefined = <T>(value: T) => {
	if (value == null) {
		throw new Error(`"Value: ${value}" is not defined`);
	}

	return value;
};

export const assertRef = <T>(value: T) => value as NonNullable<T>;

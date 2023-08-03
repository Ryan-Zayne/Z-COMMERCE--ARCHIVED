type BaseProps<V> = {
	each: V[];
};

type ConditionalProps<V> =
	| {
			children?: "Hey, Sorry but you've already used the render prop so the children prop is redundant";
			render: (item: V, index: number) => React.JSX.Element;
	  }
	| {
			children: (item: V, index: number) => React.JSX.Element;
			render?: "Hey, Sorry but you've already used the children prop so the render prop is redundant";
	  };

type ForProps<T> = BaseProps<T> & ConditionalProps<T>;

function For<U>({ each, render, children }: ForProps<U>) {
	const mappedElements = each.map((item, index) => {
		if (typeof render === 'function') {
			return render(item, index);
		}

		return children(item, index);
	});

	return mappedElements;
}

export default For;

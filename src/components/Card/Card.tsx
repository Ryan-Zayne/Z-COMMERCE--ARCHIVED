type CardProps = {
	as?: React.ElementType;
	children: React.ReactNode;
	className?: string;
	aosAnimation?: string;
	aosDuration?: string;
	aosEasing?: string;
};

type CardHeaderProps = Pick<CardProps, 'as' | 'children' | 'className'>;

type OtherCardProps = Pick<CardProps, 'children' | 'className'>;

function Card({
	as: Element = 'article',
	children,
	className = '',
	aosAnimation = '',
	aosDuration = '',
	aosEasing = '',
}: CardProps) {
	return (
		<Element
			data-aos={aosAnimation}
			data-aos-duration={aosDuration}
			data-aos-anchor-easing={aosEasing}
			className={className}
		>
			{children}
		</Element>
	);
}

Card.Header = function CardHeader({ as: Element = 'header', children, className = '' }: CardHeaderProps) {
	return <Element className={className}>{children}</Element>;
};

Card.Body = function CardBody({ children, className = '' }: OtherCardProps) {
	return <div className={className}>{children}</div>;
};

Card.Footer = function CardFooter({ children, className = '' }: OtherCardProps) {
	return <div className={className}>{children}</div>;
};

export default Card;

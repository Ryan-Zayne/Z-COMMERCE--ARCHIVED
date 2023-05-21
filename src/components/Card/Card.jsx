const Card = ({ as: Element = 'article', children, className }) => {
	return (
		<Element id="Card" className={className}>
			{children}
		</Element>
	);
};

const CardHeader = ({ as: Element = 'header', children, className = '' }) => {
	return (
		<Element id="Card_Header" className={className}>
			{children}
		</Element>
	);
};

const CardBody = ({ children, className = '' }) => (
	<div id="Card_Body" className={className}>
		{children}
	</div>
);

const CardFooter = ({ children, className = '' }) => (
	<div id="Card_Footer" className={className}>
		{children}
	</div>
);

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;
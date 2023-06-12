import { createPortal } from 'react-dom';

type PortalProps = {
	children: React.ReactNode;
	destination?: HTMLElement;
};

const Portal = ({ children, destination = document.body }: PortalProps) => {
	return createPortal(children, destination);
};
export default Portal;

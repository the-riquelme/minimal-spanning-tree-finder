import { ButtonContainer } from './styles';

export const Button = ({
	variantType='box',
	title,
	onClick
}) => {
	return (
		<ButtonContainer
			title={title}
			variantType={variantType}
			onClick={onClick}
		>
			{title}
		</ButtonContainer>
	);
};

import React from 'react';
import { SearchBarContainer, SearchBarHeading } from './Styled';
import Heading from '../../atoms/Heading';
import TextBox from '../../atoms/TextBox';

const SearchBar = ({ value, onChange, placeholder }: { value: string, onChange: (event: React.ChangeEvent<HTMLInputElement>) => void, placeholder: string }) => {
	return (
		<SearchBarContainer>
			<SearchBarHeading>
				<Heading> Search </Heading>
			</SearchBarHeading>
			<TextBox placeholder={placeholder} value={value} onChange={onChange}/>
		</SearchBarContainer>
	);
}

export default SearchBar;

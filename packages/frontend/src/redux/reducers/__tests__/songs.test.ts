import reducer from '../songs';

const initialState = {
	searchText: '',
	songs: [],
	error: null
};

describe('Reducers', () => {
	describe('Songs', () => {
		it('returns the initial state', () => {
			expect(reducer(undefined, {})).toEqual(initialState);
		});
	});
});

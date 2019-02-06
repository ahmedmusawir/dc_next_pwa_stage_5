/**
 *
 * <Box />
 *
 * A Simple div Container with Props
 * This is to deliver minimum heigh to a group of unevent content blocks
 */
import styled from 'styled-components';

export const Box = styled.div`
	min-height: ${props => props.minHeight};
`;

Box.defaultProps = {
	theme: {},
	minHeight: '2rem',
};

export default Box;

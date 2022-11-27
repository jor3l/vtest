import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

interface Props {
	setTitle: (title: string) => void;
}

export default function Services(props: Props) {
	const { setTitle } = props;
	useEffect(() => {
		setTitle('Services');
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<>
			<Typography>
				There are no active services at this time. For more information, contact your administrator.
			</Typography>
		</>
	);
}

import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';

interface Props {
	setTitle: (title: string) => void;
}

export default function Services(props: Props) {
	const { setTitle } = props;
	useEffect(() => {
		setTitle('Services');
	}, []);

	return (
		<>
			<Typography>No services active yet. Contact your administrator.</Typography>
		</>
	);
}

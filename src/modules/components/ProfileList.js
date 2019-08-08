import React from 'react';
import {Grid} from "@material-ui/core";

const ProfileList = ({searchResult}) => {
	return(
		<Grid>
			{searchResult.map(result =>
				<p>{result}</p>
			)}
		</Grid>
	);
};

export default ProfileList;

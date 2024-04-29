import { Box, Typography, styled } from '@mui/material';
import frontpage from '../Images/fpage.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '50%',
    height: '50%'
});


const CodeforUserData = () => {
    return(
        <Header>
            <Typography variant="h4" align="center" style={{ fontWeight: 'bold',  fontStyle: 'italic' }}>Welcome To My Application</Typography>
            <div style={{ width: '93vw', height: '60vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={frontpage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Not Found" />
        </div>
        </Header>
    )
}

export default CodeforUserData;
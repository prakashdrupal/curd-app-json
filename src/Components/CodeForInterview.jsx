import { Box, makeStyles, Typography } from '@material-ui/core';
import Youtube from '../Assets/Images/Youtube.jpeg';
import InstaTele from '../Assets/Images/InstaTele.jpeg'

const useStyle = makeStyles({
    image: {
        width: '50%',
        height: '50%'
    },
    component: {
        margin: 50
    }
})
const CodeForInterview = () => {
    const classes = useStyle();
    return (
        <Box className={classes.component}>
            <Typography variant="h4" style={{marginBottom: 50}}>Code for Interview</Typography>
            <Box style={{display: 'flex'}}>
                <img className={classes.image} src={Youtube} />
                <img className={classes.image} src={InstaTele} />
            </Box>
        </Box>
    )
    return (
        <p> Hi From Home Page </p>
    )

}

export default CodeForInterview;
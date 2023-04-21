import React from 'react'
import { Box, Grid, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography, Button, IconButton } from '@material-ui/core'
import {Close as CloseIcon} from '@material-ui/icons'
import { format } from 'date-fns'


const useStyles = makeStyles((theme)=> ({
  info: {
    '& > *':{
        margin: '4px',
    }, 
  },
  skillChip: {
    margin: theme.spacing(0.5),
    padding: theme.spacing(0.75),
    fontSize: "14.5px",
    borderRadius: "5px",
    transitions: ".3s",
    fontWeight: 600,
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.secondary.main,
    cursor: "pointer",

    "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: "#fff",
    }
},
}))

export default props => {
    const classes = useStyles();
     return(
        <Dialog open={!!Object.keys(props.job).length} fullWidth>
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    {props.job.title} @ {props.job.companyName}
                    <IconButton onClick={props.closeModal}>
                        <CloseIcon />
                    </IconButton>
                </Box>
            </DialogTitle>
          <DialogContent>
            <Box>
                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Posted On: </Typography>
                    <Typography variant='body2'>{props.job.postedOn && format(props.job.postedOn, 'dd/MM/yyyy HH:MM')}</Typography>
                </Box>

                
                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Job Type: </Typography>
                    <Typography variant='caption'>{props.job.type}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Job Location: </Typography>
                    <Typography variant='caption'>{props.job.location}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Job Description: </Typography>
                    <Typography variant='caption'>{props.job.description}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Company Name: </Typography>
                    <Typography variant='caption'>{props.job.companyName}</Typography>
                </Box>

                <Box className={classes.info} display="flex">
                    <Typography variant='caption'>Company Url: </Typography>
                    <Typography variant='caption'>{props.job.companyUrl}</Typography>
                </Box>

                <Box ml={.5}>
                    <Typography variant='caption'>Skills:  </Typography>
                    <Grid container alignItems='center'>
                        {props.job.skills && 
                            props.job.skills.map((skill) => (
                            <Grid item key={skill} className={classes.skillChip}>
                                {skill}
                                </Grid>
                        ))}

                    </Grid>
                </Box>
            </Box>

          </DialogContent>
          <DialogActions>
           
           <Button variant='outlined' component='a' href={props.job.link} target="blank">Apply</Button>

          </DialogActions>
        </Dialog>

    )
}

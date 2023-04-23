import React, {useState, useEffect} from "react";
import { Box, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import theme from "../theme/theme"
import { firestore, app } from "../firebase/config";
import Header from "./Header";
import JobCard from "./Job/JobCard";
import NewJobModal from "./Job/NewJobModal";




export default function Employeer() {

  
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModal, setNewJobModal] = useState(false)
  const fetchjobs = async() => {
    setLoading(true)
    const req = await firestore
    .collection('jobs')
    .orderBy('postedOn', 'desc')
    .get();
   const tempJob = req.docs.map((job) =>({...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }))
   setJobs(tempJob);
   setLoading(false);
  }


  const postJob = async(jobDetails)=>{
    await firestore.collection('jobs').add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    
    });

    fetchjobs();

  }

  useEffect(()=>{
    fetchjobs();
  }, [])

  return (
   <>
    <ThemeProvider theme={theme}>
   <Header openNewJobModal={() => setNewJobModal(true)}/>
   <NewJobModal closeModal={()=>setNewJobModal(false)} newJobModal={newJobModal} postJob ={postJob}/>
   <Box mb={3}>
   <Grid container justify="center">
    <Grid item xs={10}>

      { loading ? (
        <Box display="flex" justifyContent="center"> 
        <CircularProgress /> 
        </Box> 
       )
      : (
        <>
         {jobs.map((job) => ( 
           <JobCard key={job.id} {...job} /> 
         ))}
       </> 
       )}
    </Grid>
   </Grid>
   </Box>
  </ThemeProvider>
   
   </>
  )
}

import React, {useState, useEffect} from "react";
import { Box, Button, CircularProgress, Grid, ThemeProvider } from "@material-ui/core";
import {Close as CloseIcon} from '@material-ui/icons'
import theme from "../theme/theme"
import { firestore } from "../firebase/config";

import JobCard from "./Job/JobCard";

import SearchBar from "./SearchBar";
import ViewJobModal from "./Job/ViewJobModal";



export default function Employeer() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customSearch, setCustomSearch] = useState(false);

  const [viewJob, setViewJob] = useState({});

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

  const fetchjobsCustom = async (jobSearch) =>{
    setLoading(true)
    setCustomSearch(true)
    const req = await firestore
    .collection('jobs')
    .orderBy('postedOn', 'desc')
    .where('location', '==', jobSearch.location)
    .where('type', '==', jobSearch.type)
    .get();
   const tempJob = req.docs.map((job) =>({...job.data(), id: job.id, postedOn: job.data().postedOn.toDate() }))
   setJobs(tempJob);
   setLoading(false);
  }



  useEffect(()=>{
    fetchjobs();
  }, [])

  return (
   <>
    <ThemeProvider theme={theme}>
    <ViewJobModal job={viewJob} closeModal ={() => setViewJob({})} />
   <Box mt={10} mb={3}>
   <Grid container justify="center">
    <Grid item xs={10}>
     <SearchBar fetchjobsCustom={fetchjobsCustom}/>
      
      { loading ? (
        <Box display="flex" justifyContent="center"> 
        <CircularProgress /> 
        </Box> 
       )
      : (
        <>
         {customSearch && (
           <Box>
            <Button>
            <CloseIcon size={20} />
            Custom Search
            </Button>
           </Box>
           )}

         {jobs.map((job) => ( 
           <JobCard open={()=>setViewJob(job)} key={job.id} {...job} /> 
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

import React from 'react';
import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import axios from 'axios';
import YouTubeIcon from "@material-ui/icons/YouTube";
import{Button} from "@material-ui/core"


// import  Content from "../../components/Content/Content"
import "./InfoModal.css"







const baseURL = 'https://image.tmdb.org/t/p/'
     const pictureSize = 'w300'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    width: "50%",
    height: "80%",
    backgroundColor: "black",
    border: "5px solid #adb5bd",
    borderRadius: "20px",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3),
  },
}));

export default function InfoModal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);
  
     // for the content component
  const [value, setVideo] = useState();       // to get the video working

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data)
    console.log(content);
  }
    //    console.log(content.poster_path)

  const getVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    )
    console.log(data)
    setVideo(data.results[2]?.key)
  }


  





  useEffect(() => {
    getData();
    getVideo();
    
    
  }, [])





  return (
    <>
      <div type="button" className="trendingimg" onClick={handleOpen}>
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="Info">
                 
                <img className="infoimg"src={`${baseURL}${pictureSize}${content.poster_path}`}/>
                <span className="vote">{content.vote_average}</span>
               
                

              <div className="about">
              <span className="tagline">{content.tagline}✨
                ({content.first_air_date || content.release_date})</span>
                <span className="title">{content.name|| content.title}</span>
                   
                <span className="dis">{content.overview}</span>
                              
                <span className="Info_crew"></span>
                                
                <Button
                variant="contained"
                starticon={<YouTubeIcon/>}
                // color="secondary"
                target="_blank"
                href={`https:/www.youtube.com/watch?v=${value}`}>View Trailor</Button>
              </div>
            </div>

          </div>
        </Fade>
      </Modal>
    </>
  );
}
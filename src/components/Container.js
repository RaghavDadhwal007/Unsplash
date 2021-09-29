import React from "react";
import { connect } from "react-redux";
import { fetchImages, deleteImage } from "../redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

function CakeContainer(props) {
  const imag = props.images.map((data) => (
    // <img src={data.urls.raw} alt="here"/>
    <Card key={data.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={data.alt_description}
        height="140"
        image={data.urls.raw}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.user.username}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small" onClick={()=>props.deleteImage(data.id)}>Delete</Button>
      </CardActions>
    </Card>
  ));

  const imageS = <ImageList sx={{ width: 500, height: 450 }}>
  <ImageListItem key="Subheader" cols={2}>
    <ListSubheader component="div">December</ListSubheader>
  </ImageListItem>
  {props.images.map((item) => (
    <ImageListItem key={item.id}>
      <img
        src={`${item.urls.raw}?w=248&fit=crop&auto=format`}
        srcSet={`${item.urls.raw}?w=248&fit=crop&auto=format&dpr=2 2x`}
        alt={item.alt_description}
        loading="lazy"
      />
      <ImageListItemBar
        title={item.description}
        subtitle={item.user.username}
        actionIcon={
          <IconButton
            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
            aria-label={`info about ${item.description}`}
          >
            {/* <InfoIcon /> */}
          </IconButton>
        }
      />
    </ImageListItem>
  ))}
</ImageList>

  return (
    <div>
      {/* {imag} */}
      {imageS}
      <button onClick={props.fetchImages}>Buy Cake</button>
      {props.loading ? <h1>Loading....</h1>: ""}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    images: state.image.images,
    loading: state.image.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: () => dispatch(fetchImages()),
    deleteImage: (id) => dispatch(deleteImage(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

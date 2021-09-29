import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchImages, deleteImage } from "../redux";
import './newContainer.css'
import Skeleton from '../skeletons/skeleton'
import { Link } from "react-router-dom";

function CakeContainer(props) {
    useEffect(()=>{
        props.fetchImages()
    },[])

  const imag = props.images.map((data) => (
    <div className="card" key={data?.id}>
      <img src={data.urls.raw} alt="Avatar" style={{ width: "50%" }} />
      <div className="container">
        <h3>{data?.alt_description}</h3>
        <p>{data?.user.username}</p>
        <Link to={{ pathname: `/update/${data?.id}`, state:data}}>
        <button size="small">Update</button>
        </Link>
        <button size="small" onClick={()=>props.deleteImage(data.id)}>Delete</button>
      </div>
    </div>
  ));

  return (
    <div className="main">
      {imag}
      {/* <button onClick={props.fetchImages}>Buy Cake</button> */}
      {/* <button onClick={()=> setTimeout(()=> props.fetchImages(), 3000)}>Buy Cake</button> */}
      {props.loading ? <Skeleton /> : ""}
      {/* {props.loading ? <h1>hello</h1> : ""} */}
    </div>
  );
}

const mapStateToProps = (state) => {
console.log(`props.location.param2`)
return {
    images: state.image.images,
    loading: state.image.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
console.log(`props.location.param2`)
return {
    fetchImages: () => dispatch(fetchImages()),
    deleteImage: (id) => dispatch(deleteImage(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);

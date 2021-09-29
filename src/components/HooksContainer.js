import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchImages, deleteImage } from "../redux";
import { Link } from "react-router-dom";
import Skeleton from "../skeletons/skeleton";

function HooksCakeContainer() {
  const images = useSelector((state) => state.image.images);
  const loading = useSelector((state) => state.image.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <div className="main">
      {images.map((data) => (
        <div className="card" key={data?.id}>
          <img src={data.urls.raw} alt="Avatar" style={{ width: "50%" }} />
          <div className="container">
            <h3>{data?.alt_description}</h3>
            <p>{data?.user.username}</p>
            <Link to={{ pathname: `/update/${data?.id}`, state: data }}>
              <button size="small">Update</button>
            </Link>
            <button size="small" onClick={() => dispatch(deleteImage(data.id))}>
              Delete
            </button>
          </div>
        </div>
      ))}
      {loading ? <Skeleton /> : ""}
    </div>
  );
}

export default HooksCakeContainer;

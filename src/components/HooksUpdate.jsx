import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { updateImage } from "../redux";
import "./newContainer.css";

function HooksUpdateContainer(props) {
  const [imageDetail, setImageDetail] = useState(props.location.state);
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  const onNameChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "description":
        setImageDetail((prevState) => ({
          ...prevState,
          alt_description: value,
        }));
        break;

      case "author":
        setImageDetail((prevState) => ({
          ...prevState,
          user: {
            ...prevState.user,
            username: value,
          },
        }));
        break;

      default:
        break;
    }
  };

  return (
    <>
      {redirect ? <Redirect to="/" /> : ""}
      <div className="main">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(updateImage(imageDetail));
            setRedirect(true);
          }}
        >
          <div className="control">
            <label htmlFor="description">Image Description</label>
            <input
              type="text"
              name="description"
              // required
              id="description"
              onChange={onNameChange}
              value={
                imageDetail?.alt_description ? imageDetail?.alt_description : ""
              }
            />
          </div>

          <div className="control">
            <label htmlFor="author">Added By</label>
            <input
              type="text"
              name="author"
              // required
              id="author"
              value={
                imageDetail?.user.username ? imageDetail?.user.username : ""
              }
              onChange={onNameChange}
            />
          </div>

          <div className="actions">
            <button>Update</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default HooksUpdateContainer;

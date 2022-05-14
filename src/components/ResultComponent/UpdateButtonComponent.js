import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";

const UpdateButtonComponent = (props) => {
  
  const onClickUpdateButton = () => {
    props.handleStartUpdate(true);
    axios.post("http://13.124.147.122:8081/api/updateDaangnData", {
        article_title: props.article_title,
        searchCategory: "update",
      })
      .then((res) => {
        // response value mapping code
        props.onSuccessUpdate(res.data);
        // --------------------------
        props.handleStartUpdate(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Button onClick={onClickUpdateButton} inverted color={"pink"}>
      업데이트
    </Button>
  );
};
export default UpdateButtonComponent;

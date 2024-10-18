/** @format */

import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_COMMENTS } from "../GraphQL/Queries";

const ViewComments = () => {
  const { error, loading, data } = useQuery(LOAD_COMMENTS);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log(data);
    if (data) {
      setComments(data.getComments);
    }
  }, [data]);
  return (
    <div>
      {comments.map((val) => {
        return (
          <div>
            <h3>
              {val.name}
              <br></br>
              {val.comment}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default ViewComments;

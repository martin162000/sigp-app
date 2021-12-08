import React from "react";
import { useDispatch, useSelector } from "react-redux";

//IMPORT ANTDESIGN
import { Pagination } from "antd";

// IMPORT ACTIONS
import {fetchSubmitRequest} from "../../redux/actions";



const Pages = () => {
  const showState = useSelector((state: any) => state);
  const dispatch = useDispatch();


  const onChange = (page: number) => {
    const query = showState.search;
    // REDUX SAGA
    dispatch(fetchSubmitRequest(query,page));
  };

  return (
    <>
      <Pagination
        style={{ textAlign: "center", margin: "50px 0px 0px" }}
        defaultCurrent={1}
        total={showState.allResults ? showState.allResults : 0}
        defaultPageSize={10}
        showSizeChanger={false}
        current={showState.currentPage}
        onChange={(e) => onChange(e)}
        responsive
        hideOnSinglePage
      />
    </>
  );
};

export default Pages;

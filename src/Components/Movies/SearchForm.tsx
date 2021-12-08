import React from "react";
import { useDispatch, useSelector } from "react-redux";

// IMPORT ANTDESIGN
import { Form, Input, Button } from "antd";

// IMPORT TYPES AND ACTIONS
import { types } from "../../types/types";
import {fetchSubmitRequest} from "../../redux/actions";



const SearchForm = () => {
  const dispatch = useDispatch();
  const showState = useSelector((state: any) => state);

  const dispFunction = (typ: string, data: any) => {
    dispatch({ type: typ, data: data });
  };

  const handleSubmit = () => {
    const query = showState.search;
    // REDUX SAGA
    dispatch(fetchSubmitRequest(query)); 
  };

  const handleChange = (data: any) => {
    dispFunction(types.ADD_SEARCH, data);
  };

  return (
    <>
    <Form
      className="fadeInFaster"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      style={{ marginBottom: "80px" }}
      onFinish={handleSubmit}
    >
      <Form.Item style={{ justifyContent: "center" }}>
        <Input
          name="search"
          style={{ height: "40px", borderRadius: "4px" }}
          placeholder="Search for any movie or tv series "
          onChange={(e) => handleChange(e.target.value)}
          value={showState.search !== false ? showState.search : ""}
        />
      </Form.Item>

      <Form.Item style={{ justifyContent: "center", textAlign: "center" }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </>
  );
};

export default SearchForm;

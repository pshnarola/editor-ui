import { useContext, useState } from "react";

import UserContext from "../store/UserContext";

import Model from "../components/Model/Model";

import Viewsvg from "../assets/View.svg";
import Editsvg from "../assets/Edit.svg";
import Deletesvg from "../assets/Delete.svg";
import { Card } from "react-bootstrap";

import { Typography, Button as MaterialButton } from "@material-ui/core";
import { deletePageApi } from "../API/Api";
import AuthContext from "../store/AuthContext";
const Feed = () => {
  const usrCtx = useContext(UserContext);
  const authCtx = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const deletePageHandler = async (val) => {
    deletePageApi(authCtx.token, val.id);
    usrCtx.setPagesData((prev) => ({
      ...prev,
      data: prev.data.filter((v) => v.id !== val.id),
    }));
  };

  return (
    <div className='container mt-4'>
      <Typography variant='h5' align='center'>
        Basic Page Editor
      </Typography>

      <div>
        <div className='my-3 text-right'>
          <MaterialButton
            size='large'
            variant='contained'
            color='primary'
            onClick={() => {
              setModalShow(true);
              usrCtx.setSelected("");
              usrCtx.setIsView("add");
            }}
          >
            Add Page
          </MaterialButton>
        </div>
        {usrCtx?.pagesData?.data?.map((val) => (
          <Card className='my-2' key={val.id}>
            <Card.Body className='d-flex justify-content-center'>
              <div className='d-flex justify-content-between w-75'>
                <div className='m-2' style={{ fontSize: "1.5rem" }}>
                  {val.pageTitle}
                </div>
                <div className='d-flex justify-content-end w-50 m-2 space-x-4'>
                  <img
                    src={Viewsvg}
                    alt='view'
                    onClick={() => {
                      usrCtx.setSelected(val);
                      setModalShow(true);
                      usrCtx.setIsView("view");
                    }}
                  />
                  <img
                    src={Editsvg}
                    alt='view'
                    onClick={() => {
                      usrCtx.setSelected(val);
                      setModalShow(true);
                      usrCtx.setIsView("edit");
                    }}
                  />
                  <img
                    src={Deletesvg}
                    alt='view'
                    onClick={() => deletePageHandler(val)}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
        {/* {usrCtx?.pagesData?.data?.map((val) => (
          <Editor
            resolver={{
              Card,
              Button,
              Text,
              Container,
              CardTop,
              CardBottom,
            }}
            key={val.id}
            enabled={false}
          >
            <Grid
              container
              spacing={5}
              className='p-2 m-2'
              style={{ paddingTop: "10px", margin: "10px" }}
              onClick={() => {
                usrCtx.setSelected(val);
                setModalShow(true);
              }}
            >
              <Grid item xs>
                <h1 className='p-2' style={{ fontSize: "2rem" }}>
                  {val.pageTitle}
                </h1>
                <Frame json={JSON.parse(val.content)}>
                  <Element
                    canvas
                    is={Container}
                    padding={5}
                    background='#eeeeee'
                    data-cy='root-container'
                  >
                    <Card data-cy='frame-card' />
                    <Button
                      text='Click me'
                      size='small'
                      data-cy='frame-button'
                    />
                    <Text fontSize={20} text='Hi world!' data-cy='frame-text' />
                    <Element
                      canvas
                      is={Container}
                      padding={6}
                      background='#999999'
                      data-cy='frame-container'
                    >
                      <Text
                        size='small'
                        text="It's me again!"
                        data-cy='frame-container-text'
                      />
                    </Element>
                  </Element>
                </Frame>
              </Grid>
            </Grid>
          </Editor>
        ))} */}
      </div>
      <Model show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};
export default Feed;

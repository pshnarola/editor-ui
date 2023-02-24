import { Editor, Frame, Element } from "@craftjs/core";
import {
  Typography,
  Paper,
  Grid,
  makeStyles,
  TextField,
} from "@material-ui/core";

import React, { useContext, useEffect, useState } from "react";

import { SettingsPanel } from "../Dragger/SettingsPanel";
import { Toolbox } from "../Dragger/Toolbox";
import { Topbar } from "../Dragger/Topbar";
import { Button } from "../Dragger/Button";
import { Card, CardBottom, CardTop } from "../Dragger/Card";
import { Container } from "../Dragger/Container";
import { Text } from "../Dragger/Text";
import UserContext from "../../store/UserContext";

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    background: "rgb(252, 253, 253)",
  },
}));
export default function Builder({ ...props }) {
  const usrCtx = useContext(UserContext);
  const classes = useStyles();
  const [components, setComponents] = useState("");
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (usrCtx.isView === "edit") {
      setEnabled(true);
    } else if (usrCtx.isView === "view") {
      setEnabled(false);
    } else {
      setEnabled(true);
    }
  }, [usrCtx.isView]);

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography style={{ margin: "20px 0" }} variant='h5' align='center'>
        {enabled ? (
          <TextField
            multiline
            fullWidth
            placeholder={
              usrCtx.selected ? usrCtx.selected.pageTitle : "Add Page Name Here"
            }
            size='small'
            value={components || ""}
            onChange={(e) => setComponents(e.target.value)}
          />
        ) : (
          usrCtx.selected.pageTitle
        )}
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          CardTop,
          CardBottom,
        }}
        enabled={enabled}
      >
        {enabled && <Topbar components={components} onHide={props.onHide} />}
        <Grid container spacing={5} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame
              json={usrCtx.selected ? JSON.parse(usrCtx.selected.content) : ""}
            >
              <Element
                canvas
                is={Container}
                padding={5}
                background='#eeeeee'
                data-cy='root-container'
              >
                <Card data-cy='frame-card' />
                <Button text='Click me' size='small' data-cy='frame-button' />
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
          {enabled && (
            <Grid item xs={4}>
              <Paper className={classes.root}>
                <Toolbox />
                <SettingsPanel />
              </Paper>
            </Grid>
          )}
        </Grid>
      </Editor>
    </div>
  );
}

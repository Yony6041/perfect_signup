import React from 'react'
import { AppBar, Toolbar, Grid, InputBase, IconButton, Badge, } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChangeBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNewIcon'

export default function Header() {
  return (
    <AppBar position= 'static'>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase/>
          </Grid>
          <Grid item sm>
          </Grid>
          <Grid item sm={6}>
            <IconButton>
              <Badge badgeContent={4} color="secondary">
                <NotificationsNoneIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color='primary'>
                <ChatBubbleOutlineIcon/>
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNewIcon/>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
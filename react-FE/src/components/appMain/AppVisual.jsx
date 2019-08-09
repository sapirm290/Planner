import React from 'react'
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import HeaderLogic from "../header/HeaderLogic"
import ItemLogic from '../item/ItemLogic'
import ItemCreationContainer from '../itemCreation/AddItemLogic';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        color: "white"
    },
    title: {
        fontWeight: 550
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    },

}));

function AppVisual({ listsForRendering, saveItems, loadItems }) {
    const classes = useStyles();
    const lists = [];
    for (let index = 0; index < listsForRendering.length; index++) {
        console.log(listsForRendering[index].id)
        lists.push(
            <ItemLogic id={listsForRendering[index].id} key={listsForRendering[index].id} />
        )
    }

    return (
        <React.Fragment>
            <HeaderLogic >

            </HeaderLogic>
            {/* <Drawer
                className={classes.drawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
                variant="permanent">
                <List>
                    DSAKfnjakj
                    {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))} */}
            {/* </List>
            </Drawer> */}
            <ItemCreationContainer>

            </ItemCreationContainer>
            <Container className={classes.root} maxWidth="md" >

                <Box variant="contained" color="secondary" p={3} >
                    <Typography variant="h5" color="primary" className={classes.title}> To-do :</Typography>
                    {lists}
                </Box>
                
            </Container>
        </React.Fragment>
    )
}

export default AppVisual

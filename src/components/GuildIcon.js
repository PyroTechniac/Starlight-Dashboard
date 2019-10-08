import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/styles';

import { history } from 'meta/constants';
import { getAcronym } from 'meta/util'

const useStyles = makeStyles(theme => ({
    defaultIcon: {
        backgroundColor: theme.palette.secondary.main
    }
}));

export default ({ guild }) => {
    const classes = useStyles();
    return (
        <Avatar onClick={() => history.push(`/guilds/${guild.id}`)} src={guild.iconURL} className={classes.defaultIcon}>
            {getAcronym(guild.name)}
        </Avatar>
    )
}
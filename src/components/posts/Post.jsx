import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        width: 300,
        background: '#f2aa4ce1',
        margin: 24,
    },
    headerSection: {
        display: 'flex'
    },
    titleSection: {
        marginLeft: 24,
    },
    id: {
        marginLeft: 8,
        marginTop: -8,
        fontSize: 14,
    },
    pos: {
        marginBottom: 24,
    },
    bodyContent: {
        marginLeft: 8
    }
  });

function Post({post}) {
    const classes = useStyles();
    
    return (
        <Card className={classes.root}>
            <CardContent>
                <div className={classes.headerSection}>
                    <div className={classes.id}>
                        <Typography color="textSecondary" gutterBottom>
                        <h3>{post.id}</h3>
                        </Typography>
                    </div>

                    <div className={classes.titleSection}>
                        <Typography variant="h5" component="h2">
                        {post.name}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        {post.email}
                        </Typography>  
                    </div>                                                         
                </div>

                <Typography variant="body2" component="p" className={classes.bodyContent}>
                    {post.body}
                </Typography>

            </CardContent>
    </Card>
    )
}

export default Post;

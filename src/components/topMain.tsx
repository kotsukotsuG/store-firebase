import React, { FC, useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { Plugin } from '../types';

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    background: {
      backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/store-try-00.appspot.com/o/top%2Findex_mv.png?alt=media&token=28fdca59-3b61-438f-9d71-c6918b617170)`,
      backgroundSize: 'cover',
      height: '30vh',
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  })
);

const TopMain: FC = () => {
  const classes = useStyle();
  const [plugins, setPlugins] = useState<Plugin[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const postCollection = db.collection('plugins');
      const snapshot = await postCollection.get();
      setPlugins(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Plugin))
      );
      // snapshot.docs.map((doc) =>
      //   console.log(`doc.data: ${JSON.stringify(doc.data())}`)
      // );
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={classes.background} />

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {plugins.map((plugin) => (
              <Grid item key={plugin.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={plugin.image[0]}
                    title={plugin.name}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      <Link to={`/plugins/${plugin.id}`}>{plugin.name}</Link>
                    </Typography>
                    <Typography>{plugin.company}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </div>
  );
};

export default TopMain;

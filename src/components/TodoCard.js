import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 200,
    maxHeight: 200,
    minHeight: 100,
    margin: 20
  },
  title: {
    fontSize: 14,
    height: 100
  }
};

function TodoCard(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary">
          {props.todo}
        </Typography>
      </CardContent>
      <Button size="small" color="secondary">X</Button>
    </Card>
  );
}

TodoCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoCard);
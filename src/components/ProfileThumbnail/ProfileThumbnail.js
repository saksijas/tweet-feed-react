import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import unicorn from '../../assets/unnamed.png';
import Alert from "@material-ui/lab/Alert";

const createStyles = makeStyles((theme) => ({

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "60%",
  },
  image: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30%",
  },
  container: {
    width: "50%",
    margin: "16px auto",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    padding: "16px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#95B8D1",
  },
}));

export default function ProfileThumbnail(props) {
  const classes = createStyles();
  const [profile, setProfile] = useState(undefined);

  useEffect(() => {
    if (!profile) {
      setProfile(props.profile);
    }
  }, []);
  return (
    <div className={classes.container}>
      <img className={classes.image} src={unicorn} alt="Unicorn" />
        {profile.username} follows {profile.following.join(", ")}
    </div>
  );
}

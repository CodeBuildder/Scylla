import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

Fade.propTypes = {
  children: PropTypes.element,
  in: PropTypes.bool.isRequired,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
};

export default function CertificateModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(props.props.certificateName);
  return (
    <div>
      <button type="button" className="info1" onClick={handleOpen}>
        View Certificate.
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="certifModal">
            {props.props.certificateName ==
            "Google Cloud: Associate Cloud Engineer" ? (
              <img
                src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/32916853"
                alt="Google Cloud Platform"
                className="certifPic"
              />
            ) : props.props.certificateName == "AWS Academy Graduate" ? (
              <img
                src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/certificates/aws+academy.png"
                alt="AWS Academy Graduate"
                className="certifPic"
              />
            ) : props.props.certificateName ==
              "Career Edge - Knockdown the Lockdown" ? (
              <img
                src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/certificates/TCS+ion-1.png"
                alt="Tata Consultancy Services"
                className="certifPic"
              />
            ) : props.props.certificateName == "#30DaysCloudGoogle" ? (
              <img
                src="https://kkportfolio-assets.s3.ap-south-1.amazonaws.com/assets/certificates/%2330DaysCloudGoogleParticipation+Certificate-1.png"
                alt="Google Cloud, India"
                className="certifPic"
              />
            ) : (
              <h4>
                Certificate not Visible? Servers are probably down. Do checkout
                my LinkedIn for the actual certificates!
                <br />
                PS: Feel free to Hit Me Up for Funding my Servers xD!
              </h4>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

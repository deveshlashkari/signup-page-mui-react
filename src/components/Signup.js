// imports
import * as React from "react";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Grid,
  Typography,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import Link from "@mui/material/Link";

//image import
import SignupVector from "../assets/Back.png";

//Custom text field
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#232D3F",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#E5E5E5",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#E5E5E5",
    },
    "&:hover fieldset": {
      borderColor: "#E5E5E5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#E5E5E5",
    },
  },
});

//Custom button
const ColorButton = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: "#FFFFFF",
  borderColor: "#232D3F",

  "&:hover": {
    backgroundColor: "#232D3F",
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
  },
}));

//Validation schema of Yup for Formik
const errorValidationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).max(50).label("First Name"),
  lastName: Yup.string().required().min(2).max(50).label("Last Name"),
  email: Yup.string()
    .required()
    .email()
    .label("Email")
    .matches(
      /^[a-zA-Z0-9.!#$%&'*+/=?^`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/,
      "Email is not Valid"
    ),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/,
      "Password must contain atleast one uppercase,lowercase and a number"
    )
    .label("Password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .label("Confirm Password"),
});

//Styles object
const webStyles = {
  errorMessage: {
    color: "#ff3333",
    fontSize: "12px",
  },
  image: {
    display: "grid",
    placeContent: "center",
  },
  link: {
    textDecoration: "none",
    color: "#232D3F",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default function Signup() {
  const handleFormSubmit = (values) => {
    window.alert("Form submitted successfully. Please check console for data.");
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${SignupVector})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      ></Grid>
      <Grid item xs={12} sm={8} md={5} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#232D3F" }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={errorValidationSchema}
              onSubmit={async (values) => {
                if (values) {
                  handleFormSubmit(values);
                }
              }}
            >
              {({ values, handleChange, errors }) => {
                return (
                  <Form>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          fullWidth
                          label="First Name"
                          id="firstName"
                          name="firstName"
                          onChange={handleChange}
                        />
                        <span style={webStyles.errorMessage}>
                          {errors.firstName}
                        </span>
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <CssTextField
                          fullWidth
                          label="Last Name"
                          id="lastName"
                          name="lastName"
                          onChange={handleChange}
                        />
                        <span style={webStyles.errorMessage}>
                          {errors.lastName}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <CssTextField
                          fullWidth
                          label="Email"
                          id="email"
                          name="email"
                          onChange={handleChange}
                        />
                        <span style={webStyles.errorMessage}>
                          {errors.email}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <CssTextField
                          fullWidth
                          label="Password"
                          id="password"
                          name="password"
                          onChange={handleChange}
                        />
                        <span style={webStyles.errorMessage}>
                          {errors.password}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <CssTextField
                          fullWidth
                          label="Confirm Password"
                          id="confirmPassword"
                          name="confirmPassword"
                          onChange={handleChange}
                        />
                        <span style={webStyles.errorMessage}>
                          {errors.confirmPassword}
                        </span>
                      </Grid>
                      <Grid item xs={12}>
                        <ColorButton variant="outlined" type="submit" fullWidth>
                          Sign up
                        </ColorButton>
                      </Grid>
                    </Grid>
                    <Grid container sx={{ my: 1 }} justifyContent="flex-end">
                      <Grid item>
                        <Link href="#" variant="body2" style={webStyles.link}>
                          Already have an account? Sign in
                        </Link>
                      </Grid>
                    </Grid>
                  </Form>
                );
              }}
            </Formik>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

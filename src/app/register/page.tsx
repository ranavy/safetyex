"use client";
import React, { ReactElement } from "react";
import { makeStyles } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "formik-material-ui";
import { Formik, Form, Field, FormikProps } from "formik";
import Router, { useRouter } from "next/navigation";
import { Box } from "@mui/material";

type Props = {};

export default function register({}: Props) {
  const router = useRouter();
  const showForm = ({
    values,
    setFieldValue,
    isValid,
    dirty,
    handleSubmit,
  }: FormikProps<any>) => {
    return (
      <Form onSubmit={handleSubmit}>
        <Field
          component={TextField}
          name="username"
          id="username"
          margin="normal"
          required
          fullWidth
          label="Username"
          autoComplete="username"
          autoFocus
        />
        <Field
          component={TextField}
          name="password"
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Field
          component={TextField}
          name="email"
          margin="normal"
          required
          fullWidth
          label="Email"
          type="Email"
          id="email"
          autoComplete="email"
        />
        <Field
          component={TextField}
          name="phonenumber"
          margin="normal"
          required
          fullWidth
          label="Phone number"
          type="number"
          id="phonenumber"
          autoComplete="phone"
        />

        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>

        <Button
          fullWidth
          size="small"
          color="primary"
          onClick={() => router.push("/login")}
        >
          Cancel
        </Button>
      </Form>
    );
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 200 }}
            image="/static/img/safetylogohi.png"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={async (values) => {
                alert(JSON.stringify(values));
              }}
            >
              {(props) => showForm(props)}
            </Formik>
          </CardContent>
        </Card>

        <style jsx global>
          {`
            body {
              min-height: 100vh;
              position: relative;
              margin: 0;
              background-size: cover;
              background-image: url("/static/img/bg1.jpg");
              text-align: center;
            }
          `}
        </style>
      </Box>
    </React.Fragment>
  );
}

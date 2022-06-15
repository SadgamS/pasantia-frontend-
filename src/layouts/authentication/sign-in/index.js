/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// Material Dashboard 2 React components
import MDBox from "theme/components/MDBox";
import MDTypography from "theme/components/MDTypography";
import MDButton from "theme/components/MDButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import { TextField } from "@mui/material";
// import { useMaterialUIController } from "context";
import { useForm, Controller } from "react-hook-form";
import apiClient from "services/api";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import MDInput from "theme/components/MDInput";

function Basic() {

  const [showPassword, setShowPassword] = useState(false);
  
  const handleClickShowPassword = () =>{
  
    setShowPassword(!showPassword);
  }

  const schema = yup.object({
    Usuario: yup.string().required("Usuario es requerido"),
    Contraseña: yup.string().min(4, "Minimo 5 caracteres").required("Contraseña es requerida"),

  }).required()
  
  const { handleSubmit, control } = useForm({
    resolver: yupResolver(schema)
  });

  let navigate = useNavigate();
  
  const onSubmit = (data) => {
    console.log(data.Usuario)
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
      apiClient.post('/login', {
          name: data.Usuario,
          password: data.Contraseña
      }).then(response => {
          console.log(response);
          navigate("/dashboard");
      })
  });

  };


  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Iniciar Sesión
          </MDTypography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
            {/* <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <FacebookIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GitHubIcon color="inherit" />
              </MDTypography>
            </Grid>
            <Grid item xs={2}>
              <MDTypography component={MuiLink} href="#" variant="body1" color="white">
                <GoogleIcon color="inherit" />
              </MDTypography>
            </Grid> */}
          </Grid>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form" onSubmit={handleSubmit(onSubmit)}>
            
            <MDBox mb={2}>
              <Controller 
                name="Usuario"
                control={control}
                defaultValue=""
                render={({field: {onChange, value}, fieldState: {error}})=> (
                  <TextField
                    fullWidth
                    label="Usuario"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </MDBox>

            <MDBox mb={2}>
              <Controller 
                name="Contraseña"
                control={control}
                defaultValue=""
                render={({field: {onChange, value}, fieldState: {error}})=> (
                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    label="Contraseña"
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
              />
            </MDBox>
            
            {/* <FormControl mb={2} variant="outlined" fullWidth>
            <InputLabel  htmlFor="outlined-adornment-password" >Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                {...register("password", {required: "Required"})}
                error={!!errors?.password}
                // helperText={errors?.password ? errors.password.message : null}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                      >
                      {showPassword ? <VisibilityOff color={darkMode ? "white" : "inherit"}/> : <Visibility color={darkMode ? "white" : "inherit"}/>}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                />
              </FormControl > */}
              <MDBox display="flex" alignItems="center" ml={-1} mt={1}>
                <Switch checked={showPassword} onChange={handleClickShowPassword} />
                <MDTypography
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  onClick={handleClickShowPassword}
                  sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                >
                  &nbsp;&nbsp;Mostrar Contraseña
                </MDTypography>
              </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Ingresar
              </MDButton>
            </MDBox>              
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Basic;

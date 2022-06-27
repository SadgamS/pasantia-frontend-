import { Card, Grid, Icon, Modal } from "@mui/material"
import { FooterLayout } from "layout/FooterLayout"
import DashboardLayout from "layout/layoutContainers/DashboardLayout"
import { DashboardNavbar } from "pasantia/components/Navbars/DashboardNavbar/DashboardNavbar"
import { useState } from "react"
import MDBox from "theme/components/MDBox"
import MDButton from "theme/components/MDButton"
import MDInput from "theme/components/MDInput"
import MDTypography from "theme/components/MDTypography"


export const Usuarios = () => {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false); 
  return (
    <DashboardLayout>
        <DashboardNavbar />
        <MDBox mt={2} mb={2}>
            <Grid container spacing={1}>
                <Grid item xs={12} mt={2}>
                <MDButton variant="gradient" color="info" onClick={handleOpen}>
                    <Icon sx={{ fontWeight: "bold" }}>add</Icon>&nbsp;
                    Agregar Usuario
                </MDButton>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    sx={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"center"
                    }}
                    >
                    {/* <Grid container spacing={3} >
                    <Grid item xs={12} md={7}> */}
                    <MDBox width={480} height={280} p={3}>

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
          <MDTypography variant="h4" fontWeight="medium" color="white">
            Crear Usuario
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>

                     <MDInput label="name"/>
                     <MDInput label="name"/>
                     <MDButton> hola</MDButton>
        </MDBox>
                    </Card>
                        {/* </Grid> */}
                {/* </Grid> */}
                    </MDBox>
                </Modal>
                <div>HOla</div>
                </Grid>
            </Grid>
        </MDBox>

    </DashboardLayout>
  )
}

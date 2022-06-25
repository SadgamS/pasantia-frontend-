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
                    >
                    <Grid container spacing={3} >
                    <Grid item xs={12} md={7}>

                    <Card
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                        }}
                    >

                    <MDBox 
                        pt={2} px={2} display="flex" justifyContent="space-between" alignItems="center"
                        
                        >
                        <MDTypography id="modal-modal-title"> Titulo </MDTypography>
                     <MDInput label="name"/>
                    </MDBox>
                     <MDInput label="name"/>
                     <MDInput label="name"/>
                     <MDButton> hola</MDButton>
                    </Card>
                        </Grid>
                </Grid>
                </Modal>
                <div>HOla</div>
                </Grid>
            </Grid>
        </MDBox>

    </DashboardLayout>
  )
}

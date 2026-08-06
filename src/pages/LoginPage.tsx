import { Box, Paper, TextField, Typography } from "@mui/material";

function LoginPage() {
  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography variant="h3">Faça seu login</Typography>
        <TextField
          id="input-login"
          label="email"
          variant="outlined"
        ></TextField>
        <TextField
          id="input-password"
          label="outline"
          variant="outlined"
        ></TextField>
      </Paper>
    </Box>
  );
}

export default LoginPage;

import React, { useState } from 'react'
import {Box, Typography, useTheme, useMediaQuery, TextField, Button, Alert, Collapse} from '@mui/material'

const Register = () => {
  const theme = useTheme();
  const isNotMobile = useMediaQuery("(min-width: 1000px)")

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[error, setError] = useState("");
  return (
    <div>
        <h1>Register Page</h1>
    </div>
  )
}

export default Register;
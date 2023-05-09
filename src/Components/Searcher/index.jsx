import React from "react";
import { IconButton, Stack, InputAdornment, TextField, InputLabel } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searcher = () => {
    return(
        <Stack 
        direction="row"
        sx={{
            marginTop: '30px',
            width: '80%'
        }
        }>
            <TextField 
            id="outlined-basic"
            variant="outlined"
            placeholder="Search" 
            size="small"
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton sx={{
                        background: '#100e17',
                        
                        height: '36px',
                        right: '-10px'
                    }}>
                      <SearchIcon 
                      sx={{
                        color: 'white'
                      }}/>
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            InputLabelProps={{
                shrink: false
              }}
            sx={{ 
                [`& fieldset`]:{
                    borderRadius: '50px',
                },
                width: '90%',
                backgroundColor: 'white',
                borderRadius: '50px'
                }}/>
            
        </Stack>
    )
}

export default Searcher;
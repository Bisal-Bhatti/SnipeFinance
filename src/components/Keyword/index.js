import React, { useEffect } from 'react'
import styles from './keyword.module.sass'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { DataGrid } from '@mui/x-data-grid';
import { useFormik } from 'formik';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import cn from 'classnames';
import {
  faEdit,
  faTrash,
  faClose
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import Swal from 'sweetalert2'
import CircularProgress from '@mui/material/CircularProgress';
import {API_BASE_URL} from "../../config"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 5,
  px:3
};
const styleCircular = {
  position: 'absolute',
  top: {
    xs:'50%',
  },
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '20px',
  height: '20px',
};


const Keyword = () => {

  const [open, setOpen] = React.useState(false);
  const [keywordsData, setKeywordsData] = React.useState("");
  const [selectedRow, setSelectedRow] = React.useState({name: "",id:""});
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateCategoryHandler = async (e) => {
    e.preventDefault();
    console.log('form category updated cn=> ',selectedRow.keywordId,selectedRow.name)
    try {
      const updatedkeywordData = {
        name: selectedRow.name,
        isActive: checked
      } 

			const res_data = await axios.put(`${API_BASE_URL}/api/ns/keywords/${selectedRow.keywordId}`,
      updatedkeywordData)
				console.log("res_keyword_updated_data => ", res_data)
				if(res_data.status === 200){
          handleClose()
					Swal.fire({
						title: 'Success!',
						text: ' Keyword Updated Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getKeywords(),200)
				}
				
		  } catch (e) {
			  console.log(e);
        handleClose();
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to update',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
		  }
  }

  const deleteKeywordHandler = async (id) => {
    console.log("delete Keyword Handler id => ", id)
    try {
			const res_data = await axios.delete(`${API_BASE_URL}/api/ns/keywords/${id}`)
				console.log("res_keyword_deleted_data => ", res_data)
				if(res_data.status === 200){
					Swal.fire({
						title: 'Success!',
						text: ' Keyword Deleted Successfully',
						icon: 'success',
						confirmButtonText: 'Close'
					  })

            setTimeout(() => getKeywords(),200)
				}
				
		  } catch (e) {
			  console.log(e);
			  Swal.fire({
				title: 'Error!',
				text: 'Failed to update',
				icon: 'error',
				confirmButtonText: 'Close'
			  })
		  }
  }

  const columns = [
    { 
      field: 'keywordId', 
      headerName: 'ID', 
      width: 150 
    },
    {
      field: 'name',
      headerName: 'Keyword Name',
      width: 240,
    },
    {
      field: 'isActive',
      headerName: 'Active Status',
      width: 140,
    },
    {
      field: 'postedCount',
      headerName: 'Posted Count',
      width: 140,
    },
    {
      field: 'failedCount',
      headerName: 'Failed Count',
      width: 140,
    },
    {
      field: 'successRatio',
      headerName: 'Success Ratio',
      width: 140,
    },
    {
      field: 'failedRatio',
      headerName: 'Failed Ratio',
      width: 140,
    },
    {
      field: 'totalCount',
      headerName: 'Total Count',
      width: 140,
    },
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (
          <>
            <button className={cn(styles.action_edit_btn)} onClick={()=> {setSelectedRow(params.row); setChecked(params.row.isActive); handleOpen();}}>
            <FontAwesomeIcon
            icon={faEdit}
            style={{  cursor: "pointer" }}/></button>
            <button className={cn(styles.action_delete_btn)} onClick={() => deleteKeywordHandler(params.row.keywordId)}>
            <FontAwesomeIcon
            icon={faTrash}
            style={{  cursor: "pointer" }}/></button>
          </>
        );
      },
    },
  ];

  const getKeywords = async () => {
    try {
      const res_data = await  axios.get(`${API_BASE_URL}/api/keywords`)
      console.log("res_data.data keyword => ", res_data?.data)
      if(res_data?.data){
        let newres_data =  res_data?.data.map((keyword,i)=>{
          return {id:i+1,...keyword}
        })
        console.log("newres_data keyword => ",newres_data)
        setKeywordsData(newres_data)
      }
    } catch (err) {
        console.log(err)
    }
  }

  useEffect(() => {
    getKeywords();
  }, [])
  

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      console.log("form keyword name => ", values)
      try {
        const res_data = await  axios.post(`${API_BASE_URL}/api/ns/keywords`,
        values)
          console.log("res_keyword_added_data => ", res_data)
          if(res_data.status === 200){
            Swal.fire({
              title: 'Success!',
              text: ' Keyword Added Successfully',
              icon: 'success',
              confirmButtonText: 'Close'
              })
  
              setTimeout(() => getKeywords(),200)
          }
          
        } catch (e) {
          console.log(e);
          Swal.fire({
          title: 'Error!',
          text: 'Failed to update',
          icon: 'error',
          confirmButtonText: 'Close'
          })
        }
    },
  });


  return (
    <>
      <div className={cn(styles.category_wrapper)}>
        <div className={cn(styles.heading_wrapper)}>
          <h1><span>Keywords</span></h1>
        </div>
        <div className={cn(styles.content_wrapper)}>
          <form onSubmit={formik.handleSubmit}>
            <div className={cn(styles.form_content_wrapper)}>
              <div className={cn(styles.input_wrapper)}>
                <input type="text" name="name" placeholder="Keyword Name" required onChange={formik.handleChange} value={formik.values.name} />
              </div>
              <div className={cn(styles.button_wrapper)}> 
                <button type='submit'>Add Keywords</button>
              </div>
            </div>
          </form>
        </div>

        <div className={cn(styles.table_wrapper)}>
          <div className={cn(styles.table_heading)}>
            <h1><span>View Keywords</span></h1>
          </div>
          <div style={{position: "relative"}}>
            {
              keywordsData !== "" ?
              <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
              rows={keywordsData || []}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              />
              </Box>
              :
              // <CircularProgress sx={styleCircular}/>
              "no data"
            }
          </div>
        </div>
      </div>
      {/* modal start from here  */}
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Box sx={{mb:5,pb:1,display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom: "1px solid black"}}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Update Keyword
              </Typography>
              <Button variant="outlined" size='small' onClick={handleClose}><FontAwesomeIcon icon={faClose} style={{cursor: "pointer" }}/></Button>
            </Box>
            <Box component="form" onSubmit={updateCategoryHandler}>
              <TextField 
                id="outlined-basic"  
                name="name"
                required
                onChange={e => setSelectedRow({...selectedRow,name: e.target.value})}
                value={selectedRow.name} 
                label="Keyword Name" 
                variant="outlined" fullWidth autoFocus size='small' sx={{mb:2}}/>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Active Status</FormLabel>
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="start" 
                      control={<Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} color="primary" />}
                      label="isActive"
                      labelPlacement="start"
                    />
                  </FormGroup>
                </FormControl>
                <br /><br />
                <Button
                type="submit"
                variant="contained"
                size='small'
                sx={{mt:1,mb:3}}
              >
                Update
              </Button>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Keyword
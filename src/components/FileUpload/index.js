import { useDropzone } from 'react-dropzone'

import { Typography, Box, IconButton } from '@mui/material'
import { DeleteForever } from '@mui/icons-material'

import useStyles from './styles'

const FileUpload = ({ files, errors, touched, setFieldValue }) => {
  const classes = useStyles()

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      const newFiles = acceptedFile.map((file) => {
        return {
          ...file,
          preview: URL.createObjectURL(file),
        }
      })

      setFieldValue('files', [...files, ...newFiles])
    },
  })

  const handleRemoveFile = (filePath) => {
    const newFileState = files.filter((file) => {
      return file.path !== filePath
    })
    setFieldValue('files', newFileState)
  }
  return (
    <>
      <Typography component="h6" variant="h6" color={errors && touched ? 'error' : 'textPrimary'}>
        Imagens
      </Typography>
      <Typography
        component="div"
        variant="body2"
        color={errors && touched ? 'error' : 'textPrimary'}
      >
        A primeira imagem e foto principal do seu anuncio
      </Typography>
      {errors && touched ? (
        <Typography variant="body2" color="error" gutterBottom>
          {errors}
        </Typography>
      ) : null}
      <Box className={classes.thumbsContainer}>
        <Box className={classes.dropZone} {...getRootProps()}>
          <input name="files" {...getInputProps()} />
          <Typography variant="body2" color="textPrimary">
            Clique para adicionar ou araste a imagem para aqui.
          </Typography>
        </Box>
        {files.map((file, index) => (
          <Box
            className={classes.thumb}
            style={{ backgroundImage: `url(${file.preview})` }}
            key={file.name}
          >
            {index === 0 ? (
              <Box className={classes.mainImage}>
                <Typography variant="body2" color="secondary">
                  Principal
                </Typography>
              </Box>
            ) : null}
            <Box className={classes.mask}>
              <IconButton
                color="secondary"
                onClick={() => {
                  handleRemoveFile(file.path)
                }}
              >
                <DeleteForever fontSize="large" />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>
    </>
  )
}

export default FileUpload

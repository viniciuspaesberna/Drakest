import { Scope } from "@unform/core";
import { useCallback, useState } from "react";
import { v4 } from "uuid";
import axios, { AxiosRequestConfig } from "axios";
// import { FileWithPath } from "react-dropzone"

import { CircularProgress, Image, Button } from "@chakra-ui/react";

import { CreateCharacterFileInput } from "../CharacterFileInput";

type UploadedFile = {
  file: any,
  id: string,
  progress: number,
  uploaded: boolean,
  error: boolean,
  url: string
}

export function ImagePreview() {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null)
  const [imagePreview, setImagePreview] = useState<any | null>(null)

  const getImagePreview = useCallback((file: any) => {
    let reader = new FileReader()
    
    reader.onload = (e) => {
      // Do whatever you want with the file contents
      setImagePreview(e.target.result)
    }
    
    reader.readAsDataURL(file)
  }, [])

  const config = {
    headers: { 'content-type': 'multipart/form-data' },

    onUploadProgress: (e: ProgressEvent) => {
      const progress = Math.round((e.loaded * 100) / e.total)

      setUploadedFile({ ...uploadedFile, progress })
    },

    params: {
      key: process.env.IMGBB_API_KEY,
      image: imagePreview,
      name: uploadedFile?.file?.name
    }

  } as AxiosRequestConfig;

  const handleUpload = useCallback(async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files[0]

    getImagePreview(file)

    console.log(file)

    const uploadedFile = {
      file: file,
      id: v4(),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }

    setUploadedFile(uploadedFile)

    const response = await axios.post(
      "https://api.imgbb.com/1/upload", 
      {
        key: process.env.IMGBB_API_KEY,
        image: uploadedFile.file,
        name: uploadedFile.file.name,
      },
      config
    ).catch(err => console.log(err.message))

    console.log(response)
  }, [])

  
  return (
    <Scope path="appearence">
      { !uploadedFile && (
          <CreateCharacterFileInput 
            name="imageInput"
            onUpload={handleUpload}
          />
      )}
      { uploadedFile &&  uploadedFile.progress !== 100 && (
        <CircularProgress 
          color="yellow.500" 
          size="20" 
          value={uploadedFile.progress} 
          capIsRound
          ringColor="gray.600"
          alignSelf="center"
          my="auto"
        />
      )}
      { uploadedFile && uploadedFile.progress === 100 && (
        <>
          <Button 
            mx="10"
            mt="6"
            colorScheme="yellow"
            onClick={() => {
              setUploadedFile(null)
            }}
          >
            Excluir
          </Button>
          <Image
            src={imagePreview}
            alignSelf="center"
            my="auto"
            w="20rem"
            h="20rem"
            objectFit="scale-down"
          />
        </>
      )}
    </Scope>
  )
}
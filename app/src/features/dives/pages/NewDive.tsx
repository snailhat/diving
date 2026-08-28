import { db } from "@/firebase";
import ContentBox from "@/shared/components/ContentBox";
import { Button, Card, InputAdornment, Stack, TextField } from "@mui/material";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useState } from "react";
function NewDiveContainer({ children }: { children: React.ReactNode }) {
  return (
    <Card sx={{ borderRadius: 3, padding: 2 }}>
      <Stack spacing={1}>{children}</Stack>
    </Card>
  );
}
async function submitdive(divenumber: string) {
  try {
    const docRef = await addDoc(collection(db, "dives"), {
      divenumber: divenumber
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
export default function NewDive() {
  const [divenumber, setdivenumber] = useState("")
  const handleSubmit = () => {
    submitdive(divenumber)
  }
  return (
    <ContentBox>
      <Stack spacing={2} sx={{ p: 2 }}>
        <NewDiveContainer>
          <TextField type="number" label="Dive Number" value={divenumber} onChange={(e) => setdivenumber(e.target.value)} />
          <TextField type="text" label="Location" />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField type="datetime-local" />
          <TextField type="datetime-local" />
          <TextField type="number" label="Duration" />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField
            type="number"
            label="Gas In"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">bar</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            type="number"
            label="Gas Out"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">bar</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            type="number"
            label="Gas Used"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">bar</InputAdornment>
                ),
              },
            }}
          />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField
            type="number"
            label="Max Depth"
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              },
            }}
          />
          <TextField
            type="number"
            label="Temperature"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">°C</InputAdornment>
                ),
              },
            }}
          />
          <TextField
            type="number"
            label="Visibility"
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              },
            }}
          />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField type="text" label="Buddy" />
          <TextField type="text" label="Comments" multiline maxRows={5} />
        </NewDiveContainer>
        <NewDiveContainer>
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          <Button variant="outlined">Cancel</Button>
        </NewDiveContainer>
      </Stack>
    </ContentBox>
  );
}

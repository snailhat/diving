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
interface DiveFormState {
  diveNumber: string;
  location: string;
  startTime: string;
  endTime: string;
  duration: string;
  gasIn: string;
  gasOut: string;
  gasUsed: string;
  maxDepth: string;
  temperature: string;
  visibility: string;
  buddy: string;
  comments: string;
}
const initialState: DiveFormState = {
  diveNumber: "",
  location: "",
  startTime: "",
  endTime: "",
  duration: "",
  gasIn: "",
  gasOut: "",
  gasUsed: "",
  maxDepth: "",
  temperature: "",
  visibility: "",
  buddy: "",
  comments: "",
}
export default function NewDive() {
  const [form, setForm] = useState<DiveFormState>(initialState);
  const handleChange =
    (field: keyof DiveFormState) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [field]: e.target.value }));
      };
  const handleSubmit = async () => {
    try {

      // Convert numeric-looking strings to numbers, leave blanks as null
      const toNumber = (v: string) => (v === "" ? null : Number(v));

      await addDoc(collection(db, "dives"), {
        diveNumber: toNumber(form.diveNumber),
        location: form.location,
        startTime: form.startTime ? new Date(form.startTime) : null,
        endTime: form.endTime ? new Date(form.endTime) : null,
        duration: toNumber(form.duration),
        gasIn: toNumber(form.gasIn),
        gasOut: toNumber(form.gasOut),
        gasUsed: toNumber(form.gasUsed),
        maxDepth: toNumber(form.maxDepth),
        temperature: toNumber(form.temperature),
        visibility: toNumber(form.visibility),
        buddy: form.buddy,
        comments: form.comments,
      });

      setForm(initialState);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ContentBox>
      <Stack spacing={2} sx={{ p: 2 }}>
        <NewDiveContainer>
          <TextField type="number" label="Dive Number" value={form.diveNumber} onChange={handleChange("diveNumber")} />
          <TextField type="text" label="Location" value={form.location} onChange={handleChange("location")} />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField type="datetime-local" value={form.startTime} onChange={handleChange("startTime")} />
          <TextField type="datetime-local" value={form.endTime} onChange={handleChange("endTime")} />
          <TextField type="number" label="Duration" value={form.duration} onChange={handleChange("duration")} />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField
            type="number"
            label="Gas In"
            value={form.gasIn} onChange={handleChange("gasIn")}
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
            value={form.gasOut} onChange={handleChange("gasOut")}
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
            value={form.gasUsed} onChange={handleChange("gasUsed")}
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
            value={form.maxDepth} onChange={handleChange("maxDepth")}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              },
            }}
          />
          <TextField
            type="number"
            label="Temperature"
            value={form.temperature} onChange={handleChange("temperature")}
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
            value={form.visibility} onChange={handleChange("visibility")}
            slotProps={{
              input: {
                endAdornment: <InputAdornment position="end">m</InputAdornment>,
              },
            }}
          />
        </NewDiveContainer>
        <NewDiveContainer>
          <TextField type="text" label="Buddy" value={form.buddy} onChange={handleChange("buddy")} />
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

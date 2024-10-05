import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Select,
  InputLabel,
  FormControl,
  Typography,
  Paper,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2"; // Grid v2 from MUI
import jsFileDownload from "js-file-download";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import axios from "axios";
import "../styles/style.css";

const DeathInformationForm = () => {
  const [people, setPeople] = useState([]);

  // Fetch the list of people from the database
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/people")
      .then((response) => {
        setPeople(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the people!", error);
      });
    console.log(people);
  }, []);

  const [previewTextEnglish, setPreviewTextEnglish] = useState("");
  const [previewTextGujarati, setPreviewTextGujarati] = useState("");

  const [formData, setFormData] = useState({
    sadDemise: "",
    age: "",
    place: "",
    dateOfDemise: dayjs(),
    antimYatraDate: dayjs(),
    antimYatraTime: dayjs(),
    residenceAddress: "",
    antimYatra: "",
    contactNumber: "",
    relation1: {
      name: "",
      contactNumber: "",
    },
    relation2: {
      name: "",
      contactNumber: "",
    },
    relationName1: "",
    relationName2: "",
    relationContactNumber1: "",
    relationContactNumber2: "",
    noPrarthana: false,
    prarthanaDate: dayjs(),
    prarthanaTime: dayjs(),
    prarthanaAddress: dayjs(),
    sendMessageOn: "",
    photo: null,
    photoUrl: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    setFormData({ ...formData, noPrarthana: e.target.checked });
  };

  const handleDateChange = (newValue) => {
    setFormData({ ...formData, dateOfDemise: newValue });
  };

  const handleAntimYatraDateChange = (newValue) => {
    setFormData({ ...formData, antimYatraDate: newValue });
  };

  const handlePrarthanaDateChange = (newValue) => {
    setFormData({ ...formData, prarthanaDate: newValue });
  };

  const handleTimeChange = (newValue) => {
    setFormData({ ...formData, antimYatraTime: newValue });
  };

  const handlePrarthanaTimeChange = (newValue) => {
    setFormData({ ...formData, prarthanaTime: newValue });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      photo: file,
      photoUrl: URL.createObjectURL(file),
    });
  };

  const handleGenerateFile = () => {
    const fileContentEnglish = `
    💔 Sad News of Demise

    With profound sorrow, we inform you of the passing of our beloved ${
      formData.sadDemise
    }, aged ${formData.age}.

    🕊️ Date of Demise: ${formData.dateOfDemise.format("DD/MM/YYYY")}
    🕒 Time of Antim Yatra: ${formData.antimYatraTime.format("HH:mm A")}
    🏡 Place: ${formData.place}

    The last rites (Antim Yatra) will take place from their residence at ${
      formData.residenceAddress
    } and proceed to ${formData.antimYatra} for the final ceremonies.

    For any further information, you may contact:
    📞Name: ${formData.relationName1}
    📞 Contact: ${formData.relationContactNumber1}

    📞Name: ${formData.relationName2}
    📞 Contact: ${formData.relationContactNumber2}

    We humbly request that there will be ${
      formData.noPrarthana ? "no prarthana" : "prarthana"
    } following the ceremonies.

    ${
      !formData.noPrarthana
        ? `Prarthana Sabha

      Address: ${formData.prarthanaAddress}
      Date: ${formData.prarthanaDate}
      Time: ${formData.prarthanaTime}
      `
        : ""
    }

    🙏
    `;

    //     const fileContentEnglish = `
    // Antima Sanskar Yatra / અંતિમ સંસ્કાર યાત્રા

    // Sad Demise: *Shri Kishoriben ઑનPrakash Shah (65) {શ્રી કિશોરીબેન પ્રકાશ શાહ}

    // Vatan/Place: Vasai / Pune {વસાઈ/પુણે}

    // Date of Demise (અવસાન) 26/09/2024

    // Antima Sanskar Yatra: 26/09/2024 - 07:00 PM (સાંજે 07:00 કલાકે)

    // From: A1-208 Raviraj Corado Kondhwa Khurd Pune -411048 {એ/1, રવિરાજ કોલોરાડો, Kondhwa khurd, પુણે - ૪૧૧૦૪૮

    // To - Vaikunth smashanbhumi Navi peth / વૈકુંઠ સ્મશાનભૂમિ નવી પેઠ

    // Prakash shah 9373204179
    // Kunal Shah +919850446933
    // Nitesh shah +919890137774`;

    const fileContentGujarati = `
મરનાર વ્યક્તિ: ${formData.sadDemise}
ઉંમર: ${formData.age}
વતન / સ્થળ: ${formData.place}
અવસાન તારીખ: ${formData.dateOfDemise}
અવસાન સમય: ${formData.antimYatraTime}
નિવાસ સ્થળ: ${formData.residenceAddress}
અંતિમ યાત્રા સ્થળ: ${formData.antimYatra}
સંપર્ક નંબર: ${formData.contactNumber}
સંપર્ક વ્યક્તિનો નંબર: ${formData.contactPersonNumber}
પ્રાર્થના સભા નહીં: ${formData.noPrarthana ? "હા" : "ના"}
સંદેશ મોકલવો છે: ${formData.sendMessageOn}
`;

    // const fileContentGujarati = ``;

    setPreviewTextEnglish(fileContentEnglish);
    setPreviewTextGujarati(fileContentGujarati);
    // const fileContent2 = ``;
    // jsFileDownload(fileContent2, "death_info.txt");
  };

  const handlePreviewTextChangeEnglish = (e) => {
    setPreviewTextEnglish(e.target.value);
  };

  const handlePreviewTextChangeGujarati = (e) => {
    setPreviewTextGujarati(e.target.value);
  };

  const handleSendWhatsapp = () => {
    const whatsappMessage = `
      Sad Demise: ${formData.sadDemise}
      Age: ${formData.age}
      Vatan/Place: ${formData.place}
      Date of Demise: ${formData.dateOfDemise}
      Residence Address: ${formData.residenceAddress}
      To/Antim Yatra: ${formData.antimYatra}
      Contact Number: ${formData.contactNumber}
      Contact Person Number: ${formData.contactPersonNumber}
      No Prarthana: ${formData.noPrarthana ? "Yes" : "No"}
      Send Message on: ${formData.sendMessageOn}
    `;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(
        whatsappMessage
      )}`
    );
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Grid2
        container
        spacing={3}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "30px",
          maxWidth: "1000px",
        }}
      >
        <Grid2 size={{ sm: 12, md: 12 }}>
          <h2>Death Information</h2>
        </Grid2>
        {/* Sad Demise */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <FormControl fullWidth>
            {/* <InputLabel>Sad Demise</InputLabel> */}
            <Select
              name="sadDemise"
              value={formData.sadDemise}
              onChange={handleInputChange}
              fullWidth
              displayEmpty
              sx={{ height: "56px" }}
            >
              <MenuItem value="" disabled>
                <em>Sad Demise of </em>
              </MenuItem>
              {people.map((person) => (
                <MenuItem key={person.id} value={person.name}>
                  {person.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid2>

        {/* Age */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        {/* Vatan / Place */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Vatan / Place"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        {/* Date of Demise (DD/MM/YYYY) */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <DatePicker
            label="Date of Demise"
            value={formData.dateOfDemise}
            onChange={handleDateChange}
            format="DD/MM/YYYY"
            renderInput={(params) => <TextField fullWidth {...params} />}
            className="textField"
          />
        </Grid2>

        {/* Antim Yatra Date (DD/MM/YYYY) */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <DatePicker
            label="Antim Yatra Date"
            value={formData.antimYatraDate}
            onChange={handleAntimYatraDateChange}
            format="DD/MM/YYYY"
            renderInput={(params) => <TextField fullWidth {...params} />}
            className="textField"
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 3 }}>
          <TimePicker
            label="Antim Yatra Time"
            value={formData.antimYatraTime}
            onChange={handleTimeChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
            className="textField"
          />
        </Grid2>

        {/* Residence Address */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Residence Address"
            name="residenceAddress"
            value={formData.residenceAddress}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        {/* To / Antim Yatra */}
        <Grid2 size={{ xs: 7.5, sm: 12, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>To / Antim Yatra</InputLabel>
            <Select
              name="antimYatra"
              value={formData.antimYatra}
              onChange={handleInputChange}
              className="textField"
            >
              <MenuItem value="Place1">Place 1</MenuItem>
              <MenuItem value="Place2">Place 2</MenuItem>
              <MenuItem value="Place3">Place 3</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        {/* Contact Number */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 3 }} />

        {/* Name of Relation 1 */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Name of Relation 1"
            name="relationName1"
            onChange={handleInputChange}
            value={formData.relationName1}
            className="textField"
          />
        </Grid2>

        {/* Contact Number of Relation 1 */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Contact Number of Relation 1"
            name="contactNumber1"
            value={formData.relationContactNumber1}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 3 }} />

        {/* Name of Relation 2 */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Name of Relation 2"
            name="relationName2"
            value={formData.relationName2}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        {/* Contact Number of Relation 2 */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <TextField
            fullWidth
            label="Contact Number of Relation 2"
            name="contactNumber2"
            value={formData.relationContactNumber2}
            onChange={handleInputChange}
            className="textField"
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 3 }} />

        {/* No Prarthana */}
        <Grid2 size={{ xs: 12, sm: 12, md: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.noPrarthana}
                onChange={handleCheckboxChange}
              />
            }
            label="No Prarthana"
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 9 }} />

        {!formData.noPrarthana && (
          <>
            {/* Date of Prarthana Sabha (DD/MM/YYYY) */}
            <Grid2 size={{ sm: 12, md: 3 }}>
              <DatePicker
                label="Date of Prarthana Sabha"
                value={formData.prarthanaDate}
                onChange={handlePrarthanaDateChange}
                format="DD/MM/YYYY"
                renderInput={(params) => <TextField fullWidth {...params} />}
                className="textField"
              />
            </Grid2>

            {/* Time of Prarthana Sabha */}
            <Grid2 size={{ sm: 12, md: 3 }}>
              <TimePicker
                label="Time of Prarthana Sabha"
                value={formData.prarthanaTime}
                onChange={handlePrarthanaTimeChange}
                renderInput={(params) => <TextField fullWidth {...params} />}
                className="textField"
              />
            </Grid2>

            {/* Prarthana Sabha Address */}
            <Grid2 size={{ sm: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Prarthana Sabha Address"
                name="prarthanaSabhaAddress"
                value={formData.prarthanaAddress}
                onChange={handleInputChange}
                className="textField"
              />
            </Grid2>
          </>
        )}

        <Grid2 size={{ md: 9 }} />

        {/* Upload Photo */}
        <Grid2 size={{ sm: 12, md: 12 }}>
          <Button variant="contained" component="label">
            Upload Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handlePhotoUpload}
            />
          </Button>
          {formData.photo && (
            <Typography variant="body2">{formData.photo.name}</Typography>
          )}
        </Grid2>

        {/* Generate Text File Button */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <Button variant="contained" onClick={handleGenerateFile}>
            Generate Text File
          </Button>
        </Grid2>

        {/* Send on WhatsApp Button */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleSendWhatsapp}
          >
            Send on WhatsApp
          </Button>
        </Grid2>

        <Grid2 size={{ sm: 12, md: 6 }} />

        {/* Preview Section */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Paper elevation={2} sx={{ padding: "16px", marginTop: "20px" }}>
            {/* Photo Preview */}
            {formData.photoUrl && (
              <>
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                  Uploaded Photo Preview:
                </Typography>
                <img
                  src={formData.photoUrl}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "10px",
                  }}
                />
              </>
            )}
            {/* Editable Preview Field */}
            <TextField
              label="English Preview"
              multiline
              rows={20}
              value={previewTextEnglish}
              onChange={handlePreviewTextChangeEnglish}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </Grid2>
        {/* Preview Section */}
        <Grid2 size={{ sm: 12, md: 6 }}>
          <Paper elevation={2} sx={{ padding: "16px", marginTop: "20px" }}>
            {/* Photo Preview */}
            {formData.photoUrl && (
              <>
                <Typography variant="h6" style={{ marginTop: "20px" }}>
                  Uploaded Photo Preview:
                </Typography>
                <img
                  src={formData.photoUrl}
                  alt="Uploaded"
                  style={{
                    width: "100%",
                    maxWidth: "400px",
                    marginTop: "10px",
                  }}
                />
              </>
            )}
            {/* Editable Preview Field */}
            <TextField
              label="Gujarati Preview"
              multiline
              rows={20}
              value={previewTextGujarati}
              onChange={handlePreviewTextChangeGujarati}
              fullWidth
              margin="normal"
              variant="outlined"
            />
          </Paper>
        </Grid2>
      </Grid2>
    </LocalizationProvider>
  );
};

export default DeathInformationForm;

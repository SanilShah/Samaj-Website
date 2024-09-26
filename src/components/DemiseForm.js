import React, { useState } from "react";
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

const DeathInformationForm = () => {
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
    contactPersonNumber: "",
    noPrarthana: false,
    sendMessageOn: "",
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

  const handleTimeChange = (newValue) => {
    setFormData({ ...formData, antimYatraTime: newValue });
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
📞 Contact Number: ${formData.contactNumber}
📞 Contact Person: ${formData.contactPersonNumber}

We humbly request that there will be ${
      formData.noPrarthana ? "no prarthana" : "prarthana"
    } following the ceremonies.

Please keep ${formData.sadDemise} in your thoughts and prayers. 🙏
`;

    //     const fileContentGujarati = `
    // 💔 દુઃખદ સમાચાર

    // ભારે દિલથી, અમે આપને જણાવી રહ્યા છીએ કે આપણા પ્રિય ${
    //       formData.sadDemise
    //     } (ઉંમર: ${formData.age}) હવે આ દુનિયામાં નથી રહ્યા.

    // 🕊️ મૃત્યુ તારીખ: ${formData.dateOfDemise.format("DD/MM/YYYY")}
    // 🕒 મૃત્યુ સમય: ${formData.timeOfDemise.format("HH:mm A")}
    // 🏡 વતન / સ્થળ: ${formData.place}

    // અંતિમ યાત્રા (Antim Yatra) તેમનાં નિવાસસ્થાન ${
    //       formData.residenceAddress
    //     }થી શરૂ થશે અને ${
    //       formData.antimYatra
    //     } ખાતે અંતિમ સંસ્કારો માટે લઈ જવામાં આવશે.

    // વધુ માહિતી માટે, આપ સંપર્ક કરી શકો છો:
    // 📞 સંપર્ક નંબર: ${formData.contactNumber}
    // 📞 સંપર્ક વ્યક્તિ: ${formData.contactPersonNumber}

    // કૃપા કરીને ધ્યાનમાં રાખશો કે અંતિમ સંસ્કારો બાદ ${
    //       formData.noPrarthana
    //         ? "કોઈ પ્રાર્થના રાખવામાં આવશે નહીં"
    //         : "પ્રાર્થના રાખવામાં આવશે"
    //     }.

    // કૃપા કરીને ${formData.sadDemise}ને તમારી પ્રાર્થનામાં યાદ રાખજો. 🙏
    // `;

    const fileContentGujarati = ``;

    setPreviewTextEnglish(fileContentEnglish);
    setPreviewTextGujarati(fileContentGujarati);
    // const fileContent2 = ``;
    // jsFileDownload(fileContent2, "death_info.txt");
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
        spacing={2}
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "20px",
          maxWidth: "900px",
        }}
      >
        <Grid2 size={{ sm: 12, md: 12 }}>
          <h2>Death Information</h2>
        </Grid2>

        {/* Sad Demise */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Sad Demise of"
            name="sadDemise"
            value={formData.sadDemise}
            onChange={handleInputChange}
          />
        </Grid2>

        {/* Age */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
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
          />
        </Grid2>

        <Grid2 size={{ sm: 12, md: 3 }}>
          <TimePicker
            label="Antim Yatra Time"
            value={formData.antimYatraTime}
            onChange={handleTimeChange}
            renderInput={(params) => <TextField fullWidth {...params} />}
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
            >
              <MenuItem value="Place1">Place 1</MenuItem>
              <MenuItem value="Place2">Place 2</MenuItem>
              <MenuItem value="Place3">Place 3</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        {/* Contact Number */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
          />
        </Grid2>

        {/* Contact Person Number */}
        <Grid2 size={{ sm: 12, md: 3 }}>
          <TextField
            fullWidth
            label="Contact Person Number"
            name="contactPersonNumber"
            value={formData.contactPersonNumber}
            onChange={handleInputChange}
          />
        </Grid2>

        {/* No Prarthana */}
        <Grid2 size={{ xs: 12, sm: 12, md: 12 }}>
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

        {/* Send Message on */}
        <Grid2 size={{ xs: 7, sm: 12, md: 3 }}>
          <FormControl fullWidth>
            <InputLabel>Send Message on</InputLabel>
            <Select
              name="sendMessageOn"
              value={formData.sendMessageOn}
              onChange={handleInputChange}
            >
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="WhatsApp">WhatsApp</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
            </Select>
          </FormControl>
        </Grid2>

        <Grid2 size={{ md: 9 }} />

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
            <Typography variant="h6">English Text</Typography>
            <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
              {previewTextEnglish || "No preview available yet."}
            </Typography>
          </Paper>
        </Grid2>
        {/* Preview Section */}
        {/* <Grid2 size={{ sm: 12, md: 6 }}>
          <Paper elevation={2} sx={{ padding: "16px", marginTop: "20px" }}>
            <Typography variant="h6">Gujarati Text</Typography>
            <Typography variant="body1" style={{ whiteSpace: "pre-line" }}>
              {previewTextGujarati || "No preview available yet."}
            </Typography>
          </Paper>
        </Grid2> */}
      </Grid2>
    </LocalizationProvider>
  );
};

export default DeathInformationForm;

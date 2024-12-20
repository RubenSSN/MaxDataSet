const chapter6 = {
    name: "6. Radiation",
    children: [
      {
        name: "6.1 Radiation Therapy Overview",
        children: [
          { name: "Did the patient receive radiation therapy?" },
          { name: "If no, given reason" },
          { name: "If other, please specify" },
          { name: "Reason for radiation therapy" },
          { name: "Aim of radiation therapy" }
        ]
      },
      {
        name: "6.2 Radiation Therapy Details",
        children: [
          { name: "Radiation Therapy Laterality" },
          { name: "Radiation Therapy Site" },
          { name: "Radiation Therapy Technique" },
          { name: "Type of Radiation Therapy" },
          { name: "Radiation Therapy Tissue Type" },
          { name: "Surgical Transposition of Organs" }
        ]
      },
      {
        name: "6.3 Dosimetry and Treatment Schedule",
        children: [
          { name: "Start of Radiation Therapy" },
          { name: "End of Radiation Therapy" },
          { name: "Intended/prescribed total dose" },
          { name: "Total dose (in Grays)" },
          { name: "Dose per fraction" },
          { name: "Number of fractions" },
          { name: "Total Dose Delivered to CTV1 (elective CTV)" },
          { name: "Total Dose Delivered to CTV2 (tumor bed)" },
          { name: "3 consecutive treatments missed?" },
          { name: "Toxicity of radiation therapy?" },
          { name: "Reason for interruption" },
          { name: "End date of radiation therapy" }
        ]
      },
      {
        name: "6.4 Treatment Planning",
        children: [
          { name: "Indicate GTV" },
          { name: "Indicate PTV" },
          { name: "Planning/color wash (upload)" },
          { name: "Timing of Radiation Therapy" }
        ]
      },
      {
        name: "6.5 Additional Treatments",
        children: [
          { name: "Additional concurrent treatments" }
        ]
      },
      {
        name: "6.6 Documentation and Personnel",
        children: [
          { name: "Comments" },
          { name: "Radiation oncologist" },
          { name: "Report for Radiation Oncology (upload)" }
        ]
      }
    ]
  };
  
  export { chapter6 };
  
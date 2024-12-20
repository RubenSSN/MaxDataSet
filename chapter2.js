const chapter2 = {
    name: "2. Radiology",
    children: [
      {
        name: "2.1 Modality",
        children: [
          { name: "Type of radiology exam" },
          { name: "Date of radiology exam" }
        ]
      },
      {
        name: "2.2 Primary Lesion",
        children: [
          { name: "Did the tumour develop in a previously irradiated area?" },
          { name: "Initial radiology report (important for SB)" },
          { name: "CT Initial size A (in mm)" },
          { name: "CT Initial size B (in mm)" },
          { name: "CT Initial size C (in mm)" },
          { name: "MRI Initial size A (in mm)" },
          { name: "MRI Initial size B (in mm)" },
          { name: "MRI Initial size C (in mm)" },
          { name: "Location of initial lesion" },
          { name: "Tumor Involvement into Surrounding Soft Tissues or Joint" },
          { name: "Regional Lymph Node Involvement" },
          { name: "Skip Lesion Present" },
          { name: "Ipsilateral Pleural-based Secondary Tumor Nodules Present" },
          { name: "Pleural Effusion" },
          { name: "Peritoneal Effusion" },
          { name: "Liver" },
          { name: "Spleen" },
          { name: "Left kidney" },
          { name: "Left renal hilum" },
          { name: "Right kidney" },
          { name: "Right renal hilum" },
          { name: "Left adrenal" },
          { name: "Right adrenal" },
          { name: "Pancreas" },
          { name: "Stomach" },
          { name: "Small bowel" },
          { name: "Mesentery" },
          { name: "Large bowel" },
          { name: "Mesocolon" },
          { name: "Neural foramina" },
          { name: "Psoas" },
          { name: "Abdominal wall" }
        ]
      },
      {
        name: "2.3 Secondary Lesion",
        children: [
          { name: "Lung" },
          { name: "Liver" },
          { name: "Bone" },
          { name: "Peritoneal" },
          { name: "Spleen" },
          { name: "Renal" },
          { name: "Adrenal" },
          { name: "Pancreas" },
          { name: "Lymph node" },
          { name: "Soft tissue" },
          { name: "Other, specify" }
        ]
      },
      {
        name: "2.4 Tumor Response Evaluation Criteria",
        children: [
          { name: "RECIST criteria recorded?" },
          { name: "CHOI criteria recorded?" }
        ]
      }
    ]
  };
  
  export { chapter2 };
  
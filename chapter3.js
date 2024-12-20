const chapter3 = {
    name: "3. Biopsy",
    children: [
      {
        name: "3.1 Biopsy Procedure Details",
        children: [
          { name: "Date of biopsy" },
          { name: "Patient age at first sampling" },
          { name: "Surgical Path Number" },
          { name: "Biopsy type" },
          { name: "Imaging modality for biopsy" },
          { name: "Biopsy site" },
          { name: "Biopsy needle puncture site" },
          { name: "If core biopsy, number of cores" }
        ]
      },
      {
        name: "3.2 Sample Identification",
        children: [
          { name: "Blood sample ID" },
          { name: "Tissue sample ID" },
          { name: "Type of specimen for histological diagnosis" }
        ]
      },
      {
        name: "3.3 Pre-Treatment Information",
        children: [
          { name: "Neo-adjuvant / preoperative therapy?" }
        ]
      },
      {
        name: "3.4 Tumor Characteristics",
        children: [
          { name: "Tumor tissue type" },
          { name: "Proliferation index (Mib) if sarcoma (%)" },
          { name: "Liposarcoma only: proportion of solid (not-lipomatous) tumor" },
          { name: "Mitotic count" },
          { name: "Grading of biopsy" },
          { name: "WHO Diagnosis Code (pathology)" }
        ]
      },
      {
        name: "3.5 Cytology Findings (If Applicable)",
        children: [
          { name: "Pleural effusion cytology" },
          { name: "Peritoneal effusion cytology" }
        ]
      },
      {
        name: "3.6 Pathological Findings",
        children: [
          { name: "Necrosis" },
          { name: "Necrosis (%)" },
          { name: "Pathologic size (largest diameter)" },
          { name: "Pathological size A (in mm)" },
          { name: "Pathological size B (in mm)" },
          { name: "Pathological size C (in mm)" },
          { name: "Grade" },
          { name: "Margin from definitive surgery" },
          { name: "Margin at ink from pathology report" }
        ]
      },
      {
        name: "3.7 Pathology Report",
        children: [
          { name: "Pathologist (biopsy)" },
          { name: "Pathology report (important for SB)" },
          { name: "Read by reference pathologist? (biopsy)" },
          { name: "Date of pathology report" },
          { name: "Report of pathologist (biopsy) (upload)" }
        ]
      },
      {
        name: "3.8 Diagnosis and Revisions",
        children: [
          { name: "Date of diagnosis" },
          { name: "Other malignant findings" },
          { name: "Other benign findings" },
          { name: "Has pathology been revised locally?" },
          { name: "Date of new diagnosis" },
          { name: "Updated soft tissue tumor diagnosis" },
          { name: "Type of liposarcoma" },
          { name: "Type of rhabdomyosarcoma" },
          { name: "Updated bone tumor diagnosis" },
          { name: "Type of chondrosarcoma" }
        ]
      }
    ]
  };
  
  export { chapter3 };
  
const chapter5 = {
    name: "5. Surgery",
    children: [
      {
        name: "5.1 Preoperative Details",
        children: [
          { name: "Did the patient undergo definitive surgery previously?" },
          { name: "Number of previous definitive surgeries" },
          { name: "Date of most recent previous definitive surgery" },
          { name: "Surgery date" },
          { name: "Surgical Path Number" },
          { name: "New surgery ID" },
          { name: "Surgeon" },
          { name: "Indication for surgery" },
          { name: "Disease Phase at Surgery" },
          { name: "Epidural Analgesia" },
          { name: "Anticipated duration of surgery" }
        ]
      },
      {
        name: "5.2 Surgical Planning and Procedure Details",
        children: [
          { name: "Procedure Laterality" },
          { name: "Midline" },
          { name: "Paramedian" },
          { name: "Subcostal" },
          { name: "Transverse" },
          { name: "Abdomino-inguinal" },
          { name: "Oblique" },
          { name: "Thoraco-abdominal" },
          { name: "Anatomic Region Code Surgery" },
          { name: "Duration of surgery (final)" }
        ]
      },
      {
        name: "5.3 Surgical Resection",
        children: [
          { name: "Tissues resected" },
          { name: "Type of resection (soft tissue)" },
          { name: "Type of resection (bone tumor)" },
          { name: "Type of complete resection" },
          { name: "Amputation type" },
          { name: "Limb Salvage Surgery Type" },
          { name: "Psoas muscle (anticipated)" },
          { name: "Psoas fascia (anticipated)" },
          { name: "Femoral nerve (anticipated)" },
          { name: "Sciatic nerve (anticipated)" },
          { name: "Right colon (anticipated)" },
          { name: "Left colon (anticipated)" },
          { name: "Rectum (anticipated)" },
          { name: "Adnexa or Spermatic cord (anticipated)" },
          { name: "Uterus (anticipated)" },
          { name: "Parietal muscle (anticipated)" },
          { name: "Diaphragm (anticipated)" },
          { name: "Kidney (anticipated)" },
          { name: "Adrenal gland (anticipated)" },
          { name: "Bone (anticipated)" },
          { name: "Spleen (anticipated)" },
          { name: "Distal pancreas (anticipated)" },
          { name: "Iliac vein (anticipated)" },
          { name: "IVC (anticipated)" },
          { name: "Small bowel (anticipated)" },
          { name: "Stomach (anticipated)" },
          { name: "Duodenum (anticipated)" },
          { name: "Iliac artery (anticipated)" },
          { name: "Aorta (anticipated)" },
          { name: "Pancreato-duodenectomy (anticipated)" },
          { name: "Other, specify (anticipated)" }
        ]
      },
      {
        name: "5.4 Surgical Reconstruction",
        children: [
          { name: "Surgical Reconstruction Type" },
          { name: "Type of surgical closure" },
          { name: "Donor site for flap" },
          { name: "Other flap site" },
          { name: "Reconstruction (bone tumor)" },
          { name: "Other reconstruction method (bone tumor)" },
          { name: "If allograft used (bone tumor)" },
          { name: "Terminal colostomy" },
          { name: "Loop colostomy" },
          { name: "Terminal ileostomy" },
          { name: "Loop ileostomy" },
          { name: "Urinary stoma" },
          { name: "Other reconstruction, specify" }
        ]
      },
      {
        name: "5.5 Intraoperative Findings",
        children: [
          { name: "Largest tumor dimension" },
          { name: "Margins" },
          { name: "Procedure Extent" },
          { name: "Intraoperative finding of peritoneal sarcomatosis" },
          { name: "Intraperitoneal invasion by retroperitoneal mass" },
          { name: "Tumor rupture or contamination" },
          { name: "Multi-focality" },
          { name: "If multifocality, number of lesions" },
          { name: "Liver" },
          { name: "Psoas muscle" },
          { name: "Psoas fascia" },
          { name: "Femoral nerve" },
          { name: "Sciatic nerve" },
          { name: "Right colon" },
          { name: "Left colon" },
          { name: "Rectum" },
          { name: "Adnexa or Spermatic cord" },
          { name: "Uterus" },
          { name: "Parietal muscle (rectus abdominis, transverse, oblique, quadratus lomborum, iliac)" },
          { name: "Diaphragm" },
          { name: "Kidney" },
          { name: "Adrenal gland" },
          { name: "Bone" },
          { name: "Spleen" },
          { name: "Distal pancreas" },
          { name: "Iliac vein" },
          { name: "IVC" },
          { name: "Small bowel" },
          { name: "Stomach" },
          { name: "Duodenum" },
          { name: "Iliac artery" },
          { name: "Aorta" }
        ]
      },
      {
        name: "5.6 Postoperative Management",
        children: [
          { name: "ICU stay" },
          { name: "Antibiotic Therapy" }
        ]
      },
      {
        name: "5.7 Postoperative Complications and Outcomes",
        children: [
          { name: "Surgical site infection" },
          { name: "Wound dehiscence" },
          { name: "Pneumonia" },
          { name: "UTI" },
          { name: "Seizure" },
          { name: "Nerve injury (other than planned)" },
          { name: "Graft/prosthesis/flap failure" },
          { name: "C. difficile infection" },
          { name: "Systemic sepsis" },
          { name: "One or more complications (from the above list)" },
          { name: "Bleeding requiring transfusion" },
          { name: "Unplanned readmission" },
          { name: "Reoperation due to postoperative complication" },
          { name: "Unplanned reoperation" },
          { name: "Still in hospital >30 days" },
          { name: "Death" },
          { name: "Clavien Dindo complication (Grade ≥3)" },
          { name: "Abdominal abscess" },
          { name: "Bowel anastomotic leak" },
          { name: "Biliary leak" },
          { name: "Bleeding" },
          { name: "Evisceration" },
          { name: "Deep venous thrombosis" },
          { name: "Lymphatic leak" },
          { name: "Pancreatic leak" },
          { name: "Sepsis" },
          { name: "Urinary leak" },
          { name: "Other, specify" }
        ]
      },
      {
        name: "5.8 Complexity and Involvement of Specialists",
        children: [
          { name: "Complexity/involvement of specialists" },
          { name: "Non-lung metastatic site surgical management" },
          { name: "Metastatic lung disease surgical management" },
          { name: "Localization technique" },
          { name: "Number of disciplines involved" },
          { name: "Other specialists involved" }
        ]
      },
      {
        name: "5.9 Documentation",
        children: [
          { name: "Report for surgery (upload)" },
          { name: "Operation duration (final)" },
          { name: "Blood loss" }
        ]
      }
    ]
  };
  
  export { chapter5 };
  
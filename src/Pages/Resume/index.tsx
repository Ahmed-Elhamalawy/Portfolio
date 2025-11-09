// Resume.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import {
  ResumeSection,
  ResumeTitle,
  ResumeContainer,
  ResumeImage,
  DownloadButton,
  ButtonIcon,
  ButtonText,
} from "./styles";
import CvImg from "../../assets/images/CvImag.png";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Ahmed_Elhamalawy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <ResumeSection>
      <DownloadButton onClick={handleDownload}>
        <ButtonIcon>
          <FontAwesomeIcon icon={faDownload} />
        </ButtonIcon>
        <ButtonText>Download Resume</ButtonText>
      </DownloadButton>

      <ResumeContainer>
        <ResumeImage src={CvImg} alt="Ahmed Elhamalawy Resume" />
      </ResumeContainer>
    </ResumeSection>
  );
};

export default Resume;

import HeroPreText from "../heroPreText";
import ProjectSummaryCard from "../projectSummaryCard";
import {
  Card,
  Image,
  InnerSection,
  MainSection,
  TitleText,
  black1,
} from "../styles";
import RoleDetails from "./RoleDetails";

interface IProjectHeroProps {
  projectName: string;
  roleDetails: Array<{ title: string; details: Array<string> }>;
  projectSummary: string;
  projectImage: string;
  heroPreText: string;
}

const ProjectHeroSection = (props: IProjectHeroProps) => {
  const {
    projectName,
    roleDetails,
    projectImage,
    projectSummary,
    heroPreText,
  } = props;
  return (
    <MainSection width="100%" padding="72px 0" smpadding="40px 0">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          gap="56px"
          smgap="24px"
          alignitems="center"
          smwidth="100%"
        >
          <Card
            flex
            flexdirection="column"
            gap="8px"
            alignitems="center"
            smwidth="100%"
          >
            <TitleText
              size="112px"
              lineheight="141px"
              weight="400"
              color={black1}
              smsize="40px"
              smlineheight="76px"
            >
              {projectName}
            </TitleText>
            <HeroPreText text={heroPreText} />
          </Card>
          <Card flex alignitems="center" justifycontent="center" smwidth="100%">
            <Image src={projectImage} alt="trava" smwidth="100%" />
            {/* <LazyLoad imagesrc={projectImage} height="600px" width="600px" /> */}
          </Card>
          <Card
            flex
            justifycontent="space-between"
            smflexdirection="column"
            smgap="40px"
            width="978px"
            mdwidth="100%"
            margin="104px 0 0"
            smmargin="24px 0 0"
          >
            {roleDetails.map((detail, index) => (
              <RoleDetails
                key={index}
                title={detail.title}
                details={detail.details}
              />
            ))}
          </Card>

          {projectSummary !== "" && (
            <ProjectSummaryCard text={projectSummary} />
          )}
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default ProjectHeroSection;

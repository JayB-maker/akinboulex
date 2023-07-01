import {
  Card,
  InnerSection,
  LinkText,
  MainSection,
  Text,
  black2,
  black4,
} from "../styles";

interface IProjectNavigationProps {
  prevPath: string;
  nextPath: string;
  prevProject?: string;
  nextProject?: string;
  last?: boolean;
  first?: boolean;
}

const ProjectNavigation = (props: IProjectNavigationProps) => {
  const { nextPath, prevPath, first, last, nextProject, prevProject } = props;
  return (
    <MainSection width="100%" padding="128px 0" smpadding="0 0 80px">
      <InnerSection>
        <Card
          flex
          justifycontent="space-between"
          smflexdirection="column"
          width="978px"
          mdwidth="100%"
          margin="0 auto"
        >
          <Card>
            {!first && (
              <Card flex flexdirection="column" gap="4px">
                <Text
                  size="16px"
                  lineheight="30px"
                  color={black4}
                  smsize="14px"
                  smlineheight="26px"
                  weight="400"
                >
                  PREVIOUS PROJECT
                </Text>
                <LinkText
                  to={prevPath}
                  size="16px"
                  lineheight="30px"
                  color={black2}
                  smsize="14px"
                  weight="400"
                  style={{ textDecoration: "underline" }}
                >
                  {prevProject}
                </LinkText>
              </Card>
            )}
          </Card>
          <Card>
            {!last && (
              <Card flex flexdirection="column" gap="4px">
                <Text
                  size="16px"
                  lineheight="30px"
                  color={black4}
                  smsize="14px"
                  smlineheight="26px"
                  weight="400"
                >
                  NEXT PROJECT
                </Text>
                <LinkText
                  to={nextPath}
                  size="16px"
                  lineheight="30px"
                  color={black2}
                  smsize="14px"
                  weight="400"
                  style={{ textDecoration: "underline" }}
                >
                  {nextProject}
                </LinkText>
              </Card>
            )}
          </Card>
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default ProjectNavigation;

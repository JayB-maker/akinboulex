// import ProjectText from "../../../../../ui/projectText";
import PrototypeButton from "../../../../../ui/prototypeButton";
import { Card, InnerSection, MainSection } from "../../../../../ui/styles";

const StreetSchoolDescription = () => {
  return (
    <MainSection width="100%" padding="56px 0 0">
      <InnerSection>
        <Card
          flex
          flexdirection="column"
          gap="100px"
          smgap="80px"
          alignitems="center"
        >
          <Card
            flex
            flexdirection="column"
            gap="12px"
            smgap="16px"
            width="975px"
            mdwidth="100%"
            alignitems="center"
            margin="0 auto"
          >
            {/* <ProjectText text="Through Trava, travelers are able to earn extra income while on the move by delivering packages and parcels to people at their destination. Whether you travel via public transport, private vehicles, or flights, you can use Trava to find parcels to be delivered along your route. Simply register on the platform, set your travel itinerary, and browse through available packages that need to be delivered." />
            <ProjectText text="Trava is not only a convenient way to make money while traveling, but it also provides a fast and reliable delivery service for people who need to send packages quickly. Currently, the MVP version of Trava covers road travel, but the platform plans to expand into air travel in the near future. Join Trava today and become part of a community of travelers who are turning their journeys into profitable opportunities." /> */}
          </Card>
          <PrototypeButton path="/" buttonText="View Prototype" />
        </Card>
      </InnerSection>
    </MainSection>
  );
};

export default StreetSchoolDescription;

import ProjectHeroSection from "../../../../../ui/projectHeroSection";

const roleDetails = [
  {
    title: "YEAR",
    details: ["2020"],
  },
  {
    title: "ROLE",
    details: ["User Interface Design", "User Experience Design"],
  },
  {
    title: "INDUSTRY",
    details: ["Education"],
  },
];

const StreetSchoolHeroSection = () => {
  return (
    <ProjectHeroSection
      projectImage="https://res.cloudinary.com/dt3jkpbws/image/upload/v1685979284/portfolio-assets/street-school_objn85.svg"
      projectName="StreetSchool"
      projectSummary="StreetSchool is a web and mobile platform that facilitates management and administration in educational settings for students, teachers, school administration, and parents."
      roleDetails={roleDetails}
      heroPreText="Bridging the gap between students, school administration, and parents in education"
    />
  );
};

export default StreetSchoolHeroSection;

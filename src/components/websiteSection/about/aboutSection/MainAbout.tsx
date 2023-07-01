import MainText from "../../../../ui/mainText";
import { Card } from "../../../../ui/styles";

const MainAbout = () => {
  return (
    <Card flex flexdirection="column" gap="48px" smgap="24px" flexratio="9" padding="0 30px 83px 0" mdpadding="0" smpadding="0">
      <MainText text="Hello👋, I'm Boluwatife Akinlabi, and I am a seasoned Product Designer with close to 3 years of experience in helping early-stage startups validate ideas and build dynamic and impactful solutions." />
      <MainText text="Throughout my career, I have had the privilege of working with a diverse range of industries, including education, Web3, logistics, social connections, and many more. My programming background has proven to be a valuable asset in making significant decisions while designing digital products, ensuring a harmonious relationship between the business objectives and the user experience of the product, resulting in solutions that are both effective and intuitive for end-users." />
      <MainText text="When I'm not designing, I enjoy indulging in my hobbies, which include watching action movies, sitcoms, medical and legal shows, working out in the gym, and enjoying nice, spicy meals. As a passionate and dedicated designer, I also take time occasionally to provide guidance and mentorship for other designers in the space." />
      <MainText text="I am deeply committed to creating products that have a positive impact on people's lives, and I am always looking for ways to enhance my skills and stay up-to-date with the latest industry trends. If you have any questions or would like to discuss a potential project, please don't hesitate to reach out. " />
      <MainText text="Thanks for visiting my portfolio!" />
    </Card>
  );
};

export default MainAbout;

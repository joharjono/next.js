import NavMenu from "./NavMenu";
import SocialIcon from "./SocialIcon";

const Bio = () => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center flex-wrap gap-y-8 gap-x-8">
      <NavMenu />
      <SocialIcon />
    </div>
  );
};

export default Bio;

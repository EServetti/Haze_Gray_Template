import "../../styles/App.css";
import Carousel from "./carousel";

const MainContent = () => {
  return (
    <div className="main-content-component">
      <h1>
        This is a template that I will use for your products, here will be a small description of the product that is displayed on this specific page.
      </h1>
      <Carousel/>
    </div>
  );
};

export default MainContent;

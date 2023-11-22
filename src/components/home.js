import React from "react";
class ImageComponent extends React.Component {
  render() {
    return (
      <div>
        <img src="pig.png" alt="Where Every Dollar Finds Its Purpose" />
        <h1>" Where every penny matters"</h1>
        <p className="text">
          Welcome to PENNY$PIGLET your go-to platform for simple and effective
          budget management. Take control of your finances effortlessly with our
          intuitive dashboard, smart expense tracking, and customizable budgets.
          Set goals, plan for the future, and enjoy the security of our
          state-of-the-art encryption. Sign up today and achieve financial
          well-being with ease!
        </p>
        <footer className="footer">
          <div className="social-links">
            <a href="https://www.facebook.com">Facebook</a>
            <a href="https://www.instagram.com">Instagram</a>
            <a href="https://www.reddit.com">Reddit</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default ImageComponent;

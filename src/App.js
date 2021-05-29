import React from "react";
import Header from "./components/Header.jsx";
import Article from "./components/Article.jsx";
import CarouseliCaria from "./components/CarouseliCaria.jsx";
import Form from "./components/Form.jsx";
import Footer from "./components/Footer.jsx";
import './App.scss';

export default class App extends React.Component {
  state = {
    advantages: [
      { id: 1, title: "Offer coupons", img: "./images/Build.svg", content: "Grow your customer base by offering free coupons that are advertised on social media and discoverable through Google search. No hidden or upfront fees and you get a free professional profile.  Engage your customers and leads while expanding your business." },
      { id: 2, title: "Search and discover", img: "./images/Analyze.svg", content: "Our directory is accessed by families across US and Canada to find local service providers and facilities by profession, services offered, or ratings and rankings We match families based on their needs." },
      { id: 3, title: "Improve satisfaction", img: "./images/Improve.svg", content: "Get higher ratings and better reviews through transparency, media-rich profiles, engaging social blog, professional articles, and accreditation.Create events to promote your business and advertise them on social media." },
      { id: 4, title: "Profile boosting", img: "./images/Manage.svg", content: "Get more referrals through improved ratings and reviews, performance monitoring, recommendations from other professionals, and profile search boosting. Your profiles are discoverable on Google search." }
    ],
    scrWidth: window.innerWidth
  }
  componentDidMount() {
    window.addEventListener("resize", () => {this.setState({
      scrWidth: window.innerWidth
    })});
  }
  render() {
    return (
      <div className="App">
        <header className="container-wrapper">
          <Header advantages={ this.state.advantages } scrWidth={ this.state.scrWidth }/>
        </header>
        <main>
          <Article />
          <div className="carousel-container container-wrapper">
            <h2 className="header-title">iCaria Living - Explore the wonders of life</h2>
            <CarouseliCaria />
          </div>
          <Form />
        </main>
        <Footer />
      </div>
    );
  }
}


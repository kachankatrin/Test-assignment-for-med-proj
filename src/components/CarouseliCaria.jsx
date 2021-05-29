import React from "react";

export default class CarouseliCaria extends React.Component {
  state = {
    carouselData: [
      {id: 0, img: "./images/MicrosoftTeams-image.png", title: "Sales Agent" },
      {id: 1, img: "./images/city-business-owner.png", title: "Сity Business Owner" },
      {id: 2, img: "./images/Tutor.png", title: "Tutor" },
      {id: 3, img: "./images/cheerful-banker-advertising-loan-program.png", title: "Financial Advisor" },
      {id: 4, img: "./images/GettyImages-970151454_k5xv9q.png", title: "Personal Care Giver" },
      {id: 5, img: "./images/group-young-sporty-people-sitting-sukhasana-exercise.png", title: "Yoga Trainer" },
      {id: 6, img: "./images/medium-shot-happy-doctor-with-orange-kiwi.png", title: "Nutritionist" },
      {id: 7, img: "./images/astrologer.png", title: "Astrologer" },
      {id: 8, img: "./images/SeniorCareDirector.png", title: "Senior Care Director" }
    ],
    currentIndex: 0
  };
  prev = () => {
    const firstImg = this.state.carouselData.pop();
    this.setState({
      carouselData: [firstImg, ...this.state.carouselData]
    })
  };
  next = () => {
    const lastImg = this.state.carouselData.shift();
    this.setState({
      carouselData: [...this.state.carouselData, lastImg]
    })
  }
  render() {
    return (
      <div className="custom-carousel-container">
        <div className="custom-carousel-wrapper">
          <button onClick={this.prev}>
            <i className="left-arrow"></i>
          </button>
          <div className="custom-carousel-content-wrapper">
            <div className={`custom-carousel-content`} >
              {this.state.carouselData.map(data => 
              <div key={data.id} className="profession-container">
                <div className="img-container">
                  <img src={data.img} alt={data.title}/>
                </div>
                <p>{data.title}</p>
              </div>
              )}
            </div>
          </div>
          <button onClick={this.next}>
            <i className="right-arrow"></i>
          </button>
      </div>
      <div className="dots">
        <ol>
          <li className="dot-xs"></li>
          <li className="dot-s"></li>
          <li className="dot-sm"></li>
          <li className="dot-m"></li>
          <li className="dot-l"></li>
          <li className="dot-m"></li>
          <li className="dot-sm"></li>
          <li className="dot-s"></li>
          <li className="dot-xs"></li>
        </ol>
      </div>
    </div>
    )
  }
}
export default function Article() {
    return (
        <div className="article-container"
        style={{ 
            background: `url('${process.env.PUBLIC_URL}/images/young-professional-woman-sitting-stair-front-glass-building-holding-laptop-lap-talking-mobile-phone.svg')`
          }}
        >
            <div className="container-wrapper">
                <div className="article-text">
                    <h1 className="article-title">Become a five-star professional!</h1>
                    <p className="article-content">Join the growing community of professional icarians.   Use the iCaria professional services to launch and grow your business, manage your clients, organize your schedule, and simplify your payments. With iCaria certification, your customers will be assured safe and secure access to services.</p>
                    <button className="article-btn">Request Info </button>
                </div>
            </div>
        </div>
    )
}
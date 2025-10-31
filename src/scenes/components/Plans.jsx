export default function Plans({ isShown }) {
  return (
    <>
      <div class="us-passport-plans plans-wrapper-all">
        <h3>Speed Of Service</h3>
        <p>
          Are you 16 years or older and need a passport for the first time? Or
          your adult passport has expired for more than 5 years? You’re on the
          right track!
        </p>
        <div class="plans-wrapper">
          <div className="passport-plans">
            <div className="passport-plan-single">
              <h3>Standard</h3>
              <h4>11-15</h4>
              <p>Days processing time</p>
              <a href="#">Start Order Now</a>
              <div class="plan-price-wrapper">
                <p>Service Fee</p>
                <span>$295</span>
              </div>
            </div>
            <div className="passport-plan-single">
              <h3>Standard</h3>
              <h4>11-15</h4>
              <p>Days processing time</p>
              <a href="#">Start Order Now</a>
              <div class="plan-price-wrapper">
                <p>Service Fee</p>
                <span>$295</span>
              </div>
            </div>
            <div className="passport-plan-single">
              <h3>Standard</h3>
              <h4>11-15</h4>
              <p>Days processing time</p>
              <a href="#">Start Order Now</a>
              <div class="plan-price-wrapper">
                <p>Service Fee</p>
                <span>$295</span>
              </div>
            </div>
            {isShown && (
              <div className="passport-plan-single">
                <h3>Standard</h3>
                <h4>11-15</h4>
                <p>Days processing time</p>
                <a href="#">Start Order Now</a>
                <div class="plan-price-wrapper">
                  <p>Service Fee</p>
                  <span>$295</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

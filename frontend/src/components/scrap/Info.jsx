import React from 'react'

const Info = () => {
    return (
        <div className="stats shadow mt-16">

            <div className="stat">
                <div className="stat-title">Years of Experience</div>
                <div className="stat-value text-primary">30+</div>
            </div>

            <div className="stat">
                <div className="stat-title">Coaches  </div>
                <div className="stat-value text-secondary">5+</div>
            </div>

            <div className="stat">
                <div className="stat-value">100%</div>
                <div className="stat-title">Happy customers</div>
                {/* <div className="stat-desc text-secondary">success</div> */}
            </div>

        </div>
    )
}

export default Info
import React from 'react'

const FaqItem = () => {
    return (
        <>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How do I choose the right coach for me?
                </div>
                <div className="collapse-content">
                    <p> To choose the right coach, start by defining your fitness goals. Then, review coaches' profiles to find one whose expertise matches your goals. Reading reviews and scheduling a consultation can help assess their suitability. The right coach will align with your needs and guide you toward your desired results.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    Can I see the coaches' profiles and expertise before making a decision?
                </div>
                <div className="collapse-content">
                    <p>Absolutely! You can access coaches' profiles, including their qualifications and areas of expertise, to make an informed decision. This transparency allows you to select a coach whose background aligns with your specific goals and preferences.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                    How is the progress and communication monitored between the coach and the client?
                </div>
                <div className="collapse-content">
                    <p>Progress monitoring and communication methods may vary depending on the coach's approach and your preferences. Some coaches offer a blend of online and in-person sessions, providing flexibility to meet your needs. Additionally, many coaches utilize modern technology and communication tools to track progress, such as fitness apps and regular check-ins via video calls or messaging. The key is finding a coach whose style aligns with your comfort level and lifestyle for effective collaboration on your fitness journey.</p>
                </div>
            </div>
        </>
    )
}

export default FaqItem
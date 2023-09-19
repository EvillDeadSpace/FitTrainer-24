
import { coach } from '../coach'
import CoachCard from './CoachCard'


const CoachList = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>{coach.map((coach) => <CoachCard key={coach.id} coach={coach} />)}</div>
    )
}

export default CoachList
import { ListStats, ListItem } from "components/Profile/Profile.styled"
import { SectionStats, StatsSpans, TitleStats } from "./Statistic.styled"
import PropTypes from 'prop-types'; 


export const Statistic = ({ title, stats }) => {
    return (
        <SectionStats>
            <TitleStats>{title}</TitleStats>
            
            <ListStats>
                {stats.map(({id, label, percentage}) => {
                return (
                    <ListItem key={id}>
                        <StatsSpans>{label }</StatsSpans>
                        <StatsSpans>{percentage}%</StatsSpans>
                    </ListItem>)
            })}
            </ListStats>

        </SectionStats>
    )
}

Statistic.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
}
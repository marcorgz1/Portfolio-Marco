function Timeline () {
    return (
        <>
            {/* Connector line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#cba6f7] via-[#cba6f7]/30 to-transparent" />

            {/* Timeline dot */}
            <div className="absolute -left-[5px] top-6 w-[11px] h-[11px] rounded-full bg-[#cba6f7] shadow-[0_0_12px_2px_rgba(203,166,247,0.5)] group-hover:shadow-[0_0_18px_4px_rgba(203,166,247,0.7)] transition-shadow duration-300" />
        </>
    )
}

export default Timeline;
